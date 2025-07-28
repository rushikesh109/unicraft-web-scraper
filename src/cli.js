const { program } = require('commander');
const inquirer = require('inquirer');
const { runScraper } = require('./scraper');

program.option('-q, --query <query>', 'Search query')
       .option('-u, --urls <urls>', 'Comma-separated seed URLs')
       .parse(process.argv);

(async () => {
  const opts = program.opts();
  let urls = [];
  if (opts.urls) {
    urls = opts.urls.split(',');
  } else if (opts.query) {
    console.log('🔍 Search query support is coming soon. For now, use URLs.');
    process.exit(1);
  } else {
    const res = await inquirer.prompt({
      name: 'urls',
      message: 'Enter comma-separated URLs:',
    });
    urls = res.urls.split(',');
  }
  await runScraper(urls);
})();