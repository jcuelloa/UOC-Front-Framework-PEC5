import { Component } from '@angular/core';
import { Article } from '../model/article';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {
  public novalido:boolean = false;
  public nuevoArticulo!:Article;

  public articuloForm!: FormGroup;

  constructor(private fb:FormBuilder) {  
    this.createForm();

  }

  createForm(){
    this.articuloForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('^http(s?)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?$')]],
      isOnSale: false
    });

  }


  crearArticulo(){
    if (this.articuloForm.invalid) {
          //this.message = 'Please correct all errors and resubmit the form';
          this.novalido = true;
        } else {
          // //const articulo: Article = articuloForm.value.articulo;
          this.nuevoArticulo = this.articuloForm.value;
          
          // //El checkbox toma por defecto in valor vacio. Lo pongo a false
          // if (!this.nuevoArticulo.isOnSale){
          //   this.nuevoArticulo.isOnSale=false;
          // }
          
          console.log('Crando un nuevo articulo-->', this.nuevoArticulo);
          
          // //this.message2 = "NUEVO ARTICULO-->"+JSON.stringify(articulo);
          // //this.nuevoArticulo = articulo;
        }


  }





}



  