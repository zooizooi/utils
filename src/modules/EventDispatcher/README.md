# EventDispatcher
The EventDispatcher lets objects communicate through events by registering and triggering event listeners.

### Install
```bash
ni @zooizooi/utils
```

### Use
```js
import { EventDispatcher } from '@zooizooi/utils';

class Module extends EventDispatcher {
    constructor() {
        this.addEventListener('change', this.changeHandler);
        this.on('change', this.changeHandler);

        this.removeEventListener('change', this.changeHandler);
        this.off('change', this.changeHandler);

        this.dispatchEvent('change', { data });
        this.emit('change', { data });
    }
}
```
