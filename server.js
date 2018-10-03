const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(7087,'127.0.0.1',function(){
   console.info('Running on port 7087');
})

app.use('/api/medium', require('./api/medium'));
