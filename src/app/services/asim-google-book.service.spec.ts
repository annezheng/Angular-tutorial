import { TestBed, inject,async,tick,fakeAsync } from '@angular/core/testing';
import {HttpModule, BaseRequestOptions, Http, ResponseOptions, Response} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import { AsimGoogleBookService } from './asim-google-book.service';
import {AsimBook} from '../classes/asim-book';
import { GoogleBooksService } from './google-books.service';

fdescribe('AsimGoogleBookService', () => {
  
  let service : AsimGoogleBookService;
  let backend: MockBackend;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        AsimGoogleBookService,
        MockBackend,
        BaseRequestOptions,{
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
    backend = TestBed.get(MockBackend);
    service = TestBed.get(AsimGoogleBookService);
  });

  it('should return books when searched', fakeAsync(()=> {
    let response = {
      "kind": "books#volumes",
      "totalItems": 896,
      "items": [
        {
          "kind": "books#volume",
          "id": "js2P_8lbR2wC",
          "etag": "atSpw2aSE4E",
          "selfLink": "https://www.googleapis.com/books/v1/volumes/js2P_8lbR2wC",
          "volumeInfo": {
            "title": "Fundamentals of Biomechanics",
            "authors": [
              "Duane V. Knudson"
            ],
            "publisher": "Springer Science & Business Media",
            "publishedDate": "2003-01-01",
            "description": "Fundamentals of Biomechanics introduces the exciting world of how human movement is created and how it can be improved. Teachers, coaches and physical therapists all use biomechanics to help people improve movement and decrease the risk of injury. The book presents a comprehensive review of the major concepts of biomechanics and summarizes them in nine principles of biomechanics. Fundamentals of Biomechanics concludes by showing how these principles can be used by movement professionals to improve human movement. Specific case studies are presented in physical education, coaching, strength and conditioning, and sports medicine.",
            "industryIdentifiers": [
              {
                "type": "ISBN_10",
                "identifier": "0306474743"
              },
              {
                "type": "ISBN_13",
                "identifier": "9780306474743"
              }
            ],
            "readingModes": {
              "text": false,
              "image": true
            },
            "pageCount": 310,
            "printType": "BOOK",
            "categories": [
              "Science"
            ],
            "averageRating": 3.0,
            "ratingsCount": 2,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=js2P_8lbR2wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=js2P_8lbR2wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.co.uk/books?id=js2P_8lbR2wC&pg=PA121&dq=Angular&hl=&cd=11&source=gbs_api",
            "infoLink": "http://books.google.co.uk/books?id=js2P_8lbR2wC&dq=Angular&hl=&source=gbs_api",
            "canonicalVolumeLink": "http://books.google.co.uk/books/about/Fundamentals_of_Biomechanics.html?hl=&id=js2P_8lbR2wC"
          },
          "saleInfo": {
            "country": "GB",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
          },
          "accessInfo": {
            "country": "GB",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
              "isAvailable": false
            },
            "pdf": {
              "isAvailable": true,
              "acsTokenLink": "http://books.google.co.uk/books/download/Fundamentals_of_Biomechanics-sample-pdf.acsm?id=js2P_8lbR2wC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://books.google.co.uk/books/reader?id=js2P_8lbR2wC&hl=&printsec=frontcover&output=reader&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
          },
          "searchInfo": {
            "textSnippet": "The \u003cb\u003eangular\u003c/b\u003e velocities of joints are particularly relevant in biomechanics, \u003cbr\u003e\nbecause they represent the \u003cb\u003eangular\u003c/b\u003e speed of anatomical motions. If relative \u003cbr\u003e\nangles are calculated between anatomical segments, the \u003cb\u003eangular\u003c/b\u003e velocities \u003cbr\u003e\ncalculated can&nbsp;..."
          }
        },
        {
          "kind": "books#volume",
          "id": "PrOKEcZXJ58C",
          "etag": "7wCSB86V9Fc",
          "selfLink": "https://www.googleapis.com/books/v1/volumes/PrOKEcZXJ58C",
          "volumeInfo": {
            "title": "Biomechanics of Sport and Exercise",
            "authors": [
              "Peter Merton McGinnis"
            ],
            "publisher": "Human Kinetics",
            "publishedDate": "2005",
            "description": "\"Biomechanics of Sport and Exercise, Second Edition,\" introduces exercise and sport biomechanics in concise terms rather than focusing on complex math and physics. This book helps students learn to appreciate external forces and their effects, how the body generates forces to maintain position, and how forces create movement in physical activities.",
            "industryIdentifiers": [
              {
                "type": "ISBN_10",
                "identifier": "0736051015"
              },
              {
                "type": "ISBN_13",
                "identifier": "9780736051019"
              }
            ],
            "readingModes": {
              "text": false,
              "image": true
            },
            "pageCount": 411,
            "printType": "BOOK",
            "categories": [
              "Health & Fitness"
            ],
            "averageRating": 3.5,
            "ratingsCount": 4,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=PrOKEcZXJ58C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=PrOKEcZXJ58C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.co.uk/books?id=PrOKEcZXJ58C&pg=PA189&dq=Angular&hl=&cd=12&source=gbs_api",
            "infoLink": "http://books.google.co.uk/books?id=PrOKEcZXJ58C&dq=Angular&hl=&source=gbs_api",
            "canonicalVolumeLink": "http://books.google.co.uk/books/about/Biomechanics_of_Sport_and_Exercise.html?hl=&id=PrOKEcZXJ58C"
          },
          "saleInfo": {
            "country": "GB",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
          },
          "accessInfo": {
            "country": "GB",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
              "isAvailable": false
            },
            "pdf": {
              "isAvailable": false
            },
            "webReaderLink": "http://books.google.co.uk/books/reader?id=PrOKEcZXJ58C&hl=&printsec=frontcover&output=reader&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
          },
          "searchInfo": {
            "textSnippet": "The basics of \u003cb\u003eangular\u003c/b\u003e kinetics, the causes of \u003cb\u003eangular\u003c/b\u003e motion, are explained by \u003cbr\u003e\n\u003cb\u003eangular\u003c/b\u003e interpretations of Newton&#39;s laws of motion. \u003cb\u003eAngular\u003c/b\u003e analogs of inertia and \u003cbr\u003e\nmomentum must be understood to make these interpretations. \u003cb\u003eAngular\u003c/b\u003e inertia&nbsp;..."
          }
        }
      ]
    };

    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    // Perform a request and make sure we get the response we expect
    service.searchBooks("Angular");
    tick();

    expect(service.books.length).toBe(2);
    expect(service.books[0].id).toBe("js2P_8lbR2wC");
    expect(service.books[0].title).toBe("Fundamentals of Biomechanics");
    expect(service.books[0].subTitle).toBeUndefined();
    expect(service.books[0].authors.length).toBe(1);
    expect(service.books[0].authors[0]).toBe("Duane V. Knudson");
    expect(service.books[0].publisher).toBe("Springer Science & Business Media");
    expect(service.books[0].publishDate).toBe("2003-01-01");
    expect(service.books[0].description).toBe("Fundamentals of Biomechanics introduces the exciting world of how human movement is created and how it can be improved. Teachers, coaches and physical therapists all use biomechanics to help people improve movement and decrease the risk of injury. The book presents a comprehensive review of the major concepts of biomechanics and summarizes them in nine principles of biomechanics. Fundamentals of Biomechanics concludes by showing how these principles can be used by movement professionals to improve human movement. Specific case studies are presented in physical education, coaching, strength and conditioning, and sports medicine.");
    expect(service.books[0].categories.length).toBe(1);
    expect(service.books[0].categories[0]).toBe("Science");
    expect(service.books[0].thumbnail).toBe("http://books.google.com/books/content?id=js2P_8lbR2wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api");
    expect(service.books[0].smallThumbnail).toBe("http://books.google.com/books/content?id=js2P_8lbR2wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api");
 
  }))
  

  it('should be created', inject([AsimGoogleBookService], (service: AsimGoogleBookService) => {
    expect(service).toBeTruthy();
  }));
});
