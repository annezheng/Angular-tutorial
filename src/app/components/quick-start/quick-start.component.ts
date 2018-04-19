import { Component, OnInit, ReflectiveInjector, InjectionToken } from '@angular/core';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.css']
})
export class QuickStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

//  Dependency Injection & Providers  

//-----injector----//
class MandrillService {}; 
class SendGridService {};

let injector = ReflectiveInjector.resolveAndCreate([  
  MandrillService,
  SendGridService
]);

let emailService1 = injector.get(MandrillService);
let emailService2 = injector.get(MandrillService);
// console.log(emailService1 === emailService2); // true

// let emailService1 = new MandrillService();
// let emailService2 = new MandrillService();
// console.log(emailService1 === emailService2); // false


//-----child injector----//
class EmailService {}

let injector2 = ReflectiveInjector.resolveAndCreate([EmailService]); 
let childInjector2 = injector2.resolveAndCreateChild([]);
let childInjector = injector2.resolveAndCreateChild([EmailService]);  

// console.log(injector2.get(EmailService) === childInjector2.get(EmailService)); // true
// console.log(injector2.get(EmailService) === childInjector.get(EmailService)); // false


//-----useClass & useExisting----//
class GenericEmailService {};

let injector3 = ReflectiveInjector.resolveAndCreate([
  { provide: GenericEmailService, useClass: GenericEmailService }, 
  { provide: MandrillService, useExisting: GenericEmailService }, 
  { provide: SendGridService, useExisting: GenericEmailService } 
  // { provide: MandrillService, useClass: GenericEmailService }, 
  // { provide: SendGridService, useClass: GenericEmailService } 
]);

let emailService31 = injector3.get(SendGridService); 
// console.log(emailService31); // GenericEmailService {}
let emailService32 = injector3.get(MandrillService); 
// console.log(emailService32); // GenericEmailService {}
let emailService33 = injector3.get(GenericEmailService); 
// console.log(emailService33); // GenericEmailService {}
// console.log(emailService31 === emailService32 &&  emailService32 === emailService33); // true if useExisting, false if useClass


//-----useValue----//
let injector4 = ReflectiveInjector.resolveAndCreate([
  { provide: "Config",
    useValue: Object.freeze({
      'APIKey': 'XYZ1234ABC',
      'APISecret': '555-123-111'
    })
  }
]);

// console.log(injector4.get("Config")); 
// config.APIKey = 'foo'; // works if not use Object.freeze
// console.log(injector4.get("Config")); 

//-----useFactory----//
const isProd = true;

let injector5 = ReflectiveInjector.resolveAndCreate([
  {
    provide: "EmailService", useFactory: () => { 
      if (isProd) {
        return new MandrillService();
      } else {
        return new SendGridService();
      }
    }
  },
]);
let emailService51 = injector5.get("EmailService");
let emailService52 = injector5.get("EmailService");
// console.log(emailService51 === emailService52); // true 

// TOKEN 
// --- use class as token ---//
class EmailService1 {};
class MandrillService1 extends EmailService1 {};
class SendGridService1 extends EmailService1 {};

let injector6 = ReflectiveInjector.resolveAndCreate([
  { provide: EmailService1, useClass: SendGridService1 }
]);

let emailService61 = injector6.get(EmailService1);
// console.log(emailService1);

// --- use InjectionToken ---//
class MandrillService2 {};
class SendGridService2 {};
let EmailService2 = new InjectionToken<string>("EmailService"); 

let injector7 = ReflectiveInjector.resolveAndCreate([
  { provide: EmailService2, useClass: SendGridService2 } 
]);

let emailService71 = injector7.get(EmailService2);
// console.log(emailService2);

// name clashes of using string token

// let MandrillServiceToken = "EmailService";
// let SendGridServiceToken = "EmailService";

const MandrillServiceToken = new InjectionToken<string>("EmailService");
const SendGridServiceToken = new InjectionToken<string>("EmailService");

let injector8 = ReflectiveInjector.resolveAndCreate([
  { provide: SendGridServiceToken, useClass: SendGridService },
  { provide: MandrillServiceToken, useClass: MandrillService },
]);
// console.log(injector8.get(SendGridServiceToken)); // last overwrites others if using string token
// console.log(injector8.get(MandrillServiceToken)); 
// console.log(injector8.get(SendGridServiceToken) === injector8.get(MandrillServiceToken)); // true if using string token

