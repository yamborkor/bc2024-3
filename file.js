const { program } = require('commander');
const fs = require('fs');

program
  .option('-f, --file <path>', 'JSON file to read', 'data.json')
  .parse(process.argv);

const options = program.opts();
const data = JSON.parse(fs.readFileSync(options.file, 'utf8'));

const maxRate = Math.max(...data.map(item => item.rate));
console.log(`Максимальний курс: ${maxRate}`);