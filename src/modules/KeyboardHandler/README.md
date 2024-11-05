# KeyboardHandler
Module to easily handle keyboard events

### Install
```bash
ni @zooizooi/utils
```

### Use
```js
import { KeyboardHandler } from '@zooizooi/utils';
import { KEY_DOWN, KeyDirection } from '@zooizooi/utils/modules/KeyboardHandler';

const keyboardHandler = new KeyboardHandler({
    scope: this,
    keymap: {
        'ArrowUp': this.keyArrowUpHandler,
        'Ctrl+s': this.keyCtrlSHandler,
    },
});

function keyCtrlSHandler(direction: KeyDirection, event: KeyboardEvent) {
    if (direction === KEY_DOWN) {
        // on key down
    }

    if (direction === KEY_UP) {
        // on key up
    }
}

keyboardHandler.destroy();
```
