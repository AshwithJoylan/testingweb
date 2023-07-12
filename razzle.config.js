'use strict';

const nodeExternals = require('webpack-node-externals');

module.exports = {
  modifyBabelOptions() {
    return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: ['react-native-web'],
    };
  },
  modify(config, { target, dev }, webpack) {
    // So it can be debugged properly
    config.devtool = dev ? 'eval-source-map' : 'none';

    // Since RN web takes care of CSS, we should remove it for a #perf boost
    config.module.rules = config.module.rules
      .filter(
        rule =>
          !(rule.test && rule.test.exec && rule.test.exec('./something.css')),
      )
      .filter(
        rule =>
          !(
            rule.test &&
            rule.test.exec &&
            rule.test.exec('./something.module.css')
          ),
      );

    config.resolve.alias = {
      ...config.resolve.alias,

      // react-native-gesture-handler uses hammerjs, which isn't SSR friendly
      // https://github.com/software-mansion/react-native-gesture-handler/issues/883
      'hammerjs': '@egjs/hammerjs'
    };

    // Setup exepcted file import priority
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.js',
      '.jsx',
      '.web.ts',
      '.web.tsx',
      '.ts',
      '.tsx',

      // Order is important
      ...config.resolve.extensions,
    ];

    config.module.rules = [
      ...config.module.rules,

      // Process react-native modules because node needs commonjs
      {
        test: /(@?react-(navigation|native)).*\.(ts|js)x?$/,
        exclude: [
          /react-native-web/,
          /\.(native|ios|android)\.(ts|js)x?$/
        ],
        loader: 'babel-loader',
      },

      // Process all our files
      {
        test: /\.(ts|js)x?$/,
        exclude: [
          /node_modules/,
          /\.(native|ios|android)\.(ts|js)x?$/
        ],
        loader: 'babel-loader',
      },
    ];

    config.plugins = [
      ...config.plugins,

      // Some react-antive internals need __DEV__
      // but it should be safe to remove
      new webpack.DefinePlugin({
        '__DEV__': dev
      })
    ];

    if (target === 'node') {
      // We introduce new file extensions (higher priority)
      config.resolve.extensions = [
        '.ssr.js',
        '.ssr.jsx',
        '.ssr.ts',
        '.ssr.tsx',
        ...config.resolve.extensions
      ];

      config.externals = [
        nodeExternals({
          whitelist: [
            dev ? 'webpack/hot/poll?300' : null,
            /\.(eot|woff|woff2|ttf|otf)$/,
            /\.(svg|png|jpg|jpeg|gif|ico)$/,
            /\.(mp4|mp3|ogg|swf|webp)$/,
            /\.(css|scss|sass|sss|less)$/,
  
            // Allow transpilation of react-native for SSR
            /@?react-(navigation|native)/,
            /hammerjs/ // ... because mapping it to @egjs/hammerjs
          ]
        })
      ];
    }

    return config;
  },
};
