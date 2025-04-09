export class Bobber {
    type = 'bobber';
    constructor (
        public id: string,
        public name: string,
        public manufacturer: string,
        public price: number,
        public available: boolean,
        public image: string
    ) {}
}