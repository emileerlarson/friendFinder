var friendsdata = require('../data/freinds.js');

module.exports = function(app){
    app.get('/api/tables', function (req, res){
        res.json(friensdata);
    });
    app.post('/api/friends', function(req, res){
        friensdata.push(req.body);
        res.jason(true);
    })
}