import { Component } from '@angular/core';
import { Article } from '../model/article';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {
  public submitRealizado:boolean = false;
  public nuevoArticulo!:Article;

  public articuloForm!: FormGroup;

  constructor(private fb:FormBuilder) {  
    this.createForm();

  }


  createForm(){
    this.articuloForm = this.fb.group({
      name: ['', [Validators.required,this.nombreArticuloValidator()]],
      price: ['', [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('^http(s?)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?$')]],
      isOnSale: false
    });

  }

  nombreArticuloValidator():ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      const nombreArticulo = control.value.toLowerCase();
      //console.log(nombreArticulo);

      const nombresProhibidos=['prueba','test','mock','fake'];
      
      if (!nombresProhibidos.includes(nombreArticulo)){
        return null;
      }
      else{
        return {nombreArticuloValidator:true}
      }
    }
  }


  crearArticulo(){
    if (this.articuloForm.invalid) {
      
      //submitRealizado lo uso para que solo me muestre el error en el input una vez escrito algo o una vez que he probado a enviarlo y no me lo muestre de enrtada nada más cargar el formulario    
      this.submitRealizado = true; 
    } else {
          this.nuevoArticulo = this.articuloForm.value;
          console.log('Crando un nuevo articulo-->', this.nuevoArticulo);
    }

  }

}



  