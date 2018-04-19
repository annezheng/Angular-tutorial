import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ViewChild} from '@angular/core';
import { Joke } from '../../classes/joke';

import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

class Signup {
  constructor(public setup: string = "",
              public punchline: string = ""
              ) { };
}

@Component({
  selector: 'app-gs-joke-form',
  templateUrl: './gs-joke-form.component.html',
  styles: ['./gs-joke-form.component.css'],// does not work?
    // encapsulation: ViewEncapsulation.Native
    // encapsulation: ViewEncapsulation.None // if other component sets the same CSS attribute, it will use its own
    encapsulation: ViewEncapsulation.Emulated

})
export class GsJokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup, punchline){
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

  // using template driven form method
  model: Signup = new Signup();
  @ViewChild('f') form: any;

  onSubmit(){
    if (this.form.valid) {
      this.createJoke(this.model.setup, this.model.punchline);
      this.form.reset();
    }
  }

  // using model driven method
  myForm: FormGroup;
  setup: FormControl;
  punchline: FormControl;

  createFormControls(){
    this.setup = new FormControl('', Validators.required);
    this.punchline = new FormControl('', Validators.required);
  }

  createForm(){
    this.myForm = new FormGroup({
      setup: this.setup,
      punchline: this.punchline
    })
  }

  onSubmitModel(){
    if (this.myForm.valid){
      this.createJoke(this.myForm.value.setup, this.myForm.value.punchline);
      this.myForm.reset();
    }
  }

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

}
