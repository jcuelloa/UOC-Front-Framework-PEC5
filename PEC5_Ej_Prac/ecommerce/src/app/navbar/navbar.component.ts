import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() public opcionMenu = new EventEmitter();;

  goToOpcion(op:number) {
    this.opcionMenu.emit(op);
  }

  
}
