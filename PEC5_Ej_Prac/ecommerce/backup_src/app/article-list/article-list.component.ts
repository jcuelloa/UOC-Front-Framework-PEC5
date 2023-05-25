import { Component, OnInit } from '@angular/core';

//import { ArticleItemComponent } from '../article-item/article-item.component';

import { Article } from '../model/article';



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
    this.lista_articulos.push(new Article("Iphone","../../assets/iphone.png",500,1,true));
    this.lista_articulos.push(new Article("Samsung","../../assets/samsung.png",4500,1,false));
    this.lista_articulos.push(new Article("OnePlus","../../assets/oneplus.png",350,0,true));


  }



}
