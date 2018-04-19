import { Component, OnInit, ViewChild, Directive, Input, Inject } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidatorFn, Validators } from '@angular/forms';


class Signup {
  constructor(public firstName: string = "",
              public lastName: string = "",
              public email: string = "",
              public password: string = "",
              public language: string = "",
              ) { };
}

function emailDomainValidator(control: FormControl){
  let email = control.value;
  if (email && email.indexOf('@') != -1){
    let [_, domain] = email.split('@');
    if (domain != 'codecraft.tv'){
      return {
        emailDomain:{
          parseDomain: domain
        }
      }
    }
    return null;
  }
}

class CodecraftValidators {
  static emailDomain(requiredDomain){
    return function(control: FormControl){
      let email = control.value;
      if (email && email.indexOf('@') != -1){
        let [_, domain] = email.split('@');
        if (domain != requiredDomain){
          return {
            emailDomain:{
              parseDomain: domain,
              requiredDomain: requiredDomain,
            }
          };
        }
        return null;
      }
    };
  };
}

@Directive({
  selector: '[emailDomain][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      // useValue: emailDomainValidator, // 1
      // useClass: EmailDomainValidator, // 2
      useExisting: EmailDomainValidator, // 3
      multi: true
    }
  ]
})
export class EmailDomainValidator {
  @Input('emailDomain') emailDomain: string; // 3

  private valFn: ValidatorFn;

  // 2 to use this, add "emailDomain" in html, 
  // "useClass: EmailDomainValidator",
  // add in ngModule {provide: 'RequiredDomain', useValue: 'google.ca'}],
  // constructor(@Inject('RequiredDomain') requiredDomain: string){
  //   this.valFn = CodecraftValidators.emailDomain(requiredDomain);
  // }

  // 3 configued in [emailDomain] = "'twitter.com'" in html
  // must use "useExisting: EmailDomainValidator" 
  ngOnChanges(): void{
    if (this.emailDomain){
      this.valFn = CodecraftValidators.emailDomain(this.emailDomain);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: FormControl){
    return this.valFn(control);
  }

}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})

export class TemplateFormComponent implements OnInit {
  langs: string[] = ['English', 'Dutch', 'French', 'Chinese'];

  model: Signup = new Signup();

  @ViewChild('f') form: any;

  onSubmit(){
    if (this.form.valid) {
      console.log('form submitted');
      this.form.reset();
    }    
  }

  constructor() { }

  ngOnInit() {
  }

}
