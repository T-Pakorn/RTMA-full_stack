"use strict";
exports.__esModule = true;
var twitter_1 = require("./puppeteer/twitter");
// const testMetaUrl: string =
//   'https://www.thairath.co.th/news/local/northeast/2128251';
// scrapeMetatags(testMetaUrl)!.then(function (result: Array<any>) {
//   console.log(result);
// });
// scrapeThairatNews(
//   'https://www.thairath.co.th/news/local/northeast/2128251',
// )!.then(function (result) {
//   console.log(result);
// });
twitter_1.scrapeTwitterNews('https://www.thairath.co.th/news/local/central/2124297').then(function (result) {
    console.log(result);
});
