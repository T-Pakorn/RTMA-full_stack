"use strict";
exports.__esModule = true;
var scrapeMetatags_1 = require("../scrapeMetatags");
var testMaterial_1 = require("../share/testMaterial");
describe('scrapeMetatags function test', function () {
    it('can scrape metatags with the correct output and type', function () {
        var testString = testMaterial_1.SCRAP_META.INCOMING_STRING;
        scrapeMetatags_1.scrapeMetatags(testString).then(function (result) {
            expect(result).toBeInstanceOf(Array);
            expect(result).toEqual(expect.arrayContaining(testMaterial_1.SCRAP_META.OUTPUT_ARRAY));
        });
    });
});
