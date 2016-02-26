import React from 'react';

export const Modal = React.createClass({
    displayName: 'Modal',

    componentDidMount () {
        const $modal = $(ReactDOM.findDOMNode(this));
        const {
            visible,
            modal: {
                detachable = false,
                observeChanges = true,
                ...modal
            } = {}
        } = this.props;

        $modal.modal({
            detachable,
            observeChanges,
            ...modal
        });

        if (visible) {
            $modal.modal('show');
        }
    },

    componentDidUpdate (previousProps) {
        if (!this.props.visible && previousProps.visible) {
            return $(ReactDOM.findDOMNode(this)).modal('hide');
        }

        if (this.props.visible && !previousProps.visible) {
            return $(ReactDOM.findDOMNode(this)).modal('show');
        }
    },

    render () {
        const {className = '', ...props} = this.props;

        return (
            <div className={`ui ${className} modal`} {...props}/>
        );
    }
});

export default Modal;
