import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

export class ListComponent {

  public heroNames: string[] = ['IronMandingo','Harry Postres','Tira Flecha','Thorgasmo','Toro Sentado']
  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();

  }

}
