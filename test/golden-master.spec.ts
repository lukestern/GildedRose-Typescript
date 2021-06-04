const { Item, GildedRose } = require('../app/gilded-rose');
const { expect } = require('chai');

// Add a master test here
describe.only('Gilded Rose Master Test', function () {
    // Arrange
    let gildedRose;
    let startItems;
    beforeEach(() => {
        startItems = new Array();
        startItems.push(new Item('Aged Brie', 10, 40))
        startItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10))
        startItems.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80))
        startItems.push(new Item('Arbitrary Item', 10, 10))
        gildedRose = new GildedRose(startItems);
    });

    it('should behave as it did at the start with one run', function () {
        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(41);

        expect(items[1].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[1].sellIn).to.equal(10);
        expect(items[1].quality).to.equal(11);

        expect(items[2].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[2].sellIn).to.equal(0);
        expect(items[2].quality).to.equal(80);

        expect(items[3].name).to.equal('Arbitrary Item');
        expect(items[3].sellIn).to.equal(9);
        expect(items[3].quality).to.equal(9);
    });


    it('should behave as it did at the start with five runs', function () {
        //Act
        let items;
        for (let i = 0; i < 5; i++) {
            items = gildedRose.updateQuality();
        }

        // Assert
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(5);
        expect(items[0].quality).to.equal(45);

        expect(items[1].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[1].sellIn).to.equal(6);
        expect(items[1].quality).to.equal(19);

        expect(items[2].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[2].sellIn).to.equal(0);
        expect(items[2].quality).to.equal(80);

        expect(items[3].name).to.equal('Arbitrary Item');
        expect(items[3].sellIn).to.equal(5);
        expect(items[3].quality).to.equal(5);
    });

    it('should behave as it did at the start with 10 runs', function () {
        //Act
        let items;
        for (let i = 0; i < 10; i++) {
            items = gildedRose.updateQuality();
        }

        // Assert
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(50);

        expect(items[1].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[1].sellIn).to.equal(1);
        expect(items[1].quality).to.equal(33);

        expect(items[2].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[2].sellIn).to.equal(0);
        expect(items[2].quality).to.equal(80);

        expect(items[3].name).to.equal('Arbitrary Item');
        expect(items[3].sellIn).to.equal(0);
        expect(items[3].quality).to.equal(0);
    });

    it('should behave as it did at the start with 12 runs', function () {
        //Act
        let items;
        for (let i = 0; i < 12; i++) {
            items = gildedRose.updateQuality();
        }

        // Assert
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(-2);
        expect(items[0].quality).to.equal(50);

        expect(items[1].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[1].sellIn).to.equal(-1);
        expect(items[1].quality).to.equal(0);

        expect(items[2].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[2].sellIn).to.equal(0);
        expect(items[2].quality).to.equal(80);

        expect(items[3].name).to.equal('Arbitrary Item');
        expect(items[3].sellIn).to.equal(-2);
        expect(items[3].quality).to.equal(0);
    });


});