## PEC5

Login: jcuelloa@uoc.edu

Nombre y apellidos: Juan Antonio Cuello Alarcon

Repositorio público: https://github.com/jcuelloa/UOC-Front-Framework-PEC5

PEC5 subida a hosting: http://www.cuelloalarcon.com/uoc/angular/pec5/


### **Consideraciones**

- Con repecto a git, he creado el repositorio en la raíz de la pec, tal como lo hemos hecho en las anteriores entregas.

- En el ejercico de crear el menú (repaso), incluir una simple pista de "**usar event-binding** para que el menú (hijo) comunique al padre la opción escogida" ayudaría a los alumnos a centrar un poco la busqueda de la solución, dado el poco tiempo que hay para esta PEC.

- Aunque no era necesario, he subido la PEC a un hosting particular para probarla en dominio público. Puede consultarlo para ver el funcionamiento del formulario.

### **Descripción**

Sigo aprendiendo Angular. Todo es interesante porque es una forma diferente de afrontar un proyecto. Siento que una vez controlado, puede ser muy fácil escalarlo, incluir nuevos elementos, incluso mantenerlo, porque todo está compartimentado.

Al empezar la práctica, no sabía muy bien como hacer el menú y estuve documentándome para ver posibles opciones. Al final, lo hice usando _event-binding_ donde el hijo (el menú) le indica al padre (componente principal o web principal) que opción del menú se ha "pinchado". En un principio no sabía si esta era la forma correcta o no de hacerlo, pero al ver una pregunta del foro al respecto, confirmé que lo había hecho correctamente.

Con respecto a los formularios, una vez hechos y entendidos los formularios por template, los reactivos los he hecho muy rápido. De lo que más me ha costado ha sido entender los estados y la forma de usar *ngif para validar errores.

### **Mejoras, pequeñas** 
- Para mejorar el aspecto visual, empecé por usar **Angular Material UI**, pero no me convenció el aspecto. Tampoco profundicé mucho en él.
- Como alternativa, he usado **Bootstrap** para el estilo del formulario. Lo instalé según el video de los apuntes y usé algunas clases.
- A la hora de controlar los errores en la URL, he discriminado dos errores:
    - el error de campo obligatorio _required_
    - el error de pattern

