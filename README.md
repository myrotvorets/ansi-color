# ANSI Color Code Output Support for Node.js

This CommonJS module provides basic ANSI color code support, to allow you to
format your console output with foreground and background colors as well as
providing bold and underline support.

This module does not modify any built-in object prototypes, and so is safe
to use with other modules.

This fork:
  - rewrites the code into modern JavaScript;
  - is Node.js-only;
  - fixes the "Legacy octal escape is not permitted in strict mode" issue;
  - adds some tests.

**How to use:**

Yarn:
```json
"resolutions": {
  "ansi-color": "github:@myrotvorets/ansi-color#master"
}
```

npm: 
```json
"overrides": {
  "ansi-color": "github:@myrotvorets/ansi-color#master"
}
```

pnpm:
```json
"pnpm": {
  "overrides": {
    "ansi-color": "github:@myrotvorets/ansi-color#master"
  }
}
```

## Basic usage

```js
// Load the module
var color = require("ansi-color").set;

// Print the word "Error" to stdout in red
console.log(color("Error", "red"));

// Print the word "Error" in red and underlined
console.log(color("Error", "red+underline"));

// Print the word "Success" in bold green, followed by a message
console.log(color("Success", "green+bold"), "Something was successful!");
```

## Supported Colors/Formats

Note: Any of the below formatting strings can be combined together by joining
together desired formats with a `+` symbol. E.g.: `bold+cyan+white_bg`

- Bold Text: `bold`
- Underlined Text: `underline`
- Blinking Text: `blink`
- Black Text: `black`
- Red Text: `red`
- Green Text: `green`
- Yellow Text: `yellow`
- Blue Text: `blue`
- Magenta Text: `magenta`
- Cyan Text: `cyan`
- White Text: `white`
- Black Background: `black_bg`
- Red Background: `red_bg`
- Green Background: `green_bg`
- Yellow Background: `yellow_bg`
- Blue Background: `blue_bg`
- Magenta Background: `magenta_bg`
- Cyan Background: `cyan_bg`
- White Background: `white_bg`
