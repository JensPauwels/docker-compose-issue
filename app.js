const express = require('express');
// const multiply = require('rollup-starter-project');
const app = express();


app.get('/', (req, res) => {
  res.json({hello: 'world'});
});

app.listen(8000, () => console.log('listening on 8000'));


