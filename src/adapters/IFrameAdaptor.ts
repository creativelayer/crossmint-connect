export default class IFrameAdapter {
    open: boolean;

    onClose?: Function;

    iframe?: HTMLIFrameElement;
    controlledWindow?: Window | null;

    constructor(onClose?: Function) {
        this.open = false;
        this.onClose = onClose;
    }

    async init({
        iframe,
        url,
    }: {
        iframe: HTMLIFrameElement;
        url: string;
    }) {
        this.iframe = iframe;
        const that = this;
        await new Promise((resolve, reject) => {
            iframe.src = url;
            iframe.addEventListener('load', () => {
                that.controlledWindow = iframe.contentWindow;
                that.open = true;
                resolve(null)
            });
        })

        return this.controlledWindow;
    }

    close() {
        console.log('close iframe')
        // if(this.iframe instanceof HTMLIFrameElement) {
        //     this.iframe.src = 'about:blank';
        // }
        // if (this.onClose) {
        //     this.onClose();
        // }
        this.open = false;
    }

}
