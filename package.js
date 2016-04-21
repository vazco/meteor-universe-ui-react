Package.describe({
    name: 'universe:ui-react',
    summary: 'UI components for UniCMS.',
    version: '0.2.0',
    readme: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.2.3');
    
    api.use([
        'modules@0.5.0-modules.8',
        'ecmascript@0.4.0-modules.8',
        'universe:utilities-react@1.0.0-beta1'
    ]);

    Npm.depends({
        'react-addons-css-transition-group': '0.14.7'
    });

    api.addFiles([
        'client/stylesheets/_tools.css',

        'client/stylesheets/AskModal.css',
        'client/stylesheets/Toasts.css'
    ], 'client');

    api.mainModule('index.js');
});
