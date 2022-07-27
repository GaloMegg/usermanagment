export interface User {
    "userId": string;
    "permissions": Permissions;
}

export interface Permissions {
    "programs":PermissionsOptions;
    "beneficiary": PermissionsOptions ;
}

export interface PermissionsOptions {
    "view": string;
    "create": boolean;
    "edit": string;
    "deleteData": string;
}
