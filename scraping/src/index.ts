import { scrapeMetatags } from './scrapeMetatags';
import { scrapeThairatNews } from './puppeteer/thairat/thairat';
import { scrapeTwitterNews } from './puppeteer/twitter/twitter';

// const testMetaUrl: string =
//   'https://www.thairath.co.th/news/local/central/2124297';

// scrapeMetatags(testMetaUrl)!.then(function (result: Array<any>) {
//   console.log(result);
// });

// scrapeThairatNews(
//   'https://www.thairath.co.th/news/local/central/2124297'
// )!.then(function (result) {
//   console.log(result);
// });

scrapeTwitterNews(
  'https://www.thairath.co.th/news/local/central/2124297'
)!.then(function (result) {
  console.log(result);
});
