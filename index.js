const fs = require('fs');
const Main = require('./main');

const clicks = JSON.parse(fs.readFileSync('clicks.json', (error) => {
  if(error) throw error;
  console.log('file uploaded');
}));
const result = (new Main).run(clicks);
fs.writeFileSync('result.json', JSON.stringify(result), (error) => {
  if(error) throw error;
  console.log('output generated');
});