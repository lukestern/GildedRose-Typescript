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

    constructor(items = [] as Array<Item>) {
        this.items = items;
        this.maxQuality = 50;
        this.minQuality = 0;
    }

    updateQuality() {
        let sulfuras = 'Sulfuras, Hand of Ragnaros';
        let brie = 'Aged Brie';
        let backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
        let tenDaysTillConcert = 10;
        let fiveDaysTillConcert = 5;

        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];

            if (item.name != brie && item.name != backstagePasses) {
                if (item.name != sulfuras) {
                    if (item.quality > this.minQuality) {
                        item.quality--;
                    }
                }
            } else {
                if (item.quality < this.maxQuality) {
                    item.quality++;

                    if (item.name == backstagePasses) {

                        if (item.sellIn <= tenDaysTillConcert) {
                            this.increaseQualityUntilMaximum(item);
                        }

                        if (item.sellIn <= fiveDaysTillConcert) {
                            this.increaseQualityUntilMaximum(item);
                        }
                    }
                }
            }

            if (item.name != sulfuras) {
                item.sellIn--
            }

            if (item.sellIn < 0) {
                if (item.name != brie) {
                    if (item.name != backstagePasses) {
                        if (item.quality > this.minQuality) {
                            if (item.name != sulfuras) {
                                item.quality--;
                            }
                        }
                    } else {
                        item.quality = this.minQuality;
                    }
                } else {
                    this.increaseQualityUntilMaximum(item);
                }
            }
        }

        return this.items;
    }

    increaseQualityUntilMaximum(item: Item) {
        if (item.quality < this.maxQuality) {
            item.quality++;
        }
    }

}
