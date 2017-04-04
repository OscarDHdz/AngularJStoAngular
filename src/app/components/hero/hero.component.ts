import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  hero:any = {};

  constructor( private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe( params => {
      console.log( params['id'] );
      this.hero = this._heroesService.getHeroe( params['id'] );
    })

  }


}
