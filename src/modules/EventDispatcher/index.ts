type Data = string | number | boolean | object;
type Listener = (data: Data) => void;

export default class EventDispatcher {
    private listeners: { [key: string]: Listener[] } = {};

    addEventListener(name: string, listener: Listener) {
        if (this.listeners[name] === undefined) {
            this.listeners[name] = [];
        }

        if (this.listeners[name].indexOf(listener) === -1) {
            this.listeners[name].push(listener);
        }
    }

    on(name: string, listener: Listener) {
        this.addEventListener(name, listener);
    }

    removeEventListener(name: string, listener: Listener) {
        const listenerArray = this.listeners[name];
        if (listenerArray !== undefined) {
            const index = listenerArray.indexOf(listener);
            if (index !== -1) {
                listenerArray.splice(index, 1);
            }
        }
    }

    off(name: string, listener: Listener) {
        this.removeEventListener(name, listener);
    }

    dispatchEvent(name: string, data: Data) {
        const listenerArray = this.listeners[name];
        if (listenerArray !== undefined) {
            const array = listenerArray.slice(0);
            for (let i = 0, l = array.length; i < l; i++) {
                array[i].call(this, data);
            }
        }
    }

    emit(name: string, data: Data) {
        this.dispatchEvent(name, data);
    }
}