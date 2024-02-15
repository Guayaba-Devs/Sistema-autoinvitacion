# Sistema de autoinvitaciones - Github API :incoming_envelope:

<img align="right" width="90" height="90" src="https://avatars.githubusercontent.com/u/112519434?s=200&v=4">

## Sobre el proyecto :open_book:

Este proyecto es un sistema de autoinvitación que permite a los usuarios ingresar el correo electrónico de su cuenta de GitHub. El sistema utiliza la API de GitHub para enviar una invitación para unirse a la organización usando la dirección de correo electrónico proporcionada.

El flujo de trabajo del sistema es el siguiente:
1. Un usuario ingresa su correo electrónico de GitHub en el sistema.
2. El sistema utiliza la API de GitHub para verificar si la dirección de correo electrónico está asociada con una cuenta de GitHub.
3. Si se encuentra una cuenta asociada, el sistema envía automáticamente una invitación a la organización de GitHub correspondiente a través de un correo electrónico.


## Requisitos :page_facing_up:		

- [Node.js](https://nodejs.org/) versión 18 o superior.
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/).

## Configuración del Entorno :hammer_and_wrench:	

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Guayaba-Devs/Sistema-autoinvitacion.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd Sistema-autoinvitacion
   ```

3. Instala las dependencias del proyecto ejecutando el siguiente comando:

   ```bash
   npm install
   ```
   o si prefieres Yarn:

   ```bash
   yarn
   ```

Asegúrate de tener un archivo `.env` para las configuraciones del proyecto, puedes hacerlo eliminando la palabra example del archivo `example.env` que se muestra de ejemplo.

## Ejecutar el Proyecto :rocket:
Para ejecutar el proyecto, puedes utilizar Vite, que proporciona un servidor de desarrollo con recarga en caliente incorporada para facilitar el desarrollo.

Inicia el servidor de desarrollo con Vite:

```bash
npm run dev
```

o con Yarn:

```bash
yarn dev
```

Esto iniciará un servidor de desarrollo y abrirá automáticamente tu navegador predeterminado en la URL local donde se está ejecutando la aplicación.

¡Listo! Ahora tu aplicación Sistema-autoinvitacion debería estar en funcionamiento localmente.

## Contribuir :rocket:
Si deseas contribuir al proyecto, sigue las instrucciones en el siguiente repositorio: [CONTRIBUTING](https://github.com/Guayaba-Devs/CONTRIBUTING.git)


###### Made with 💖 by Guayaba Devs
