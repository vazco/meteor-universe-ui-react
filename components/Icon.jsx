import React from 'react';

export const Icon = React.createClass({
    displayName: 'Icon',

    render () {
        const {className = '', icon, ...props} = this.props;

        return (
            <i className={`${className} ${icon} icon`} {...props}/>
        );
    }
});

export default Icon;
