# LocalStorage
Module to improve interactions with `localStorage`

### Install
```bash
ni @zooizooi/utils
```

### Use
```js
import { LocalStorage } from '@zooizooi/utils';

LocalStorage.set(key: string, value: object | string);
LocalStorage.get(key: string);
LocalStorage.remove(key: string);
LocalStorage.clear(); // Clear all
```
