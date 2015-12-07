export const Header = React.createClass({
    displayName: 'Header',

    render () {
        const {className = '', ...props} = this.props;

        return (
            <div className={`${className} header`} {...props}/>
        );
    }
});

export default Header;
