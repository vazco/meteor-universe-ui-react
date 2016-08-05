import React from 'react';

export const Modals = React.createClass({
    displayName: 'Modals',

    statics: {
        _modals: {},
        _modalsUpdate: () => {},

        hide (name) {
            if (Modals._modals[name]) {
                Modals._modals[name].props.visible = false;
                Modals._modalsUpdate();
            }
        },

        show (name, props = {}) {
            Modals._modals[name].props = props;
            Modals._modals[name].props.visible = true;
            Modals._modalsUpdate();
        },

        register ({name, component, props}) {
            Modals._modals[name] = {component, props: {visible: false, ...props}};
            Modals._modalsUpdate();
        }
    },

    getInitialState () {
        return {modals: Modals._modals};
    },

    componentWillMount () {
        Modals._modalsUpdate = () => this.setState({modals: Modals._modals});
    },

    componentWillUnmount () {
        Modals._modalsUpdate = () => {};
    },

    render () {
        return (
            <div>
                {_.map(this.state.modals, ({component: Component, props: {modal = {}, ...props} = {}}, name) => {
                    modal.onHide = _.wrap(modal.onHide, onHide => {
                        Modals.hide(name);
                        onHide && onHide();
                    });

                    return (
                        <Component key={name} modal={modal} {...props}/>
                    );
                })}
            </div>
        );
    }
});

export default Modals;
