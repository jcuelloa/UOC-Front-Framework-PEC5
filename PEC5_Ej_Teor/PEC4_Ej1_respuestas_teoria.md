## PEC5 - EJERCICIO 1 - RESPUESTAS TEORÍA

### **FORMULARIOS EN ANGULAR**

**A.¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?**


**B.¿Qué son, para qué sirven y cómo se utilizan las directivas `ngModel` y `ngModelChange`?**   

Ambas directivas las usamos para hacer el binding entre los campos del formulario y los atributos de los componentes. 
- `ngmodel`: se utiliza para establecer un enlace de datos de **dos vías** entre un elemento de formulario HTML y un atributo en el componente de Angular. Cuando hablamos de dos vías nos referimos a que si asignamos un valor al atributo, lo podemos pasar al formulario y si tenemos un valor en el campo del formulario, lo podemos pasar al atributo.

- `ngmodelChange`: es un _event binding_. Al cambiar o alterar el valor del formulario, el valor se copiará al atributo.

En el ejemplo, tenemos un atributo del componente llamado _nombre_ que está conectado con el campo del formulario.

``` typescript
<input type="text"
             name="nombre"
             [ngModel]="nombre"
             (ngModelChange)="nombre=$event">
```

Podemos ahorranos estas dos instruccciones (en caso de que no necesitemos hacer algo especial por ejemplo, ejecutar una función al cambiar el valor) y usar la notación `[(ngModel)]`

``` typescript
<input type="text"
             name="nombre"
             [(ngModel)]="nombre">
```



**C.¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?**



**D.¿Qué ventajas aportan los FormGroup en la composición de formularios?**

