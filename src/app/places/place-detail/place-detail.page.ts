import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})

export class PlaceDetailPage implements OnInit{

  place: Place = this.placesServices.getPlace("1");

  recipeId: string = "";

  constructor(private activatedRouter: ActivatedRoute, private placesServices: PlacesService, private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap) => {
      if(!paramMap.has("placeId")){
        this.router.navigate(['/places']);
      };
      this.recipeId = paramMap.get("placeId")!;
      console.log(this.recipeId);
    });
  }


  ngOnInit() {
    this.place = this.placesServices.getPlace(this.recipeId)!;
    console.log(this.place);
  };

  deletePlace(){
    this.placesServices.deletePlaces(this.place.id);
    // console.log(this.placesServices.getPlaces());
  };
};
