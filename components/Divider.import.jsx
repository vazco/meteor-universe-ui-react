export const Divider = React.createClass({
    displayName: 'Divider',

    render () {
        const {className = '', ...props} = this.props;

        return (
            <div className={`ui ${className} divider`} {...props}/>
        );
    }
});

export default Divider;
