const { program } = require('commander');
const fs = require('fs');


program
  .requiredOption('-i, --input <path>', 'шлях до файлу JSON для читання')
  .option('-o, --output <path>', 'шлях до файлу для запису результату')
  .option('-d, --display', 'вивести результат у консоль');


program.parse(process.argv);
const options = program.opts();


if (!options.input) {
  console.error('Please, specify input file');
  process.exit(1);
}


if (!fs.existsSync(options.input)) {
  console.error('Cannot find input file');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(options.input, 'utf8'));

const maxRate = Math.max(...data.map(item => item.rate));


if (options.display) {
  console.log(`Максимальний курс: ${maxRate}`);
}


if (options.output) {
  fs.writeFileSync(options.output, `Максимальний курс: ${maxRate}`);
}

if (options.output && options.display) {
  console.log(`Максимальний курс записано у файл: ${options.output}`);
}