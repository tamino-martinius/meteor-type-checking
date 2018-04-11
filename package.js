Package.describe({
  name: 'zaku:type-checking',
  summary: 'type-checking for string, number, function and array.',
  version: '0.2.0',
  git: 'https://github.com/tamino-martinius/meteor-type-checking.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('coffeescript@1.0.17', ['client', 'server']);
  api.addFiles('type-checking.coffee', ['client', 'server']);
});

Package.onTest(function (api) {
  api.use([
    'zaku:type-checking',
    'coffeescript',
    'test-helpers',
    'tinytest'
  ], ['client', 'server']);
  api.addFiles('type-checking-test.coffee', ['client', 'server']);
});
