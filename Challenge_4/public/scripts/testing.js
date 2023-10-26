const fs = require('fs');
const path = require('path');

function getJson() {
  const dataRoot = path.join(__dirname, '../../data');
  console.log(dataRoot);
}