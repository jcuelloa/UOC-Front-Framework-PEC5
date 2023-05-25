
import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../model/article';


//templateUrl: './article-item.component.html',
//styleUrls: ['./article-item.component.css']


@Component({
  selector: 'app-article-item',
  template: `
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
  styles: [`
  
.articulo{
    display: inline-block;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
   
}

.articulo-datos{
    text-align: center;
    font-size: 1.5rem;
}

.articulo-datos p{
    margin-top: 0px;
    margin-bottom: 0px;
}

.articulo-datos span{
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    top: 3px;
    
}
.si-venta{
    background-color: greenyellow;
}

.no-venta{
    border: 1px solid red;
    position: relative;
    top: -27px;

}

p.si-venta{
    color:blue;
}
p.gris{
    color:grey;
    
    
}

.articulo img{
    width: 100px;
}

`] 

})
export class ArticleItemComponent {
 
  @Input() public unArticulo!: Article;
  
  
  // constructor(){ 
  //   this.unArticulo=new Article("Iphone","../../assets/iphone.png",500,1);
  // }

  constructor() {
    
  }

  // ngOnInit(){
  //   this.unArticulo = new Article("Iphone","../../assets/iphone.png",500,1,true);
  // }

  incrementarUnidades(){
    this.unArticulo.añadirUnidadesEnCarrito();
    
  }

  decrementarUnidades(){
    this.unArticulo.decrementarUnidadesEnCarrito();
    

  }


}
