import fs from 'fs';
import ncp from 'ncp';
import path from 'path';
import {
  promisify
} from 'util';
import { typeDir, typeNames } from './constants';
import { formatText } from './utils';

const access = promisify(fs.access);
const copy = promisify(ncp);


/**
 * Copy template to target folder
 * @param {*} options: get options from arguments CLI
 */
async function copyTemplateFiles(options) {
  const targetDir = `${options.targetDirectory}/src`;
  const targetExtendDir = `${targetDir}/${options.path}`;
  if (options.path) {
    const pathArr = options.path.split('/');
    let pathNested = targetDir;
    pathArr.forEach(elm => {
      pathNested += '/' + elm;
      if (!fs.existsSync(pathNested)) {
        fs.mkdirSync(pathNested);
      }
    });
  }
  
  return copy(options.temporaryDirectory, targetExtendDir, {
    clobber: false,
  });
}

/**
 * Rename nested files and folders depend on type of user input
 * @param {*} tempDir: path of directory temporary
 * @param {*} options: get options from arguments CLI
 */
function renameFilesFoldes(tempDir, options) {
  const getTypeName = options.path.split('/').pop();
  
  const renameDir = (dir) => {
    const dirTemps = fs.readdirSync(dir);
    for (let i = 0; i < dirTemps.length; i++) {
      const typeName = dirTemps[i].includes(typeNames.CAPITALIZE) ? formatText(getTypeName, 'cap') : getTypeName;
      const nameReplace = dirTemps[i].includes(typeNames.CAPITALIZE) ? typeNames.CAPITALIZE : typeNames.LOWERCASE;

      const itemOldPath = path.join(dir, dirTemps[i]);
      const stat = fs.lstatSync(itemOldPath);
      const itemNewPath = path.join(dir, dirTemps[i].replace(nameReplace, typeName));
      // Rename directory
      fs.renameSync(itemOldPath, itemNewPath, (e) => {
        console.log(e);
      });
      if (stat.isDirectory()) {
        const subItem = fs.readdirSync(itemNewPath);
        if (subItem.length) {
          renameDir(itemNewPath);
        }
      } else {
        // Rename content in file
        const data = fs.readFileSync(itemNewPath, 'utf8');
        const result = data.replace(new RegExp(typeNames.LOWERCASE, 'g'), formatText(getTypeName, 'lower'))
                           .replace(new RegExp(typeNames.CAPITALIZE, 'g'), formatText(getTypeName, 'cap'))
                           .replace(new RegExp(typeNames.UPPERCASE, 'g'), formatText(getTypeName, 'upper'));
        fs.writeFileSync(itemNewPath, result, 'utf8');
      }
    }
  };
  renameDir(tempDir);
}

/**
 * Return a path of directory
 * @param {*} folder : The folder name
 * @param  {...any} extend : Other extend path
 */
function returnPathDir(folder, ...extend) {
  const currentFileUrl = import.meta.url;
  return path.resolve(
    new URL(currentFileUrl).pathname,
    `../../${folder}`,
    ...extend
  );
}

export async function generateTemplate(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };

  options.templatesDirectory = returnPathDir('templates', options.template.toLowerCase());
  options.temporaryDirectory = returnPathDir('temporary');

  try {
    await access(options.templatesDirectory, fs.constants.R_OK);
  } catch (err) {
    //  console.error('%s Invalid template name', chalk.red.bold('ERROR'));
    process.exit(1);
  }

  // Create a temporary folder and get template from Templates folder
  const tempDir = returnPathDir('temporary');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  } else {
    fs.rmdirSync(tempDir, { recursive: true, force: true });
  }
  await copy(options.templatesDirectory, tempDir, {
    clobber: false,
  });
  
  // Rename dir
  renameFilesFoldes(tempDir, options);

  // Start copy template to target folder
  await copyTemplateFiles(options);

  // Remove temporary folders
  fs.rmdirSync(tempDir, { recursive: true, force: true });
  
  console.log('Finished');

  return true;
}

/**
 * Read docs file
 * @param {*} name : name file
 */
export function readDocs(name) {
  const pathDocs = returnPathDir('docs', name);
  const data = fs.readFileSync(pathDocs, 'utf8');
  console.log(data);
}
