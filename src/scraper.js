const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs-extra');
const { extractInfo } = require('./extractor');
const { isValidUrl } = require('./utils');
const path = require('path');

const runScraper = async (urls) => {
  const results = [];
  for (const url of urls) {
    try {
      if (!isValidUrl(url)) {
        console.log(`Invalid URL: ${url}`);
        continue;
      }
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const extracted = extractInfo($, url);
      results.push(extracted);
      console.log(`Scraped: ${url}`);
    } catch (err) {
      console.error(`Error scraping ${url}:`, err.message);
    }
  }
  await fs.ensureDir('output');
  await fs.writeJSON('output/data.json', results, { spaces: 2 });
  console.log('Saved output to output/data.json');

  await fs.ensureDir('output');
await fs.writeJSON('output/data.json', results, { spaces: 2 });
console.log(' Saved output to output/data.json');


const { Parser } = require('json2csv');
const csv = new Parser().parse(results);
fs.writeFileSync('output/data.csv', csv);
console.log('Saved CSV to output/data.csv');

};

module.exports = { runScraper };