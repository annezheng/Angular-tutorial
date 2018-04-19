export class BookItem {
    constructor(public id: string,
        public title: string,        
        public authors: string,     
        public thumbnail: string,
        public categories: string) { }
}

export class BookDetailItem {
    constructor(public id: string,
        public title: string,        
        public description: string, 
        public pages: string, 
        public thumbnail: string,
        public categories: string[],
        public publisher: string, 
        public publisherDate: string, 
        public previewLink: string, ) { }
}


