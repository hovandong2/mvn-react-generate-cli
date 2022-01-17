export function capitalizeFirstLetter(txting) {
  return string.replace(/^./, string[0].toUpperCase());
}

export function camelize(string) {
  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

/**
 * Pipe format text
 * @param {*} txt: text input
 * @param {*} type: type output: lower, upper, cap
 */
export function formatText(txt, type) {
  const result = {
    lower: txt.toLowerCase(),
    upper: txt.replace(/-/g, '_').toUpperCase(),
    cap: txt.replace(/^.|-[a-z]/g, match => match.toUpperCase().replace(/-/g, '')),
  };
  return result[type];
}
