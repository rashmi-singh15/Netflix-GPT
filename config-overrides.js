module.exports = function override(config) {
  config.module.rules.forEach((rule) => {
    if (rule.enforce === "pre" && rule.use) {
      rule.use.forEach((loader) => {
        if (
          loader.loader &&
          loader.loader.includes("source-map-loader")
        ) {
          loader.exclude = /node_modules[\\/]@google[\\/]genai/;
        }
      });
    }
  });

  return config;
};