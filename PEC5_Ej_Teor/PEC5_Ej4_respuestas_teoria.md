## PEC5 - EJERCICIO 4 - RESPUESTAS TEORÍA

### **FORMULARIOS REACTIVOS EN ANGULAR**

**A.¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?**   
- FormControl: representa un elemento de un formulario, por ejemplo, un input. Se utiliza cuando quieres controlar de forma individual un control del formulario.

```typescript
public nombreUsuario = new FormControl(); //lo definimos

this.nombreUsuario.value //para consultar el valor de control

```

- FormGroup: para agrupar varios controles en un grupo. Podemos conprobar el grupo entero, podemos verificar si el grupo entero es válido en lugar de ir control a control.

```typescript
public formularioLogin: FormGroup = new FormGroup({
    mailUsuario: new FormControl('', [Validators.required,Validators.email]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(8)])
  });


this.formularioLogin.valid //true si el grupo entero es válido
this.formularioLogin.mailUsuario //valor del campo  mailUsuario
this.formularioLogin.contraseña //valor del campo contraseña

```

- FormBuilder: es _sugar syntax_ para crear los FormGroup. No tenemos que de forma individual hacer los `new FormControl()`. La consulta del estado del grupo y sus valores individuales no varía.

```typescript
public formularioLogin: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

createForm() {
    this.formularioLogin = this.fb.group({
    mailUsuario: ['', [Validators.required,Validators.email]],
    contraseña: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

```


**B.Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.**

- **required**: Valida si el campo tiene un valor ingresado. Ejemplo: Validators.required.

- **minLength**: Valida la longitud mínima del valor de un campo. Ejemplo: Validators.minLength(3).

- **maxLength**: Valida la longitud máxima del valor de un campo. Ejemplo: Validators.maxLength(10).

- **pattern**: Valida si el valor de un campo coincide con una expresión regular. Ejemplo: Validators.pattern('[a-zA-Z ]*') (solo letras y espacios).

- **email**: Valida si el valor de un campo es una dirección de correo electrónico válida. Ejemplo: Validators.email.

- **min**: Valida si el valor numérico de un campo es mayor o igual a un valor mínimo dado. Ejemplo: Validators.min(18).

- **max**: Valida si el valor numérico de un campo es menor o igual a un valor máximo dado. Ejemplo: Validators.max(100).

- **requiredTrue**: Valida si un campo de tipo checkbox ha sido marcado como verdadero. Ejemplo: Validators.requiredTrue.

- **compose**: Cuando necesitamos varios validadores para un mismo campo. Podemos omitirmo usando una lista de validadores [validador1,validador2,...]


**C.¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?**
Los estados son los mismos que en los formularios dirigidos por template. 

Copio y pego de la otra pregunta:

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

