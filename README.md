<a href="http://unicms.io"><img src="http://unicms.io/banners/standalone.png" /></a>

# universe:ui-react

### Available plain components
* Actions
* Button
* Column
* Container
* Content
* Divider
* Grid
* Header
* Icon
* Message

### Available components
* Modal
* Modals
* Toasts

<br>
<br>

### Modals
#### Creating modal
```js
import {Actions, Button, Content, Icon, Modal, Modals} from 'meteor/universe:ui-react';

const ExampleModal = React.createClass({
    displayName: 'ExampleModal',

    render () {
        const props = {
            visible: this.props.visible,
            modal: {
                onHide: this.props.modal.onHide,
                selector: {
                    close: '.actions .close'
                }
            }
        };

        return (
            <Modal className="small basic" {...props}>
                <Content>
                    <p>Example content</p>
                </Content>

                <Actions>
                    <Button className="basic inverted close">
                        <Icon icon="icon"/>
                        Close
                    </Button>
                </Actions>
            </Modal>
        );
    }
});

Modals.register({
    name: 'example',
    component: ExampleModal
});
```

#### Managing modals
```js
import {Modals} from 'meteor/universe:ui-react';

// Somewhere in layout
<Modals />

// Then
Modals.hide('example');
Modals.show('example', extraProps);
```

#### Predefined modals
##### AskModal
```js
Modals.show('ask', {
    icon: 'help',
    message: 'Are You sure?',

    no: 'No',
    noIcon: 'remove',
    noAction: () => console.log('no action'),

    yes: 'Yes',
    yesIcon: 'checkmark',
    yesAction: () => console.log('yes action')
});
```

<br>
<br>

### Toasts
```js
import {Toasts} from 'meteor/universe:ui-react';

// Somewhere in layout
<Toasts />

// Then
const modalId = Toasts.create({
    className,
    message,
    header,
    icon,
    type,   // default: 'info'
    timeout // default: 2500 - auto remove toast
});

Toasts.remove(modalId);
```
