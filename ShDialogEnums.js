export class ShDialogTypes{
    static info = new ShDialogTypes('info');
    static confirm = new ShDialogTypes('confirm');
    static error = new ShDialogTypes('error');
    static success = new ShDialogTypes('success');
    static custom = new ShDialogTypes('custom');

    constructor(enumValue){
        this.value = enumValue;
        Object.freeze(this);
    }

    toString(){
        return `ShDialogType:${this.value}`;
    }
}

export class ShDialogToolbarButtons{
    static close = new ShDialogToolbarButtons('close');

    constructor(enumValue){
        this.value = enumValue;
        Object.freeze(this);
    }
}