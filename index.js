const express = require('express');
const server = express();

server.listen(8000, () => console.log('listening at 8000'));
server.use(express.static('public'));
server.use(express.json({limit: '1mb'}));

server.post('/api', (request, response) => {
  let data = request.body;
  console.log(data);
  response.json({
    status: 'success',
    latitude: data.lat,
    longitude: data.lon
  });
});
