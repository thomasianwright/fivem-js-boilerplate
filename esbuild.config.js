const esbuild = require('esbuild');

var server = esbuild.buildSync({
    entryPoints: ['source/server/index.js'],
    bundle: true,
    platform: 'node',
    target: 'node16',
    outfile: 'build/server.js',
});

const client = esbuild.buildSync({
    entryPoints: ['source/client/index.js'],
    bundle: true,
    platform: 'browser',
    target: 'es2020',
    outfile: 'build/client.js',
});

console.log('server:', server);
console.log('client:', client);