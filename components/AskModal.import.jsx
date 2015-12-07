import Actions from './Actions';
import Button  from './Button';
import Header  from './Header';
import Icon    from './Icon';
import Modals  from './Modals';
import Modal   from './Modal';

export const AskModal = React.createClass({
    displayName: 'AskModal',

    getDefaultProps () {
        return {
            icon: 'help',
            message: undefined,

            no: undefined,
            noIcon: 'remove',
            noAction: () => {},

            yes: undefined,
            yesIcon: 'checkmark',
            yesAction: () => {},

            visible: false
        };
    },

    render () {
        const {icon, message, modal, no, noIcon, yes, yesIcon, visible} = this.props;

        return (
            <Modal modal={modal}
                   className="small basic ask"
                   visible={visible}>
                <Header className="ui icon">
                    <Icon icon={icon}/>

                    {message}
                </Header>

                <Actions>
                    <Button className={`basic inverted red ask${no ? '' : ' icon'}`} onClick={this.no}>
                        <Icon icon={`large ${noIcon}`}/>
                        {no}
                    </Button>
                    <Button className={`basic inverted green ask${yes ? '' : ' icon'}`} onClick={this.yes}>
                        <Icon icon={`large ${yesIcon}`}/>
                        {yes}
                    </Button>
                </Actions>
            </Modal>
        );
    },

    no () {
        Modals.hide('ask');
        this.props.noAction();
    },

    yes () {
        Modals.hide('ask');
        this.props.yesAction();
    }
});

Modals.register({
    name: 'ask',
    component: AskModal
});

export default AskModal;
