'use strict';

//  Karateschool Criteria Service
catwalkApp.factory('KarateschoolCriteria', ['KarateschoolBaseService',function (KarateschoolBaseService) {
    var entityUrl = KarateschoolBaseService.getEntityUrl('criteria');
    return KarateschoolBaseService.getResource(entityUrl,{},{
        'listColumns':{method: 'POST', params:{},url:entityUrl + 'listColumns'}
    });
}
]);
