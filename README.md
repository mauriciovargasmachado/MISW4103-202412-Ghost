# Pruebas automatizadas en Ghost
Este proyecto forma parte de una actividad del curso MISW41013 - Pruebas automatizadas de software de la maestría MISO de la Universidad de los Andes. A continuación se detallan los contenidos solicitados.

- [🙋‍♂️ Integrantes del equipo](#Integrantes)
- [🌍 Ghost de acceso público](#Ghost-de-acceso-público)
- [💻 Ejecutar pruebas con Cypress](#Ejecutar-pruebas-con-Cypress)
- [💻 Ejecutar pruebas con Kraken](#Ejecutar-pruebas-con-Kraken)
- [💻 Escenarios para pruebas de regresión](#Escenarios-para-pruebas-de-regresión)
- [💻 Ejecutar pruebas VTR Resemble](#Ejecutar-pruebas-VTR-Resemble)
- [💻 Ejecutar pruebas VTR Backstop](#Ejecutar-pruebas-VTR-Backstop)
- [💻 Ejecutar pruebas con Generación de Datos‎ ‎ ](#Ejecutar-pruebas-con-Generación-de-Datos)     ![](https://raw.githubusercontent.com/wiki/mpadillae/MISW4103-202412-Ghost/guide/update_badge.png)


---

# Integrantes

| Nombre                 | Correo                       |
|------------------------|------------------------------|
| 👨‍💻 Miguel Fernando Padilla Espino | m.padillae@uniandes.edu.co |
| 👨‍💻 Johann Sebastian Páez Campos | js.paezc1@uniandes.edu.co |
| 👩‍💻 Jessica Daniela Páez Jiménez | jd.paezj1@uniandes.edu.co |
| 👨‍💻 Mauricio Vargas Machado | cm.vargasm1@uniandes.edu.co |

---

# Ghost de acceso público

Para nuestras pruebas, hemos utilizado dos versiones de instancias públicas de Ghost desplegadas por nuestro equipo, las cuales están disponibles en los siguientes enlaces:
* Ghost [`5.82.6`](https://lookup-public-999490427.us-east-1.elb.amazonaws.com/ghost/#/signin).
* Ghost [`3.42.0`](https://lookup-public-999490427.us-east-1.elb.amazonaws.com/old/ghost/#/signin).

Es importante señalar que utilizamos la versión 5.82.6 para realizar las pruebas automatizadas de los cinco funcionalidades implementados tanto en Cypress como en Kraken. Asimismo, la versión 3.42.0 se empleó específicamente para las pruebas de regresión.

Las credenciales de acceso se encuentran en las variables de los tests (para Cypress en `cypress\cypress.env.json` y para Kraken `kraken\properties.json`).

---

# Ejecutar pruebas con Cypress
Estas instrucciones le servirán para poder obtener una copia funcional del proyecto en su máquina local y ejecutar las pruebas correspondientes a __Cypress__.

## 📝 Requisitos

* Node (Para esta guía se utilizó la versión __18.17.1__) ✅
* npm (Para esta guía se utilizó la versión __9.6.7__) ✅
* Un navegador web (Para esta guía se utilizó Chrome en su versión __124.0.6367.119__) ✅

❗❗ Esta guía fue realizada usando el sistema operativo `Windows 10 Pro`.

## 🛠️ Pasos a ejecutar

1. Ubicarse en el directorio donde se encuentra el proyecto, ingresar a la carpeta `cypress`, abrir una terminal en esta carpeta e instalar las dependencias del proyecto con el siguiente comando:

    ```
    npm install
    ```
    ![](https://github.com/mpadillae/MISW4103-202412-Ghost/wiki/guide/7.png)

2. Ubicarse en un directorio vacío, abrir una terminal e instalar Cypress utilizando los siguientes comandos:

    ``` 
    npm init
    npm install -g cypress
    ```
    La versión de Cypress package y del Cypress binary instaladas al momento de hacer la guía fue la __13.7.2__.

3. Abrir una terminal y ejecutar Cypress.

    ```
    cypress open
    ```
    ![](https://github.com/mpadillae/MISW4103-202412-Ghost/wiki/guide/1.png)

    Esto levantará la GUI de Cypress donde debemos agregar la carpeta donde se encuentran los tests.

    ![](https://github.com/mpadillae/MISW4103-202412-Ghost/wiki/guide/2.png)

4. En la siguiente pantalla, debe seleccionar la opción de __E2E Testing__, la cual debe estar marcada como _Configured_.

    ![](https://github.com/mpadillae/MISW4103-202412-Ghost/wiki/guide/3.png)

5. A continuación, debe elegir el navegador con el que desea ejecutar las pruebas. Para este ejemplo se ha seleccionado Chrome. 

    ![](https://github.com/mpadillae/MISW4103-202412-Ghost/wiki/guide/4.png)

6. Finalmente se abrirá una ventana del navegador seleccionado donde se listarán los archivos de tests que contiene el proyecto. En este caso, se cuentan con 20 archivos, uno por cada escenario que nos tocó construir, cualquiera de los cuales podremos ejecutar con doble clic.

    ![](https://github.com/mpadillae/MISW4103-202412-Ghost/wiki/guide/5.png)

---

# Ejecutar pruebas con Kraken
Estas instrucciones le servirán para poder obtener una copia funcional del proyecto en su máquina local y ejecutar las pruebas correspondientes a __Kraken__.

## 📝 Requisitos

* Node (Para esta guía se utilizó la versión __18.17.1__) ✅
* npm (Para esta guía se utilizó la versión __9.6.7__) ✅
* Un navegador web (Para esta guía se utilizó Chrome en su versión __124.0.6367.119__) ✅

❗❗ Esta guía fue realizada usando el sistema operativo `Windows 10 Pro`.

## 🛠️ Pasos a ejecutar

1. Abre una terminal y desinstala las versiones globales de las siguientes herramientas que puedan estar instaladas y causar conflicto con las dependencias de Kraken. Correr cada uno de estos comandos:
    ```
    npm uninstall -g android-platform-tools
    npm uninstall -g @cucumber/cucumber
    npm uninstall -g kraken-node
    npm uninstall -g appium
    ```

2. Ubicarse en el directorio donde se encuentra el proyecto, ingresar a la carpeta `kraken`, abrir una terminal en esta carpeta e instalar las dependencias del proyecto con el siguiente comando:

    ```
    npm install
    ```

    ![](https://github.com/mpadillae/MISW4103-202412-Ghost/wiki/guide/6.png)

    Esto instalará todas las dependencias necesarias para ejecutar pruebas con Kraken. Entre las dependencias descargadas están:
    - kraken-node
    - android-platform-tools
    - appium

3. Verificar las credenciales y variables en el archivo `kraken\properties.json`. Las variables a cuyo valor debe prestar especial atención antes de ejecutar las pruebas son:

    - GHOST_USERNAME
    - GHOST_PASSWORD

4. Seleccionar cual _feature_ quiere probar. Kraken tiene una limitación que impide ejecutar los tests de más de un archivo .feature a la vez, por lo que para poder probar un feature, debe asegurarse que sea el unico archivo con extensión .feature dentro de la carpeta `kraken\features`. Puede cambiar temporalmente la extensión de los features que no desea probar o también puede moverlos a otra carpeta antes de la prueba.

5. Utilizando la misma terminal de pasos anteriores (si cerró la terminal debe volver abrir una nueva como se explicó en el paso 2), ejecutar los tests del feature seleccionado en el paso anterior con el comando:
    ```
    npx kraken-node run
    ```

---

# Escenarios para pruebas de regresión

Se seleccionaron 10 escenarios para las pruebas de regresión, los cuales fueron previamente ejecutados en Kraken utilizando la versión 3.42.0 de Ghost. Estas pruebas se llevaron a cabo con imágenes de ambas versiones (3.42.0 y 5.82.6).

| 🚀 Funcionalidad | ⚙ Escenarios |
|---------------|---|
| Crear draft |  Crear un borrador con un titulo y una descripcion. |
| Crear draft |  Editar un borrador creado. |
| Agregar miembros | Crear un miembro con todos los campos diligenciados correctamente. |
| Agregar miembros |  Crear un miembro con una dirección de correo electrónico ya existente. |
| Agregar miembros |  Crear un miembro con el campo "Note" mayor a 500 caracteres. |
| Agregar miembros |  Crear un miembro con una dirección de correo electrónico inválida. |
| Creación de Páginas |  Crear una página con título y cuerpos válidos y publicarla directamente. |
| Creación de Páginas |  Crear una página con título y descripción válidos y programar su publicación. |
| Creación de Posts |  Publicar un post ingresando solo el título. |
| Creación de Posts |  Publicar un post ingresando el título y una descripción. |

---

# Ejecutar pruebas VTR Resemble

Estas instrucciones le servirán para poder obtener una copia funcional del proyecto en su máquina local y ejecutar las pruebas correspondientes a __Resemble__.

## 📝 Requisitos

* Node (Para esta guía se utilizó la versión __18.17.1__) ✅
* npm (Para esta guía se utilizó la versión __9.6.7__) ✅
* Haber realizado pruebas automatizadas en kraken con ambas versiones de ghost. ✅
* Es esencial asegurarse de que la cantidad de imágenes de prueba para cada escenario sea coherente en todas las versiones de Ghost. Por ejemplo, al probar el escenario de publicar un nuevo post en Kraken, es necesario verificar que se hayan realizado pruebas con estas versiones y que la cantidad de imágenes que evidencian estos casos sea consistente en ambas versiones. ✅

❗❗ Esta guía fue realizada usando el sistema operativo `Windows 11 Pro`.

## 🛠️ Pasos a ejecutar

1. Ubicarse en el directorio donde se encuentra el proyecto, ingresar a la carpeta `resemble`, abrir una terminal en esta carpeta e instalar las dependencias del proyecto con el siguiente comando:

    ```
    npm install
    ```
    ![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/158000388/7ae32dea-3ebd-4196-ac40-995b3c967fc9)

2. Ejecutar en la terminal el siguiente comando

    ```
    node index.js
    ```
    
    ![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/158000388/1a31447e-fb8e-41a3-b4de-1ea69bd58fec)

3. Escoger el escenario que se desea realizar la prueba.

    ```
    1
    ```

    ![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/158000388/c0fca8f4-74db-4119-aec2-45e8526b5ca7)

4. Una vez ejecutada las pruebas verficar en la carpeta results.

   ![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/158000388/719011c2-dd51-4f90-8c33-8a4d13267898)

   ![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/158000388/8e8708f9-64d6-4ce4-8785-f5b66767cd0a)

5. Consultar los resultados en algun navegador o editor.

   ![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/158000388/a7075531-24e1-4f5e-84a3-3644c18f30c9)


---

# Ejecutar pruebas VTR Backstop

Estas instrucciones le servirán para poder obtener una copia funcional del proyecto en su máquina local y ejecutar las pruebas correspondientes a __Backstop__.

## 📝 Requisitos

* Node (Para esta guía se utilizó la versión __18.17.1__) ✅
* npm (Para esta guía se utilizó la versión __9.6.7__) ✅
* Haber realizado pruebas automatizadas en kraken con ambas versiones de ghost. ✅
* Es esencial asegurarse de que la cantidad de imágenes de prueba para cada escenario sea coherente en todas las versiones de Ghost. Por ejemplo, al probar el escenario de publicar un nuevo post en Kraken, es necesario verificar que se hayan realizado pruebas con estas versiones y que la cantidad de imágenes que evidencian estos casos sea consistente en ambas versiones. ✅

❗❗ Esta guía fue realizada usando el sistema operativo `Windows 11 Pro`.

## 🛠️ Pasos a ejecutar

1. Ubicarse en el directorio donde se encuentra el proyecto, ingresar a la carpeta `backstop`, abrir una terminal en esta carpeta e instalar las dependencias del proyecto con el siguiente comando:

    ```
    npm install -g backstopjs
    ```

   ![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/158000388/faf29217-48eb-422c-8e80-2eeaf39fc32d)



2. Ejecutar las pruebas 

    ```
    backstop test
    ```

   ![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/158000388/96f47ebd-d4f7-4f17-abf3-bf3c73724c69)


3. Consultar resultados en el navegador

   ![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/158000388/6cbf9b3d-6995-4033-a58b-e9d41fe4543a)

   
---


# Ejecutar pruebas con Generación de Datos

Para la ejecución de pruebas aleatorias, el equipo de trabajo se enfocó en desarrollar tres estrategias diferentes de obtención de datos y aplico cada una de las mismas en 40 pruebas diferentes cada vez, para un total de 120 escenarios de pruebas los cuales fueron probados y desarrollados en la herramienta Cypress. Estas pruebas se desarrollaron con datos a priori, o generados manualmente por el desarrollador con oráculo definido, pruebas pseudoaleatorias para las cuales se usó la herramienta Mockaroo para la generación de datos con oráculo definido de manera aleatoria, y finalmente el uso de faker.js para la generación de datos aleatorios dentro de las pruebas.

## 📝 Generación de datos a priori

Para la generación de datos a priori el equipo definió primero los datos de uso genérico como usuario y contraseña de usuario sobre la aplicación Ghost e incluyo los mismos en el archivo cypress.env.json dejando declarados también todos los datos usados en las pruebas desarrolladas durante las semanas previas.


![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/22574945/bb4bf29f-dcaa-4219-b07f-0e6d536d101f)


Posteriormente, dentro de la carpeta fixtures, se incluyeron los datos de oráculo definido de cada funcionalidad de la aplicación: 


![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/22574945/5277aeaa-98c2-407e-a5d5-809367d391cc)


Una vez incluidos los datos a priori en formato JSON se deben vincular los datos incluidos dentro del formato JSON de fixtures en cada prueba a fin de ser llamados durante su ejecución:


![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/22574945/ff6bbb62-cdf4-458a-b810-069bb29a8954)


De esta manera, cuando se requieran llamar los datos generados a priori, se podrán llamar los datos directamente en el momento de convocar los datos en la prueba:


![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/22574945/6982fa73-76bc-4dc9-b8f6-785ea9224e76)


El mismo ejemplo puede seguirse para el desarrollo de los 40 escenarios de prueba a priori, y el mismmo permitio la ejecucion y verificacion de la prueba en la herramienta Cypress.


## 📝 Generación de datos pseudo aleatorios

Para la obtención de datos de la estrategia pseudoaleatoria se opto por la herramienta Mockaroo ![](https://mockaroo.com) .

Una vez dentro de la web de Mockaroo se encuentra directamente la herramienta de generación de datos pseudo-aleatorios; sin embargo, es importante crear cuenta e ingresar a la plataforma una ve registrado, para lo cual se debe:


![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/22574945/15623d88-6a61-4c94-8355-f9a8d6bcde7f)

Y generar un usuario y contraseña o usar un autenticador aprobado: 


![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/22574945/3da8ac4e-99ae-4262-9b44-738ddab9501f)

Una vez dentro de la cuenta podemos generar una gran variedad de datos pseudo-aleatorios, llenando primero el nombre del campo, seleccionando el tipo de dato que más nos convenga para la ejecución de la prueba, y determinando el tamaño, cantidad, e incluso cantidad de espacios en blanco a dejar al momento de generar los datos:


![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/22574945/d26015d1-1c4b-4530-b55f-b85ef8841b54)


Una vez estamos seguros de la generación de los datos, podemos seleccionar el tipo de formatos y la cantidad de líneas a generar, así como el formato de los mismos, y damos click en generar datos: 

![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/22574945/8f98e7a6-9f14-487f-b30c-538c5ce6d339)

Una vez generados los datos, podemos hacer un preview del formato JSON generado y verificar la información que se genera:


![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/22574945/4295736e-d249-4865-9079-305b31881eb8)

Así mismo, si hacemos Scroll hacia la parte inferior notaremos que también se ha generado un URL que contiene nuestros datos y que podremos vincular en la ejecución de nuestras pruebas:


![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/22574945/65e65e35-ea71-4487-b6c4-d62df71b30f5)

Estas URLs generadas por cada funcionalidad a probar de la aplicación las consignamos como datos pseudo-aleatorios en el archivo cypress.env.json


![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/22574945/46ec8b41-486b-40b9-b34d-2d415243b923)

Y podremos convocar este datapool de la misma manera que lo hicimos al generar las pruebas a priori. De esta manera podremos llamar directamente los datos generados por Mockaroo cada vez que lo necesitemos dentro de cada prueba:


![image](https://github.com/mpadillae/MISW4103-202412-Ghost/assets/22574945/beb3c7eb-72c6-4321-ac40-8672914bcc90)

Una ventaja de Mockaroo es que permite que editemos nuestra información dinámicamente, lo que permite que la cambiemos mientras ejecutamos la prueba, ya sea para ajustar la misma, o para generar mejores datos con la misma.




## 📝 Generación de datos aleatorios

Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
