Programación

1.	Escribe un código que recorra un array de nombres y los imprima en consola uno por uno.

R://Adjunto repositorio del código: https://github.com/gjoiver/prueba-tecnica-angular/tree/main/print-names


2. Escriba un programa en javascript que sea capaz de transformar texto natural a código morse y viceversa.
-	Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
-	En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
-	El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
R:// Adjunto repositorio con el código: https://github.com/gjoiver/prueba-tecnica-angular/tree/main/morse-convert

3. Dada siguiente representación de un árbol:

```javascript
const tree = {
    branches: [ 
              {value: 5,
               branches: [ {value: 2}, 
                           {value: 4, branches: [{value: 3, branches: [{value:2}, {value: 1}]}]}
                         ]     
              },
              {value: 10,
                branches: [{value: 2, 
                            branches: [{value: 4}, {value: 2, 
    branches: [ {value:2, branches: [{value: 1}, {value: 5}]}] 
                                                    }
      ] 
                           }, 
                           {value: 4, branches: [{value: 2, branches: [{value:1}, {value: 23}]}]}]
              }
    ]
}
```

Escriba un programa en Javascript que sume los valores de las ramas y las horas (una hoja es un objeto que no tiene branches) de dicho árbol. El algoritmo debe funcionar para un árbol de cualquier profundidad.

R://Adjunto repositorio del código: https://github.com/gjoiver/prueba-tecnica-angular/tree/main/sum-tree


Angular


1. Dado el siguiente código:

```javascript
getCustomers() {
	console.log('Start')
	this.httpClient.get(`www.seti/gestionplus/getCustomers`)
	.subscribe( (customers: any) => { 
		console.log('getCustomers')
	})
	console.log('End')
}
```

Escriba que debería aparecer en consola una vez se ejecute.

R// Debería aparecer los consoles.logs en el siguiente orden:
`Start, End, getCustomers`. 

Debido a que la llamada HTTP es un proceso asíncrono, es decir que su llamada no se resuelve de inmediato, pero luego cuando llega la respuesta, el subscribe empieza a ejecutarse y termina luego de que la función principal haya terminado.


2. El siguiente fragmento de código pertenece al componente customer.component.ts en Angular. Las variables: customer, refresh y errorLoadEvent, son utilizadas para establecer una comunicación entre este componente y cualquier otro que lo utilice.

```typescript
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  
  @Input() customer: any = null;
  @Input() refresh: Subject<any>;
  @Output() errorLoadEvent = new EventEmitter(); 
  
  ngOnInit(): void {
   this.refresh.subscribe((change) => {
	onRefresh(change);
    }
  }
```

De acuerdo con esto:

	- Describa cómo funciona la comunicación de cada una de esas variables.

R:// 
El primer input indica que el componente CustomerComponent recibe un parámetro desde el componente padre, en este caso está recibiendo un customer el cual será pintada su información en el html.
El segundo input también implica que se está recibiendo un parámetro desde el componente padre, en este caso es un parámetro llamado refresh que es de tipo Subject, los parámetros de tipo Subject indican que es campo que puede ser un observable y que además puede emitir valores, se recomienda su uso en comunicaciones entre componentes que no están son padres e hijos.
Por último, tenemos un output, que se encarga de emitir un evento desde el hijo el cual es recibido en el padre, el padre recibe este evento y procesa su información de acuerdo a los requerimientos, en este caso, si ocurre un error en el componente hijo, este será enviado al padre y se mostrará una alerta o algo parecido.

	- Escriba el código HTML y TS de un componente que utilice a customer.component.ts

R:// Repositorio donde está el código alojado de la solución: https://github.com/gjoiver/prueba-tecnica-angular/tree/main/angular-customers

TS: `angular-customers\src\app\customers\pages\home\home.ts`

HTML: `angular-customers\src\app\customers\pages\home\home.html`

3. Describa en pocas palabras cual es la diferencia entre Eager Loading y lazy loading en Angular
  
R// El Eager Loading carga todos los módulos dentro de una aplicación de Angular al principio de la construcción de la app, se usa más que todo para aplicaciones pequeñas y donde la carga es rápida, pero el Lazy Loading se usa para cargar los módulos de solo cuando sean necesarios o sean llamadas por el usuario, mejorando el performance de la app, evitando hacer llamados innecesarios, este último se utiliza más en aplicaciones más grandes, donde cada módulo a cargar pertenezca a una ruta dentro de la aplicación.

4. Describa que es un Guard y que es un Interceptor en Angular, de ejemplos de cómo se pueden utilizar.

Guard:

Un Guard se utiliza más que todo para validar el ingreso de rutas en Angular, por ejemplo, si queremos acceder a una ruta de que solo personas que hayan iniciado sesión o que tengo un rol en especifico como Administrador puedan acceder a dicha ruta, entonces a esa ruta se le asigna un Guard en el routing module donde esté especificada. Tenemos varios tipos de Guard que son los siguientes: `CanActivate`, `CanDeactivate`, `resolve`, `canLoad`.

•	`CanActivate`: Se usa en el caso de querer navegar hacia una ruta, el módulo es cargado, pero primero se valida antes si se puede entrar.

•	`CanDeactive`: Se usa en el caso de querer salir de una ruta, por ejemplo, si un usuario desea irse de una ruta, pero no ha dejado diligenciado algún formulario, con el CanDeactive podemos validar que le falta diligenciar el formulario y mostrarle un mensaje de advertencia de que no lo ha llenado.

•	`Resolve`: Un resolve permite obtener la información que se va a pintar antes en un componente y una vez que esta sea obtenida poder renderizarlo. Esto evita el caso de crear el componente sin datos iniciales y luego llenarlo de datos, por lo que el usuario no verá pantallas vacías al principio.

•	`canLoad`: Es algo similar al CanActivate pero tiene la diferencia de que primero protege la ruta y si la validación es falsa entonces el módulo no es cargado.

Interceptor:
Un interceptor es una funcionalidad dentro de Angular que permite interceptar solicitudes a los servicios del backend a los que apunta una aplicación. Su uso más común es de construir cabeceras en las solicitudes con datos que no son tan cambiantes, un ejemplo de ello es el token de un usuario, para no tener que estar enviando el token en cada parte del código donde se esté haciendo una petición, podemos interceptar cada solicitud e incluir este token sin tener que invocarlo cada vez, así centralizando la generación de este. Además, un interceptor es útil para el control de excepciones o de errores que no están mapeados o de errores que son más generales de la aplicación. Por lo tanto, si ocurre un error se puede actuar de acuerdo a ello.

5. Describa en sus palabras los siguientes eventos del ciclo de vida de un componente:

	`ngOnInit`: Se usa más que todo para inicializar datos o llamar servicios cuando se crea el componente, solo se ejecuta una vez cuando el componente es creado.

	`ngAfterViewInit`: Se ejecuta después de que la vista del componente y sus componentes hijos haya sido inicializada, en este ciclo de vida es perfecto para acceder a elementos del DOM.

	`ngOnChanges`: Se ejecuta cada vez que hay un cambio en el input que se recibe desde un componente padre al hijo.