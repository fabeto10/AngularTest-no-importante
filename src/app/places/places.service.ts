import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    {
      id: "1",
      title: 'Eiffel Tower',
      imageURL: 'https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg',
      comments: ['Awewsome place', 'Wonderful experience'],
    },
    {
      id: "2",
      title: 'Statue of liberty',
      imageURL: 'https://cdn.britannica.com/82/183382-050-D832EC3A/Detail-head-crown-Statue-of-Liberty-New.jpg',
      comments: ['Awesome place', 'Wonderful experience']
    },
    {
      id: "3",
      title: 'Awesome place',
      imageURL: 'https://cdn.britannica.com/82/183382-050-D832EC3A/Detail-head-crown-Statue-of-Liberty-New.jpg',
      comments: []
    },
  ];

  constructor() { }

  getPlaces(){
    return [...this.places];
  };

  getPlace(placeId: string ): Place{
    return{
      ...this.places.find(place => {
        return place.id === placeId;
      }),
    } as Place;
  };

  addPlace(title: string, imageUrl: string) {
    this.places.push({
      id: this.places.length + 1 + "",
      title: title,
      imageURL: imageUrl,
      comments: [],
    });
  };

  deletePlaces(placeId: string){
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    });
  };
}
