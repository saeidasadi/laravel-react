const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .options({
        hmrOptions: {
            host: process.env.MIX_HMR_HOST,
            port: process.env.MIX_HMR_PORT
        }
    })
    .webpackConfig({
        output: {
            path: '/',
            chunkFilename: 'js/[name].js',
        }
    })
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
