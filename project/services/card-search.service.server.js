var app = require('../../express');
var request = require('request');


app.get("/api/duelyststats/cardname/:cardName", searchQuery);

function searchQuery(req, res) {
    var card = req.params.cardName;
    request('https://duelyststats.info/scripts/carddata/get.php?cardName=' + card, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.send(body);
        }
    });
}

// var q = require('q');
// const app = require('../../express');
// const https = require('https');
//
// app.get("/api/duelyststats/cardname/:cardName", searchQuery);
//
// function searchQuery(req, res) {
//     var card = req.params.cardName;
//     duelyststatsSearchQuery(card)
//         .then(function(response){
//             res.json(response);
//         }, function (error) {
//             res.sendStatus(404).send(error);
//         });
// }
//
// function duelyststatsSearchQuery(card) {
//     var deferred = q.defer();
//     https.get({
//         host: 'duelyststats.info',
//         path: '/scripts/carddata/get.php?cardName=' + card,
//         headers: {"Accept": "application/json"}
//     }, function(response) {
//         var body = '';
//         response.on('data', function(d) {
//             body += d;
//         });
//         response.on('end', function() {
//             try {
//                 body = JSON.parse(body);
//                 deferred.resolve(body);
//             } catch(e) {
//                 deferred.reject({error: e});
//             }
//         });
//     });
//     return deferred.promise;
// }