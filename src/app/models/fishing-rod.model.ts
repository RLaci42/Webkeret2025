export class FishingRod {
    type = 'fishingRod';
    constructor(
        public id: string,
        public name: string,
        public manufacturer: string,
        public length: number,
        public castingWeight: string,
        public price: number,
        public available: boolean,
        public image: string
    ) {}
}