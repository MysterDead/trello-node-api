var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var cardRequest = function () {
    var data = {
        name: 'CARD_NAME',
        desc: 'Card description',
        pos: 'top',
        idList: 'LIST_ID', //required
        due: false,
        dueComplete: false,
        idMembers: ['MEMBER_ID', 'MEMBER_ID', 'MEMBER_ID'],
        idLabels: ['LABEL_ID', 'LABEL_ID', 'LABEL_ID'],
        urlSource: '',
        fileSource: '',
        idCardSource: '',
        keepFromSource: '',
    };
    Trello.card.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

cardRequest();