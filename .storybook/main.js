const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VirtualModulesPlugin = require('webpack-virtual-modules');

module.exports = {
  reactOptions: { fastRefresh: true },
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
    },
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  webpackFinal: (config, options) => {
    if (!config.resolve.fallback) {
      config.resolve.fallback = {};
    }
    config.resolve.fallback = {
      ...config.resolve.fallback,
      http: false,
      crypto: false,
    };

    config.module.rules.push({
      test: /\.(js)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              // use @babel/preset-react for JSX and env (instead of staged presets)
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-env'),
            ],
            // Falsy values (created by conditional statements) are filtered out
            // so webpack doesn't fail. The array of plugins must only contain
            // truthy values.
            plugins: [
              // Babel will break if react-refresh/babel is used outside of development mode.
              options.configType === 'DEVELOPMENT' &&
                require.resolve('react-refresh/babel'),
              // use @babel/plugin-proposal-class-properties for class arrow functions
              require.resolve('@babel/plugin-proposal-class-properties'),
              // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
              require.resolve('babel-plugin-remove-graphql-queries'),
              // use babel-plugin-react-docgen to ensure PropTables still appear
              require.resolve('babel-plugin-react-docgen'),
            ].filter(Boolean),
          },
        },
      ],
      // include modules that is not yet compatible with ie11
      exclude: [
        /node_modules\/(?!(gatsby|@pmmmwh|@react\-hook|gatsby\-plugin\-fresnel|react\-use\-pagination|query\-string|qs|prop\-types|promise.allsettled|split\-on\-first|strict\-uri\-encode)\/)/i,
      ],
    });
    const svgRule = config.module.rules.find((rule) => {
      if (rule.hasOwnProperty('test')) {
        return rule['test'].test('test.svg');
      }
    });
    svgRule.exclude = /\.inline\.svg$/;

    // Add SCSS support.
    config.plugins.push(new MiniCssExtractPlugin());
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      oneOf: [
        {
          test: /\.module\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                modules: {
                  namedExport: true,
                },
              },
            },
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 2,
                esModule: true,
                modules: {
                  auto: undefined,
                  namedExport: true,
                  localIdentName: `[name]--[local]--[hash:base64:5]`,
                  exportLocalsConvention: `dashesOnly`,
                  exportOnlyLocals: false,
                },
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                implementation: require('postcss'),
                postcssOptions: {
                  plugins: [
                    require('postcss-import'),
                    require('postcss-css-variables')({
                      preserveAtRulesOrder: true,
                    }),
                    require('autoprefixer')({ grid: true }),
                    require('postcss-remove-nested-calc'),
                  ],
                },
              },
            },
          ],
        },
        {
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              // Don't do css modules for non module files.
              // Setting modules here breaks the color and typography stories.
              options: {},
            },
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 2,
                esModule: true,
                modules: true,
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                implementation: require('postcss'),
                postcssOptions: {
                  plugins: [
                    require('postcss-import'),
                    require('postcss-css-variables')({
                      preserveAtRulesOrder: true,
                    }),
                    require('autoprefixer')({ grid: true }),
                    require('postcss-remove-nested-calc'),
                  ],
                },
              },
            },
          ],
        },
      ],
    });

    // Resolve imports relative to src.
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ];
    return config;
  },

  babel: async (config, options) => {
    config.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ];
    config.plugins = [
      options.configType === 'DEVELOPMENT' &&
        require.resolve('react-refresh/babel'),
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve('@babel/plugin-proposal-class-properties'),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries'),
      // use babel-plugin-react-docgen to ensure PropTables still appear
      require.resolve('babel-plugin-react-docgen'),
    ].filter(Boolean);
    return config;
  },
};
