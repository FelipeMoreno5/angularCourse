import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {

  @Input()
  public characterList: Character[] =[{
    name: 'Trunk',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();



  deleteCharacterById( id?: string ):void {
    if( !id ) return;

    console.log({id})

    this.onDelete.emit( id );
  }
}

