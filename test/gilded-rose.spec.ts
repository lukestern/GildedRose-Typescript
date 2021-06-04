import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    describe('Increase quality until max', function () {
        
        it('should add one to quality', function() {
            //arrange
            const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 0) ]);
            //act
            gildedRose.increaseQualityUntilMaximum(gildedRose.items[0]);
            //assert
            expect(gildedRose.items[0].quality).to.equal(1);
        });


        it('Should not increase quality beyond 50', function () {
            //arrange
            const gildedRose = new GildedRose([new Item('Aged Brie', 0, 50)])
            //act
            gildedRose.increaseQualityUntilMaximum(gildedRose.items[0]);
            //assert
            expect(gildedRose.items[0].quality).to.equal(50);
        })
    });

    describe('Decrease quality until min', function () {
        
        it('should take one from quality', function() {
            //arrange
            const gildedRose = new GildedRose([ new Item('item', 10, 10) ]);
            //act
            gildedRose.decreaseQualityUntilMinimum(gildedRose.items[0]);
            //assert
            expect(gildedRose.items[0].quality).to.equal(9);
        });


        it('Should not decrease quality below 0', function () {
            //arrange
            const gildedRose = new GildedRose([new Item('item', 10, 0)])
            //act
            gildedRose.decreaseQualityUntilMinimum(gildedRose.items[0]);
            //assert
            expect(gildedRose.items[0].quality).to.equal(0);
        })
    });

    describe('Increase quality of backstage pass', function () {
        
        it('by 2', function() {
            //arrange
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10) ]);
            //act
            gildedRose.increaseQualityOfBackstagePasses(gildedRose.items[0]);

            //assert
            expect(gildedRose.items[0].quality).to.equal(12);
        });


        it('by 3', function () {
            //arrange
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)])
            //act
            gildedRose.increaseQualityOfBackstagePasses(gildedRose.items[0]);
            //assert
            expect(gildedRose.items[0].quality).to.equal(13);
        })
    });

    describe('Decrease sell in days', function () {
        
        it('should decrease by 1 if item is not sulfuras', function() {
            //arrange
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10) ]);
            //act
            gildedRose.decreaseSellIn(gildedRose.items[0]);

            //assert
            expect(gildedRose.items[0].sellIn).to.equal(9);
        });


        it('should not change if item is sulfuras', function () {
            //arrange
            const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 10)])
            //act
            gildedRose.decreaseSellIn(gildedRose.items[0]);
            //assert
            expect(gildedRose.items[0].sellIn).to.equal(5);
        })
    });

});

