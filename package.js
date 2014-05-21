Package.describe({
  name: "autoform-semantic-ui",
  summary: "Semantic UI components for autoform."
});

Package.on_use(function (api) {
  api.use(['underscore', 'deps', 'templating', 'ui', 'session', 'amplify'], 'client');
  api.use('autoform', 'client');

  api.add_files([
    'templates/autoform-semantic-ui.html',
    'templates/autoform-semantic-ui.js'
    ], 'client');
});
