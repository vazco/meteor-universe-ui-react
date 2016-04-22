import React from 'react';

export const Message = React.createClass({
    displayName: 'Message',

    render () {
        const {className = '', ...props} = this.props;

        return (
            <div className={`ui ${className} message`} {...props}/>
        );
    }
});

export default Message;
