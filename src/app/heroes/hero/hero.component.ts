import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})


export class HeroComponent {

  public name: string = 'John Salchichon';
  public age:  number = 50;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 23;
  }

  resetForm():void{
    this.age = 45;
    this.name = 'ironman';
  }


}
