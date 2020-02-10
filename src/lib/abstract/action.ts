export abstract class Action {
    abstract createComponent(): void;

    abstract createFolder(): void;

    abstract getTemplates(): void;

    abstract getRoot(): void;

    abstract setRoot(): void;
}
