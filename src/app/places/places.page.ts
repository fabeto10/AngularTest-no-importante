import { Component, OnInit } from '@angular/core';
import { Place } from './place.model';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places: Place[] = [];

  constructor(private placeServices: PlacesService) { }

  ngOnInit() {
    this.places = this.placeServices.getPlaces();
    console.log(this.places);
  };

}
