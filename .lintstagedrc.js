const path = require('path');

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
};
