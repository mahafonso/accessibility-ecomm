module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "plugin:jsx-a11y/recommended"
  ],
  "plugins": [
    "jsx-a11y"
  ],
  "rules": {
    "jsx-a11y/alt-text": [ 2, {
      "elements": [ "img"],
      "img": ["Image"],
    }],
  }
}