# KeyboardHandler
Module to easily handle keyboard events

### Install
```bash
ni @zooizooi/utils
```

### Use
```js
import { KeyboardHandler } from '@zooizooi/utils';

const keyboardHandler = new KeyboardHandler({
    scope: this,
    keymap: {
        'ArrowUp': this.keyArrowUpHandler,
        'Ctrl+s': this.keyCtrlSHandler,
    },
});

keyboardHandler.destroy();
```
