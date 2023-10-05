const ANSI_CODES = {
  off: 0,
  bold: 1,
  italic: 3,
  underline: 4,
  blink: 5,
  inverse: 7,
  hidden: 8,
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  black_bg: 40,
  red_bg: 41,
  green_bg: 42,
  yellow_bg: 43,
  blue_bg: 44,
  magenta_bg: 45,
  cyan_bg: 46,
  white_bg: 47
};

/**
 * @param {string} str
 * @param {string} color
 * @return {string}
 */
function set(str, color) {
  if (color) {
    const attributes = color.split('+');
    let ansiStr = "";
    for (const attr of attributes) {
      ansiStr += `\u001B[${ANSI_CODES[attr]}m`;
    }

    ansiStr += str + `\u001B[${ANSI_CODES["off"]}m`;
    return ansiStr;
  }

  return str;
}

/**
 * @param {string} message
 * @param {string} color
 * @return {void}
 */
function log(message, color) {
  console.log(set(message,color));
}

/**
 * @param {string} full_text
 * @param {string} search_regex
 * @param {string} color
 * @return {string}
 */
function replace(full_text, search_regex, color) {
  try {
    const regex = new RegExp('(' + search_regex + ')', 'ig');
    return full_text.replace(regex, set('$1', color));
  } catch {
    return full_text;
  }
}

exports.log = log;
exports.set = set;
exports.replace = replace;
