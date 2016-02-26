import React from 'react';
import Content from './Content.jsx';
import Header  from './Header.jsx';
import Icon    from './Icon.jsx';
import Message from './Message.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const Toasts = React.createClass({
    displayName: 'Toasts',

    statics: {
        _toasts: [],
        _toastsUpdate: () => {},

        create ({className = '', icon, type = 'info', header, message, timeout = 2500} = {}) {
            const id = Math.floor(Math.random() * 10e10).toString(32);

            if (icon === undefined) {
                switch (type) {
                    case 'info':    icon = 'info'; break;
                    case 'warning': icon = 'info'; break;

                    case 'error':    icon = 'warning'; break;
                    case 'negative': icon = 'warning'; break;

                    case 'success':  icon = 'checkmark'; break;
                    case 'positive': icon = 'checkmark'; break;
                }
            }

            if (isFinite(timeout)) {
                Meteor.setTimeout(() => {
                    Toasts._toasts = Toasts._toasts.filter(toast => id !== toast.id);
                    Toasts._toastsUpdate();
                }, timeout);
            }

            Toasts._toasts.push({id, className, icon, type, header, message, timeout});
            Toasts._toastsUpdate();

            return id;
        },

        remove (id) {
            Toasts._toasts = Toasts._toasts.filter(toast => id !== toast.id);
            Toasts._toastsUpdate();
        }
    },

    getInitialState () {
        return {toasts: Toasts._toasts};
    },

    componentWillMount () {
        Toasts._toastsUpdate = () => this.setState({toasts: Toasts._toasts});
    },

    componentWillUnmount () {
        Toasts._toastsUpdate = () => {};
    },

    render () {
        return (
            <ReactCSSTransitionGroup id="toasts"
                                     component="div"
                                     transitionName="toasts"
                                     transitionEnterTimeout={500}
                                     transitionLeaveTimeout={500}>
                {Toasts._toasts.map(({id, className, icon, type, header, message}) => {
                    return (
                        <Message key={id} className={`floating${icon ? ' icon' : ''} ${className} ${type}`}>
                            {icon && (
                                <Icon icon={icon}/>
                            )}

                            {(header || message) && (
                                <Content>
                                    {header && (
                                        <Header>
                                            {header}
                                        </Header>
                                    )}

                                    {message && (
                                        <p>
                                            {message}
                                        </p>
                                    )}
                                </Content>
                            )}
                        </Message>
                    );
                })}
            </ReactCSSTransitionGroup>
        );
    }
});

export default Toasts;
