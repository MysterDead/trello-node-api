var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var organizationsRequest = function () {
    var id = 'ORGANIZATION_ID';
    Trello.organization.del(id).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

organizationsRequest();