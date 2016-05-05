import React from 'react';

export const ConfirmTooltip = React.createClass({
    displayName: 'confirmTooltip',
    getInitialState () {
        return {
            popover: false
        };
    },
    toggleConfirmTip () {
        let popover = !this.state.popover;
        this.setState({popover});
    },
    acceptAction () {
        this.toggleConfirmTip();
        if(typeof this.props.action === 'function') {
            this.props.action();
        }
    },
    cancelAction () {
        this.toggleConfirmTip();
        if(typeof this.props.cancelAction === 'function') {
            this.props.cancelAction();
        }
    },
    render () {
        return (
            <div className={'confirmation-tip-wrapper ' + this.props.wrapperSpecialClass}>
                <a className={this.props.buttonClass || 'ui positive button'} onClick={this.toggleConfirmTip}>{this.props.buttonText}</a>
                {
                    this.state.popover &&
                    <div className={'confirmation-tip-box ' + (this.props.position || 'bottom-left')}>
                        <div className="confirmation-tip-message">{this.props.confirmText}</div>
                        <div className="confirmation-tip-buttons">
                            <a className={this.props.acceptButtonClass || 'ui positive button'} onClick={this.acceptAction}>{this.props.acceptButtonText || 'OK'}</a>
                            <a className={this.props.cancelButtonClass || 'ui button'} onClick={this.cancelAction}>{this.props.cancelButtonText || 'CANCEL'}</a>
                        </div>
                    </div>
                }
            </div>
        );
    }
});

export default ConfirmTooltip;