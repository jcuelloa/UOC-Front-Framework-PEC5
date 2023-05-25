import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() public opcionMenu = new EventEmitter();;

  goToInicio() {
    this.opcionMenu.emit(66);
    
  }

  goToArticulos() {
    this.opcionMenu.emit(1);
    
  }

  goToArticuloTemplate() {
    this.opcionMenu.emit(2);
    
  }

  goToArticuloReactivo() {
    this.opcionMenu.emit(3);
    
  }


}
