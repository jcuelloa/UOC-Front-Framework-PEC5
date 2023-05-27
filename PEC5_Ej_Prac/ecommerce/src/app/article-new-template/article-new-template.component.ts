import { Component } from '@angular/core';
import { Article } from '../model/article';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {
  
  public submitRealizado:boolean = false;
  public nuevoArticulo!:Article;
  
  
  constructor() {  }

  crearArticulo(articuloForm:NgForm)  {
    if (articuloForm.invalid) {
      //submitRealizado lo uso para que solo me muestre el error en el input una vez escrito algo o una vez que he probado a enviarlo y no me lo muestre de enrtada nada más cargar el formulario 
      this.submitRealizado = true;
    } else {
      this.nuevoArticulo = articuloForm.value.articulo;
      
      //El checkbox toma por defecto un valor vacio si no toco nada y envio el form. Lo pongo a false
      if (!this.nuevoArticulo.isOnSale){
        this.nuevoArticulo.isOnSale=false;
      }
      console.log('Crando un nuevo articulo-->', this.nuevoArticulo);
    }
  }


}
