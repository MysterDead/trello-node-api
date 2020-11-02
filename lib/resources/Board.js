'use strict';

var TrelloResource = require('../TrelloResource');
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({

    path: 'board',
    includeBasic: [
        'boardMembers'
    ],

    boardMembers: trelloMethod({
        method: 'GET',
        path: '/{idBoard}/members',
        urlParams: [ 'idBoard' ]
    }),

});