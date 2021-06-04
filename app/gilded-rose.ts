export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        let sulfuras = 'Sulfuras, Hand of Ragnaros';
        let brie = 'Aged Brie';
        let backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
        let minQuality = 0;
        let maxQuality = 50;
        let tenDaysTillConcert = 10;
        let fiveDaysTillConcert = 5;
        
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != brie && this.items[i].name != backstagePasses) {
                if (this.items[i].quality > minQuality) {
                    if (this.items[i].name != sulfuras) {
                        this.items[i].quality--;
                    }
                }
            } else {
                if (this.items[i].quality < maxQuality) {
                    this.items[i].quality++;
                    if (this.items[i].name == backstagePasses) {
                        if (this.items[i].sellIn <= tenDaysTillConcert) {
                            if (this.items[i].quality < maxQuality) {
                                this.items[i].quality++;
                            }
                        }
                        if (this.items[i].sellIn <= fiveDaysTillConcert) {
                            if (this.items[i].quality < maxQuality) {
                                this.items[i].quality++;
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != sulfuras) {
                this.items[i].sellIn--
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != brie) {
                    if (this.items[i].name != backstagePasses) {
                        if (this.items[i].quality > minQuality) {
                            if (this.items[i].name != sulfuras) {
                                this.items[i].quality--;
                            }
                        }
                    } else {
                        this.items[i].quality = minQuality;
                    }
                } else {
                    if (this.items[i].quality < maxQuality) {
                        this.items[i].quality++;
                    }
                }
            }
        }

        return this.items;
    }
}
