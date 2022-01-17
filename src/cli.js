import arg from 'arg';
import { templates, typeDir } from './constants';
import { generateTemplate, readDocs } from './main';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--help': Boolean,
      '--crud': Boolean,
      '-h': '--help',
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    type: generateType(args._[0]),
    path: `${generateType(args._[0])}/${args._[1]}`,
    help: args['--help'] || false,
    template: generateTemplateName(args),
  };
}

function generateType(word) {
  const typeResult = {
    f: typeDir.FEATURES,
    feature: typeDir.FEATURES,
    c: typeDir.COMPONENTS,
    component: typeDir.COMPONENTS,
  };
  return typeResult[word];
}

function generateTemplateName(args) {
  let template = '';

  switch (args._[0]) {
    case 'h':
      template = templates.HOOK;
      break;
    case 'c':
      template = templates.COMPONENT;
      break;
    default:
      template = templates.FEATURE;
      break;
  }

  if (args['--crud']) {
    template = templates.FEATURE_CRUD;
  }

  return template;
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);

  if (options.help) {
    return readDocs('HELP.md');
  }

  if (!options.type) {
    console.warn('Maybe you missing: f => feature, c => component, etc...');
    return false;
  }

  await generateTemplate(options);
}
