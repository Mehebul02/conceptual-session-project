export interface Iuser {
    name:string,
    age:number,
    email:string,
    photo?:string | null,
    role:string,
    userStatus:"user" | "admin"
}