const postcssJitProps = require("postcss-jit-props");
const postcssImport = require("postcss-import");
const postcssCombineDuplicatedSelectors = require("postcss-combine-duplicated-selectors");
const postcssPresetEnv = require("postcss-preset-env");
const postcssNested = require("postcss-nested");
const openProps = require("open-props");

module.exports = {
  plugins: [
    postcssJitProps(openProps),
    postcssImport(),
    postcssNested(),
    postcssCombineDuplicatedSelectors(),
    postcssPresetEnv({
      stage: 0,
      features: {
        "logical-properties-and-values": false,
        "prefers-color-scheme-query": false,
        "gap-properties": false,
        "custom-properties": false,
        "place-properties": false,
        "not-pseudo-class": false,
        "focus-visible-pseudo-class": false,
        "focus-within-pseudo-class": false,
        "color-functional-notation": false,
      },
    }),
  ],
};
