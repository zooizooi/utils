export default class LocalStorage {
    public static set(key: string, value: string | object) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    public static get(key: string) {
        const value = localStorage.getItem(key);
        if (value) {
            if (this.isJSONObject(value)) {
                return JSON.parse(value);
            } else {
                return value;
            }
        }
    }

    public static remove(key: string) {
        localStorage.removeItem(key);
    }

    public static clear() {
        localStorage.clear();
    }

    private static isJSONObject(value: string) {
        const parsedValue = JSON.parse(value);
        return typeof parsedValue === 'object' && parsedValue !== null;
    }
}