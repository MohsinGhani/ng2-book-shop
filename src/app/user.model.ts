export class User {
    constructor(
        public name: string,
        public email: string,
        public contact: string,
        public gender: string,
        public image: string,
        public status: string,
        public login: boolean,
        public password: string,
        public confirmPassword?: string,
        public newPassword?: string,
        public ConfirmNewPassword?: string,

    ){}
}

export class Login {
    constructor(
        public id: string,
        public password: string
    ) {}
}