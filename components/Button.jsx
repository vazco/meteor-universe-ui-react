import React from 'react';

export const Button = React.createClass({
    displayName: 'Button',

    render () {
        const {className = '', ...props} = this.props;

        return (
            <div className={`ui ${className} button`} {...props}/>
        );
    }
});

export default Button;
