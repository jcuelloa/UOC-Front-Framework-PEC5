export class Article {
    //isOnSale: boolean = true;

    constructor(public name: string,
                public imageUrl: string,
                public price: number,
                public quantityInCart: number,
                public isOnSale: boolean){}

    añadirUnidadesEnCarrito(){
        this.quantityInCart++;

    }    

    decrementarUnidadesEnCarrito(){
        this.quantityInCart--;

    }        


}
