const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right first item', () => {

    	// 1. go to https://www.amazon.de/
        browser.url('https://amazon.de');

        // 2. search for Batman comics
        $('input[name="field-keywords"]').setValue('Batman comics');
        $('.nav-search-submit.nav-sprite input').click();

        //3. check that results number above 0
        var noResultsText = $('.a-row:first-child > span:first-child').getText(); 
        assert.notEqual(noResultsText, 'Keine Ergebnisse für');

		// 4. for the 1st item:
		// 4.1 check that title contains Batman word
		var firstItemName = $('.a-link-normal.a-text-normal').getText();
		assert.ok(firstItemName.includes('Batman'));

		// 4.2 check that price is above 0 and has EUR postfix
		var firstItemPriceString = $('.a-price-whole:first-child').getText();

		var firstItemPrice = parseFloat(firstItemPriceString.replace(",", "."));
		assert.ok(firstItemPrice > 0);
		assert.equal($('.a-price-symbol').getText(), '€');

		// 4.3 check that item has rating
		var firstItemRatingCount = parseInt($('.a-row.a-size-small').getText());
		assert.ok(firstItemRatingCount > 0);

		// 5. open 1st item page and check that title and price are equal to the ones in result search
		$('.a-link-normal.a-text-normal').click();

		var productTitle = $('#productTitle').getText();
		assert.equal(productTitle, firstItemName);

		var productPriceString = $('#a-autoid-2 .a-color-price').getText();
		assert.equal(productPriceString, 'EUR ' + firstItemPriceString);     
    });
});