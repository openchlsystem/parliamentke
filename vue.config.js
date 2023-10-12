const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: ['pdf-lib'],

  configureWebpack: {
    module: {
      rules: [
        // ... other rules ...

        {
          test: /\.(pdf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },
  },
});