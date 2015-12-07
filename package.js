Package.describe({
    name: 'universe:ui-react',
    summary: 'UI components for UniCMS.',
    version: '0.1.0',
    readme: 'README.md'
});

Package.onUse(function (api) {
    api.use([
        'universe:modules@0.6.7'
    ]);

    api.addFiles([
        'index.import.js',

        'components/Actions.import.jsx',
        'components/AskModal.import.jsx',
        'components/Button.import.jsx',
        'components/Column.import.jsx',
        'components/Container.import.jsx',
        'components/Content.import.jsx',
        'components/Divider.import.jsx',
        'components/Grid.import.jsx',
        'components/Header.import.jsx',
        'components/Icon.import.jsx',
        'components/Message.import.jsx',
        'components/Modal.import.jsx',
        'components/Modals.import.jsx',
        'components/Toasts.import.jsx'
    ]);

    api.addFiles([
        'client/stylesheets/_tools.css',

        'client/stylesheets/AskModal.css',
        'client/stylesheets/Toasts.css'
    ], 'client');
});
