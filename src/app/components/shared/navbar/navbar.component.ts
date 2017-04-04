import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  buscarHero( termino:string ) {

    console.log(termino);
    // let heroes:Hero[] = this._heroesService.buscarHero(termino);
    this.router.navigate( ['/search', termino] );

  }

}
