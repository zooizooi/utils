export default class LocalStorage {
    public static set(key: string, value: string | object) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    public static get(key: string): string | object | null {
        let value = localStorage.getItem(key);
        if (value && this.isJSONObject(value)) value = JSON.parse(value);
        return value;
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