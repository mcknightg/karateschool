'use strict';

//  Karateschool Rcriteria Service
catwalkApp.factory('KarateschoolRcriteria', ['KarateschoolBaseService',function (KarateschoolBaseService) {
    var entityUrl = KarateschoolBaseService.getEntityUrl('rcriteria');
    return KarateschoolBaseService.getResource(entityUrl,{},{
        'listColumns':{method: 'POST', params:{},url:entityUrl + 'listColumns'}
    });
}
]);
