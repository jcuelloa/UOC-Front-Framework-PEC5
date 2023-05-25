import { Component } from '@angular/core';
import { Article } from './model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tienda de moviles';

  opcion:number=1;


  articuloPo=new Article(666,"Pow","../../assets/poo.png",1000,55,true);



  recibirOpcion(t: number) {
    console.log("opcion recibida: "+t);
    this.opcion=t;
  }


}
