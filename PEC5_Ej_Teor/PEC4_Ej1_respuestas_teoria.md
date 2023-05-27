## PEC5 - EJERCICIO 1 - RESPUESTAS TEORÍA

### **FORMULARIOS EN ANGULAR**

**A.¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?**

El enfoque reactivo es más robusto, son más escalables y  reutilizables. Los formularios basados en template son útiles para formularios simples. Son más fáciles de agregar que los formularios reactivos, pero no escalan tan bien.








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

Visited
ng-touched
ng-untouched

Changed
ng-dirty
ng-pristine

Valid
ng-valid
ng-invalid


**D.¿Qué ventajas aportan los FormGroup en la composición de formularios?**
Podemos agrupar varios FormControl

Podemos validar en global un conjunto de controles. Si una falla, el grupo falla.

