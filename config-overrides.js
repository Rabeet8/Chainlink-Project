const webpack = require('webpack');

module.exports = function override(config, env) {
    // Add fallbacks
    config.resolve.fallback = {
        ...config.resolve.fallback, // Spread operator to retain existing fallbacks
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        process: require.resolve('process/browser'),
    };

    // Add plugins
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        })
    ]);

    return config;
}
