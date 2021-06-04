export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;
    maxQuality: number;
    minQuality: number;
    tenDaysTillConcert: number;
    fiveDaysTillConcert: number;
    backstagePasses: string;
    sulfuras: string;

    constructor(items = [] as Array<Item>) {
        this.items = items;
        this.maxQuality = 50;
        this.minQuality = 0;
        this.backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
        this.sulfuras = 'Sulfuras, Hand of Ragnaros';
        this.tenDaysTillConcert = 10;
        this.fiveDaysTillConcert = 5;
    }

    updateQuality() {
        let brie = 'Aged Brie';

        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];

            if (!(item.name === brie || item.name === this.backstagePasses || item.name === this.sulfuras)) {
                this.decreaseQualityUntilMinimum(item);
            } else {
                this.increaseQualityOfBackstagePasses(item);
            }

            this.decreaseSellIn(item);

            if (item.sellIn < 0) {
                if (!(item.name === brie || item.name === this.sulfuras)) {
                    this.decreaseQualityUntilMinimum(item);  
                } 

                if (item.name === this.backstagePasses) {
                    item.quality = this.minQuality;
                }
                
                if (item.name === brie) {
                    this.increaseQualityUntilMaximum(item);
                }
            }
        }
        return this.items;
    }

    increaseQualityUntilMaximum(item: Item) {
        item.quality < this.maxQuality ? item.quality++ : null;
    }

    decreaseQualityUntilMinimum(item: Item) {
        item.quality > this.minQuality ? item.quality-- : null;
    }

    increaseQualityOfBackstagePasses(item: Item) {
        this.increaseQualityUntilMaximum(item);
        if (item.name == this.backstagePasses) {
            item.sellIn <= this.tenDaysTillConcert ? this.increaseQualityUntilMaximum(item) : null;
            item.sellIn <= this.fiveDaysTillConcert ? this.increaseQualityUntilMaximum(item) : null;
        }
    }

    decreaseSellIn(item: Item) {
        item.name != this.sulfuras ? item.sellIn-- : null;
    }
}


