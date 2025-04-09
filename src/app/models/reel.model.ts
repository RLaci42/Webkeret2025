export class Reel {
    type = 'reel';
    constructor (
        public id: string,
        public name: string,
        public manufacturer: string,
        public size: number,
        public lineType: string,
        public price: number,
        public available: boolean,
        public image: string
    ) {}
}