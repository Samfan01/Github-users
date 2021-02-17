export class User {
    name:any
    constructor(
        public login?:string,
        public avatar_url?:string,
        public followers?:number,
        public following?:number,
        public public_repos?:number,
        public location?:string
    ){}
}
