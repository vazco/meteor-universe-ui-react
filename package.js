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

    Npm.depends({
        'react-addons-css-transition-group': '0.14.7'
    });

    api.addFiles([
        'components/Actions.jsx',
        'components/AskModal.jsx',
        'components/Button.jsx',
        'components/Column.jsx',
        'components/Container.jsx',
        'components/Content.jsx',
        'components/Divider.jsx',
        'components/Grid.jsx',
        'components/Header.jsx',
        'components/Icon.jsx',
        'components/Message.jsx',
        'components/Modal.jsx',
        'components/Modals.jsx',
        'components/Toasts.jsx',
        'components/ConfirmTooltip.jsx'
    ]);

    api.addFiles([
        'client/stylesheets/_tools.css',

        'client/stylesheets/AskModal.css',
        'client/stylesheets/Toasts.css',
        'client/stylesheets/confirm.less',
    ], 'client');

    api.mainModule('index.js');
});
