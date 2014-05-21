Package.describe({
  name: "autoform-semantic-ui",
  summary: "Semantic UI components for autoform."
});

Package.on_use(function (api) {
  api.use(['underscore', 'deps', 'templating', 'ui', 'session', 'amplify'], 'client');
  api.use('autoform', 'client');

  api.add_files([
    'autoform-semantic-ui.js',
    'templates/autoform-semantic-ui.html'
    ], 'client');
});
