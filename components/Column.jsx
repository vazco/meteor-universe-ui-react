import React from 'react';

export const Column = React.createClass({
    displayName: 'Column',

    render () {
        const {className = '', wide, ...props} = this.props;

        return (
            <div className={`${className} column ${wide} wide`} {...props}/>
        );
    }
});

export default Column;
