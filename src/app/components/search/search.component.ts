import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  heroes:Hero[] = [];
  termino:string = '';

  constructor(  private activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) {

      this.activatedRoute.params.subscribe( params => {
        console.log( params );
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHero( this.termino );
      })

  }

  ngOnInit() {



  }

}
