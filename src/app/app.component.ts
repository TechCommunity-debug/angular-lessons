import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });
  customInterval$ = new Observable((subscriber) => {
    // subscriber.error();
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if (timesExecuted > 5) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value...');
      subscriber.next({ message: 'new value' });
      timesExecuted++;
    }, 2000);
  });
  private destroyRef = inject(DestroyRef);

  constructor() {
    // toObservable(this.clickCount);
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.interval.update((prevIntervalNumber) => prevIntervalNumber + 1);
    // }, 1000);

    // const subscription = interval(1000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe({
    //     next: (val) => console.log(val),
    //   });

    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('COMPLETED!'),
      error: () => console.log('ERROR!'),
    });
    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked button ${this.clickCount()} times.`),
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
