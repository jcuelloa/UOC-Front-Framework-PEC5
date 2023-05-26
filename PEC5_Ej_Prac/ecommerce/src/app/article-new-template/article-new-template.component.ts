import { Component } from '@angular/core';
import { Article } from '../model/article';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {
  
  public novalido:boolean = false;
  public message2 = '';
  public nuevoArticulo!:Article;
  
  constructor() { }

  crearArticulo(articuloForm:NgForm)  {
    if (articuloForm.invalid) {
      //this.message = 'Please correct all errors and resubmit the form';
      this.novalido = true;
    } else {
      const articulo: Article = articuloForm.value.articulo;
      console.log('Creating product', articulo);
      //this.message2 = "NUEVO ARTICULO-->"+JSON.stringify(articulo);
      this.nuevoArticulo = articulo;
    }
  }


}
