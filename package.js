Package.describe({
  name: 'praxie:geoip-native',
  version: '1.0.1',
  summary: 'geoip-native npm wrapper. 4-5 times faster than geoip-lite',
  git: 'https://github.com/Praxie/meteor-geoip-native.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('server.js', 'server');
  api.export('GeoIP');
});

Npm.depends({
  "geoip-native": "0.0.8"
});
