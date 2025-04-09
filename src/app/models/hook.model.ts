export class Hook {
    type = 'hook';
    constructor (
        public id: string,
        public name: string,
        public manufacturer: string,
        public size: number,
        public price: number,
        public available: boolean,
        public image: string
    ) {}
}