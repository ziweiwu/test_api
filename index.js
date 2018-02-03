particle.login({ username: 'email@example.com', password: 'pass' }).then(
    function (data) {
        console.log('API call completed on promise resolve: ', data.body.access_token);
    },
    function (err) {
        console.log('API call completed on promise fail: ', err);
    }
);