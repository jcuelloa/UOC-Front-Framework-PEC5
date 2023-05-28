## PEC5 - EJERCICIO 1 - RESPUESTAS TEORÍA

### **FORMULARIOS EN ANGULAR**

**A.¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?**

- En los dirigidos por template, por lo que he hecho en la práctica, el control de los errores está en el formulario mientras que en los reactivos, dicho control se programa en el componente. Además, en estos últimos podemos crearnos nuestros propios controles de errores (validadores), no solo los que nos ofrece por defecto Angular.   

- El enfoque reactivo es más robusto, son más escalables y  reutilizables. Los formularios basados en template son útiles para formularios simples. Son más fáciles de agregar que los formularios reactivos, pero no escalan tan bien.


**B.¿Qué son, para qué sirven y cómo se utilizan las directivas `ngModel` y `ngModelChange`?**   

Ambas directivas las usamos para hacer el binding entre los campos del formulario y los atributos de los componentes. 
- `ngmodel`: se utiliza para establecer un enlace de datos o binding **unidireccional** entre un atributo del componente y un elemento de formulario HTML. Cuando asignamos un valor al atributo, aparecerá en el formulario. Es en esa dirección _atributo-->formulario_

- `ngmodelChange`: es un _event binding_. Al cambiar o alterar el valor del formulario, el valor se copiará al atributo. Es un binding **unidireccional** pero esta vez al contrario que la forma anterior. La dirección es _formulario-->atributo_

En el ejemplo, tenemos un atributo del componente llamado _nombre_ que está conectado con el campo del formulario.

``` typescript
<input type="text"
             name="nombre"
             [ngModel]="nombre"
             (ngModelChange)="nombre=$event">
```

Podemos ahorranos estas dos instruccciones (en caso de que no necesitemos hacer algo especial por ejemplo, ejecutar una función al cambiar el valor) y usar la notación `[(ngModel)]` que es un binding **de dos vías**, es decir, funciona en ambas direcciones.

``` typescript
<input type="text"
             name="nombre"
             [(ngModel)]="nombre">
```



**C.¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?**
Hay tres estados que podemos usar para el control de errores. Por ejmplo, podemos mostrar un error en un campo de URL solo si hemos escrito algo en el campo. O directamente, podemos saber si un campo es válido o no. Jugando y combinando con estos estados, podemos ser **más precisos** en cuando mostrar o no los errores.

Cada uno de los tres estados o modos de interacción tienen dos clases CSS de validación, verdadera y falsa, acorde a que se cumple o no el estado.


- Estado **Visited**: cuando el usuario ha interactuado con el control, por ejemplo, cuando hemos hecho click o nos hemos movido a él con la tabulación.
    - ng-touched: verdadero o visitado
    - ng-untouched: falso o no visitado   
   
- Estado **Changed**: cuando hemos cambiado el valor de campo, cuando hemos escrito algo, borrado, activado un checkbok, etc. 
    - ng-dirty: verdadero o cambiado/alterado
    - ng-pristine: falso o no cambiado/alterado

- Estado **Valid**: cuando un control es válido acorde a los requisitos y control de errores que le hayamos puesto.
    - ng-valid: verdadero o válido
    - ng-invalid: falso o inválido


**D.¿Qué ventajas aportan los FormGroup en la composición de formularios?**   
Podemos agrupar varios controles en un _FormGroup_ y aplicar validadores a todo el grupo. Por ejmplo, para que un grupo sea válido, todos los cotroles del grupo deben ser válidos.   

De esta forma podemos hacer validaciones más globales, y no getenemos que ir programando elemento a elemento.

