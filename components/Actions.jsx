import React from 'react';

export const Actions = React.createClass({
    displayName: 'Actions',

    render () {
        const {className = '', ...props} = this.props;

        return (
            <div className={`${className} actions`} {...props}/>
        );
    }
});

export default Actions;
