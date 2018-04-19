import { Component, OnInit } from '@angular/core';
import "rxjs/Rx";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dir-rxjs-form',
  templateUrl: './dir-rxjs-form.component.html',
  styleUrls: ['./dir-rxjs-form.component.css']
})
export class DirRxjsFormComponent implements OnInit {
  form: FormGroup;
  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);
  
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      "comment" : this.comment,
      "name": this.name,
      "email": this.email
    });

    /* Observable Solution */
    this.form.valueChanges
            .debounceTime(1000)
            .distinctUntilChanged()
            .filter(()=>this.form.valid)
            .map( data => {
              data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
              return data
            })
            .map( data => {
              console.log('data',data);
              data.lastUpdateTS = new Date();
              return data
            })
            .subscribe( data => {
              // console.log(data);              
              console.log(JSON.stringify(data));
            });

    /* None Observable Solution */
    // this.form.valueChanges
    //     .subscribe( data => {
    //       if (this.form.valid) {
    //         data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
    //         data.lastUpdateTS = new Date();
    //         console.log(JSON.stringify(data))
    //       }
    //     });
  }

  ngOnInit() {
  }

}
