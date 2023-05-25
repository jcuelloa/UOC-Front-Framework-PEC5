
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Article } from '../model/article';

import { ArticleQuantityChange } from '../model/article-quantity-change';

@Component({
  selector: 'app-article-item',
  changeDetection: ChangeDetectionStrategy.OnPush,

  //templateUrl: './article-item.component.html',
  template:`
    <div class="articulo" [ngClass]="unArticulo.isOnSale ? 'si-venta' : 'no-venta'">
      <img [src]="unArticulo.imageUrl">
      <div class="articulo-datos">
        <p>{{unArticulo.name}}</p>
        <p [ngClass]="unArticulo.isOnSale ? '' : 'gris'">{{unArticulo.price}} €</p>
        <ng-container *ngIf="unArticulo.isOnSale">
          <button   [disabled]="unArticulo.quantityInCart == 0" (click)="decrementarUnidades()">-</button>
          <span>{{unArticulo.quantityInCart}}</span>
          <button (click)="incrementarUnidades()">+</button>
        </ng-container>
      </div>
    </div>
  `,

  //He probado a poner los estilos en linea usando styles: [`..estilos..`]
  //pero lo he quitado porque el archivo quedaba super lioso. Dejo solo el
  //template en linea para cumplir lo que dice la práctica.
  styleUrls: ['./article-item.component.css']

})
export class ArticleItemComponent {
 
  @Input() public unArticulo!: Article;
  @Output() eventoQuantityChange: EventEmitter<ArticleQuantityChange> = new EventEmitter(); 

  public a!:ArticleQuantityChange;

  constructor() {
    
  }

  // Ya no usamos esto pues para asignmar el artículo, usamos property binding 
  // de entrada
  // ngOnInit(){
  //   this.unArticulo = new Article("Iphone","../../assets/iphone.png",500,1,true);
  // }

  incrementarUnidades(){
    this.eventoQuantityChange.emit({articulo: this.unArticulo, cantidad: 1});
    
    //Para el ejercicio 7, es el padre, por medio del evento de salida,
    //quien modifica la cantidad
    //this.unArticulo.añadirUnidadesEnCarrito();
    
  }

  decrementarUnidades(){
    this.eventoQuantityChange.emit({articulo: this.unArticulo, cantidad: -1});
    
    //Para el ejercicio 7, es el padre, por medio del evento de salida,
    //quien modifica la cantidad
    //this.unArticulo.decrementarUnidadesEnCarrito();

  }


}
