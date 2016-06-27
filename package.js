Package.describe({
    name: 'universe:ui-react',
    summary: 'UI components for UniCMS.',
    version: '0.1.4',
    readme: 'README.md'
});

Package.onUse(function (api) {
    api.use([
        'modules@0.5.0-modules.8',
        'ecmascript@0.4.0-modules.8',
        'universe:utilities-react@1.0.0-beta1',
        'less'
    ]);

    api.addFiles([
        'index.js'
    ]);

    api.addFiles([
        'client/stylesheets/_tools.css',

        'client/stylesheets/AskModal.css',
        'client/stylesheets/Toasts.css',
        'client/stylesheets/confirm.less'
    ], 'client');

    api.mainModule('index.js');
});