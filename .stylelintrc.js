module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-rational-order"
  ],
  rules: {
    "at-rule-no-unknown": [ true, {
      ignoreAtRules: [
        "layer",
        "tailwind"
      ]
    }],
  }
};
