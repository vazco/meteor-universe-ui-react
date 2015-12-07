export const Content = React.createClass({
    displayName: 'Content',

    render () {
        const {className = '', ...props} = this.props;

        return (
            <div className={`${className} content`} {...props}/>
        );
    }
});

export default Content;
