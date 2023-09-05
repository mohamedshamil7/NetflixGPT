export interface userData {
    email : string,
    password: string,
    fullName: string | ""
}

export interface authdata extends userData {
    isSignInForm :boolean
}