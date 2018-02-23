var friendsdata = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/tables', function (req, res){
        res.json(friendsdata);
    });
    app.post('/api/friends', function(req, res){
        friensdata.push(req.body);
        res.json(true);
    })
}