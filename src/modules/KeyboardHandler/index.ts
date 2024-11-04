export const KEY_UP = 'KEY_UP';
export const KEY_DOWN = 'KEY_DOWN';

export type KeyDirection = typeof KEY_UP | typeof KEY_DOWN;
type Keymap = { [key: string]: (direction: KeyDirection, event: KeyboardEvent) => void };
type ElementTypes = Document;

interface Props {
    keymap: Keymap;
    element?: ElementTypes;
    scope?: object;
}

export default class KeyboardHandler {
    private props: Props;
    private keymap: Keymap;
    private element: ElementTypes;

    constructor(props: Props) {
        this.props = props;
        this.keymap = props.keymap;
        this.element = props.element || document;
        this.bindHandlers();
        this.addEventListeners();
        this.bindScope();
    }

    public destroy() {
        this.removeEventListeners();
    }

    private bindHandlers() {
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
    }

    private addEventListeners() {
        this.element.addEventListener('keydown', this.keyDownHandler);
        this.element.addEventListener('keyup', this.keyUpHandler);
    }

    private removeEventListeners() {
        this.element.removeEventListener('keydown', this.keyDownHandler);
        this.element.removeEventListener('keyup', this.keyUpHandler);
    }

    private bindScope() {
        for (const key in this.keymap) {
            this.keymap[key] = this.keymap[key].bind(this.props.scope);
        }
    }

    private getKeyCombination(event: KeyboardEvent) {
        const keys = [];
        if (event.ctrlKey) keys.push('Ctrl');
        if (event.shiftKey) keys.push('Shift');
        if (event.altKey) keys.push('Alt');
        keys.push(event.key);
        return keys.join('+');
    }

    private keyDownHandler(event: KeyboardEvent) {
        const keyCombination = this.getKeyCombination(event);
        const handler = this.keymap[keyCombination];
        if (handler) handler(KEY_DOWN, event);
    }

    private keyUpHandler(event: KeyboardEvent) {
        const keyCombination = this.getKeyCombination(event);
        const handler = this.keymap[keyCombination];
        if (handler) handler(KEY_UP, event);
    }
}