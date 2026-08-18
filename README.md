GESTOR DE TAREAS REACT IPG
DESCRIPCIÓN:
El presente Gestor de Tareas tiene como funcionalidad crear y administrar una lista ordenada de tareas. La aplicación permite agregar, editar, guardar y eliminar tareas de manera sencilla.

Por ejemplo, puede utilizarse para crear una lista de compras para el supermercado o registrar distintas actividades pendientes. Además, se agregó un contador que permite visualizar la cantidad de tareas registradas en la lista.

FUNCIONALIDADES:
La función principal de la aplicación es permitir al usuario crear y administrar una lista de tareas, como una lista de compras del supermercado o actividades pendientes.

La aplicación permite:

Agregar nuevas tareas.

Visualizar las tareas registradas.

Editar una tarea existente.

Guarde los cambios realizados.

Eliminar tareas que ya no sean necesarias.

Visualizar mediante un contador la cantidad de tareas que quedan registradas.

Evite que se agreguen o guarden tareas vacías.

TECNOLOGIAS UTILIZADAS:

Para el desarrollo de esta aplicación trabajé en el entorno de Visual Studio Code (VS Code). Desde su terminal instalado y utilicé Vite para crear y ejecutar el proyecto.

Las principales tecnologías utilizadas fueron:

React: para crear los componentes y manejar la interfaz de la aplicación.

JavaScript: para desarrollar la lógica y las funcionalidades.

HTML: para estructurar el contenido de la aplicación.

Tailwind CSS: para aplicar estilos y personalizar la interfaz.

Vite: para crear y ejecutar el proyecto React durante el desarrollo.

Visual Studio Code: como editor de código.

COMPONENTES PRINCIPALES:

La aplicación fue organizada en tres componentes principales:

App.jsx: es el componente principal de la aplicación. En él se administra la lista de tareas y se encuentran las funciones para agregar, modificar y eliminar tareas. Además, conecta los demás componentes.

TaskForm.jsx: corresponde al formulario utilizado para ingresar y agregar nuevas tareas a la lista. También valida que no se puedan agregar tareas vacías.

TaskList.jsx: se encarga de mostrar las tareas registradas. Desde este componente el usuario puede editar, guardar o eliminar una tarea.

FLUJO DE LA APLICACIÓN:

Al ingresar a la aplicación, el usuario encontrará un campo de texto donde puede escribir una nueva tarea. Por ejemplo, al ingresar "Comprar leche" y presionar el botón "Agregar", la tarea se incorporará automáticamente al listado.

Una vez agregada, cada tarea presenta las opciones de editar o eliminar. Si el usuario selecciona "Editar", podrá modificar el texto de la tarea y posteriormente confirmar el cambio mediante el botón "Guardar".

Si una tarea ya no es necesaria, puede eliminarse utilizando el botón "Eliminar". Además, el contador de tareas se actualiza automáticamente cada vez que se agrega o elimina un elemento de la lista.

INSTALACIÓN Y EJECUCIÓN:
Para instalar y ejecutar la aplicación se deben seguir los siguientes pasos:

Clonar o descargar el repositorio desde GitHub.

Abrir el proyecto en Visual Studio Code.

Desde la terminal, verifique que se encuentre ubicado en la carpeta principal del proyecto, donde está el archivo package.json.

Instalar las dependencias: npm install

Ejecutar la aplicación en modo desarrollo: npm run dev

Abrir en el navegador la dirección local que indica Vite en la terminal.

Importante
Antes de ejecutar los comandos se debe verificar que el terminal esté ubicado en la carpeta que contiene el archivo package.json. De lo contrario, npmno podrá encontrar la configuración del proyecto y se producirá un error.

DESICIONES DE DISEÑO :
Para el diseño de la aplicación se utilizó Tailwind CSS, buscando crear una interfaz sencilla, ordenada y fácil de utilizar.

El contenido principal fue ubicado en el centro de la pantalla para facilitar la visualización de las tareas. Se utilizaron diferentes colores en los botones para distinguir las acciones disponibles:

Azul para agregar una nueva tarea.
Amarillo para editar una tarea.
Verde para guardar los cambios.
Rojo para eliminar una tarea.
También se agregó un contador de tareas para que el usuario pueda conocer rápidamente cuántos elementos mantiene registrados en su lista.

Se utilizaron bordes, espacios y esquinas redondeadas para mantener una presentación visual limpia y organizada.


Se entrego el primer trabajo Frontend de mi carrera, con nota 6,7.-
