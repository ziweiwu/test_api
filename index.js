var Particle = require('particle-api-js');
var particle = new Particle();
var token;
const express = require('express');
const app = express();

particle.login({ username: 'alex.toutongi@gmail.com', password: 'Camaro2010' }).then(
    function (data) {
        console.log('API call completed on promise resolve: ', data.body.access_token);
    },
    function (err) {
        console.log('API call completed on promise fail: ', err);
    }
);

particle.getVariable({ deviceId: '', name: 'temp', auth: token }).then(function(data) {
  console.log('Device variable retrieved successfully:', data);
}, function(err) {
  console.log('An error occurred while getting attrs:', err);
});











app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
