import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, observable, Subscription} from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    // Crée une observable qui émet un chiffre ttes les secondes
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
  }
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
