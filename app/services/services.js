catwalkApp.service('$global.services', [
    'KarateschoolSchool',
    'KarateschoolStudent',
    'KarateschoolCriteria',
    'KarateschoolRank',
    'KarateschoolRcriteria',
    'KarateschoolStudentrank',
    'UserManagerApplicationAuthority',
    'UserManagerApplicationPersistentToken',
    'UserManagerApplicationUser',
    'UserManagerApplicationUserAuthority',
    'Account',
function(
    KarateschoolSchool,
    KarateschoolStudent,
    KarateschoolCriteria,
    KarateschoolRank,
    KarateschoolRcriteria,
    KarateschoolStudentrank,
    UserManagerApplicationAuthority,
    UserManagerApplicationPersistentToken,
    UserManagerApplicationUser,
    UserManagerApplicationUserAuthority,
    Account
) {
            this.KarateschoolSchool = KarateschoolSchool;
            this.KarateschoolStudent = KarateschoolStudent;
            this.KarateschoolCriteria = KarateschoolCriteria;
            this.KarateschoolRank = KarateschoolRank;
            this.KarateschoolRcriteria = KarateschoolRcriteria;
            this.KarateschoolStudentrank = KarateschoolStudentrank;
            this.UserManagerApplicationAuthority = UserManagerApplicationAuthority;
            this.UserManagerApplicationPersistentToken = UserManagerApplicationPersistentToken;
            this.UserManagerApplicationUser = UserManagerApplicationUser;
            this.UserManagerApplicationUserAuthority = UserManagerApplicationUserAuthority;
            this.Account = Account;
}
]);
