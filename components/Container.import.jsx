export const Container = React.createClass({
    displayName: 'Container',

    render () {
        const {className = '', ...props} = this.props;

        return (
            <div className={`ui ${className} container`} {...props}/>
        );
    }
});

export default Container;
