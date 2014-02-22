Package.describe({
    summary: 'type-checking for string, number, function and array.'
});
 
Package.on_use(function (api) {
  api.use('coffeescript',['client', 'server']);
  api.add_files('type-checking.coffee', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use([
    'coffeescript',
    'type-checking',
    'test-helpers',
    'tinytest'
  ], ['client', 'server']);
  api.add_files('type-checking-test.coffee', ['client', 'server']);
});