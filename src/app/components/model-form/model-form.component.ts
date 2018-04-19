import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

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
// 2 and 3 is configurable 
function emailDomainValidatorFactory(requiredDomain){
  return function(control: FormControl){
    let email = control.value;
    if (email && email.indexOf('@') != -1){
      let [_, domain] = email.split('@');
      if (domain != requiredDomain){
        return {
          emailDomain:{
            parseDomain: domain
          }
        }
      }
      return null;
    }
  }
};
//3 
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

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'Dutch',
    'Russian',
    'German',
    'Chinese'
  ];

  myForm: FormGroup;

  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  createFormControls(){
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*"),
      // emailDomainValidator 
      // emailDomainValidatorFactory('codecraft.tv')
      // CodecraftValidators.emailDomain('codecraft.tv') 
      CodecraftValidators.emailDomain('google.com') 
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.language = new FormControl('');
  }

  createForm(){
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    })
  }

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit(){
    if (this.myForm.valid){
      console.log('form submitted', this.myForm.value);
      this.myForm.reset();
    }
  }

}
