'use strict';

//  Karateschool Studentrank Service
catwalkApp.factory('KarateschoolStudentrank', ['KarateschoolBaseService',function (KarateschoolBaseService) {
    var entityUrl = KarateschoolBaseService.getEntityUrl('studentrank');
    return KarateschoolBaseService.getResource(entityUrl,{},{
        'listColumns':{method: 'POST', params:{},url:entityUrl + 'listColumns'}
    });
}
]);
