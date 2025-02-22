import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';

import { type Place } from '../place.model';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  //step 2: inject HttpClient service.
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.httpClient
      .get<{places: Place[]}>('http://localhost:3000/places')
      .subscribe({
        next: (resData) => {
          console.log(resData.places);
        },
      });

    // const subscription = this.httpClient
    //   .get<{places: Place[]}>('http://localhost:3000/places',{
    //     observe: 'response'
    //   })
    //   .subscribe({
    //     next: (response) => {
    //       console.log(response);
    //       console.log(response.body?.places);
    //     },
    //   });

    // const subscription = this.httpClient
    //   .get<{places: Place[]}>('http://localhost:3000/places',{
    //     observe: 'events'
    //   })
    //   .subscribe({
    //     next: (event) => {
    //       console.log(event);
    //     },
    //   });

    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
  }
}
