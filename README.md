# Pruebas automatizadas en Ghost
Este proyecto forma parte de una actividad del curso MISW41013 - Pruebas automatizadas de software de la maestría MISO de la Universidad de los Andes. A continuación se detallan los contenidos solicitados.

- [🙋‍♂️ Integrantes del equipo](#Integrantes)
- [💻 Ejecutar pruebas con Cypress](#Ejecutar-pruebas-con-Cypress)
- [💻 Ejecutar pruebas con Kraken](#Ejecutar-pruebas-con-Kraken)

---

# Integrantes

| Nombre                 | Correo                       |
|------------------------|------------------------------|
| 👨‍💻 Miguel Fernando Padilla Espino | m.padillae@uniandes.edu.co |
| 👨‍💻 Johann Sebastian Páez Campos | js.paezc1@uniandes.edu.co |
| 👩‍💻 Jessica Daniela Páez Jiménez | jd.paezj1@uniandes.edu.co |
| 👨‍💻 Mauricio Vargas Machado | cm.vargasm1@uniandes.edu.co |

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