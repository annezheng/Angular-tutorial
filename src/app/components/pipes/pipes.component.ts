import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnDestroy {
  private dateVal: Date = new Date();
  private jsonVal: Object = {moo: 'foo', goo: {too: 'new'}};

  private promiseData: any;
  private promise: Promise<any>;

  observableData: number; 
  subscription: Subscription = null; 

  observable: Observable<number>;

  imageUrl: string = 'http://via.placeholder.com/350x150'; // will use this
  // imageUrl: string = ''; // will use default

  textToClean: string = 'Lorem ipsum dolor boo sit amet hell consectetur adipisicing elit damn. Possimus!'

  getPromise(){
    return new Promise((resolve, reject)=> {
      setTimeout(()=>{
        resolve('Promise completed!')
      }, 2000);
    })
  }

  getObservable(){
    return Observable
      .interval(1000)
      .take(10)
      .map((v)=> v * v);
  }


  constructor() { 
    this.getPromise().then(v => this.promiseData = v); 
    this.promise = this.getPromise();

    this.subscription = this.getObservable().subscribe((v)=> this.observableData = v);
    this.observable = this.getObservable();
  }

  ngOnDestroy(){
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
