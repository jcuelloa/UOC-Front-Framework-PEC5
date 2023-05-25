import { Component, OnInit } from '@angular/core';

import { Article } from '../model/article';
import { ArticleQuantityChange } from '../model/article-quantity-change';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public lista_articulos: Array<Article> = [];

  constructor(){
    //this.lista_articulos = [];
   };
  
  ngOnInit(): void {
    this.lista_articulos.push(new Article(1,"Iphone","../../assets/iphone.png",500,1,true));
    this.lista_articulos.push(new Article(2,"Samsung","../../assets/samsung.png",450,1,false));
    this.lista_articulos.push(new Article(3,"OnePlus","../../assets/oneplus.png",350,0,true));

  }

  onQuantityChange(change: ArticleQuantityChange) {
    const articuloQueHaCambiado = this.lista_articulos.find(prod => {
      return change.articulo.id === prod.id;
    });
    articuloQueHaCambiado!.quantityInCart += change.cantidad;
  }



}
