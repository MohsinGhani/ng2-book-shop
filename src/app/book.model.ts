export class Book {
    constructor(
        public title: string,
        public author: string,
        public pages: string,
        public publisher: string,
        public listPrice: string,
        public ourPrice: string,
        public image: string,
    ) {}
}

export class BookRequest{
    constructor(
    public title: string,
    public author: string,
    public email: string,
    public contact: string,
    public comment?: string
    ) { }
}