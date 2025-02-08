import { Component, DestroyRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    console.log('on INIT');
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    // In this.destroyRef.onDestroy() we register a function that will be executed by angular when this component is about to be destroyed.
    this.destroyRef.onDestroy(() => {
      clearInterval(interval)
    })
  }

  ngAfterViewInit() {
    console.log('After VIEW INIT');
  }
}
