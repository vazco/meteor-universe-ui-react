export const Grid = React.createClass({
    displayName: 'Grid',

    render () {
        const {className = '', ...props} = this.props;

        return (
            <div className={`ui ${className} grid`} {...props}/>
        );
    }
});

export default Grid;
