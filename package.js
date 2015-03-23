// package metadata file for Meteor.js

var packageName = 'json-ptr';  // https://github.com/flitbit/json-path
var both = ['client', 'server'];  // where to install: 'client', 'server', or ['client', 'server']
var packageJson = JSON.parse(Npm.require("fs").readFileSync('packages/json-ptr/package.json'));

Package.describe({
    name: packageName,
    summary: 'A complete implementation of JSON Pointer (RFC 6901) for nodejs and modern browsers.',
    version: packageJson.version,
    git: 'https://github.com/flitbit/json-ptr'
});

Package.onUse(function (api) {
    api.versionsFrom(['METEOR@0.9.2.1', 'METEOR@1.0']);
    api.addFiles('index.js', both);

    api.use('templating', 'client');
    api.addFiles('meteor/helper.js', 'client');
});

Package.on_test(function (api) {
    api.use(["tinytest", "json-ptr"]);
    api.use("templating", "client");

    // add stubs
    api.add_files('meteor/tests-client.js', 'client');
    api.add_files('meteor/tests.html', 'client');
    api.add_files('meteor/tests.js', both);
});