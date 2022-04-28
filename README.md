## Sobre la API de Disney
---

Esta API fue desarrollada para explorar el mundo de Disney. Te permitirá conocer, crear y modificar personajes y las películas en las que intervienen.

### Construido con:
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
---

## Comenzando
---
Para obtener una copia local en funcionamiento, siga estos sencillos pasos.

###


### Requisitos previos

* MySql
	* Siga estos [pasos de instalación](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).
	* Cree ana base de datos para la apliacación.
* Send Grid
	* Cree una cuenta [desde aquí](https://sendgrid.com/)
	* [Configura la autenticación](https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication#setting-up-domain-authentication)
	* Obtiene tu API KEY [aquí](https://app.sendgrid.com/settings/api_keys)
	* Crea tu propio [dynamic template](https://sendgrid.com/dynamic_templates) y obtene su ID.
  

### Instalación

1. Clona el repo
   ```sh
   git clone https://github.com/JoaquinSomoza/ChallengeNode-Alkemy.git
   cd challengeNode-Alkemy myApp
   ```
2. Instala NPM packages
   ```sh
   npm install
   ```
3. Configura en la carpeta raíz tu archivo `.env`
   ```js
   
	    DATABASE= 'YOUR MYSQL DB NAME',
	    HOST= 'YOUR MYSQL DB HOSTNAME',
	    USER= 'YOUR MYSQL DB USERNAME',
	    PASSWORD= 'YOUR MYSQL DB PASSWORD'
	    MAIL_APIKEY= 'The API key you got from Send Grid',
		MAIL_FROM= 'The mail from where you want to send your welcome email',
		MAIL_TEMPLATE= 'The template you created on Dynamic Templates'
		
   ```  
4. Done! Now run the server.
   ```sh
   nodemon
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


## Usage

Para obtener una explicación detallada sobre cómo usar la API, consulte la _[Documentation](https://documenter.getpostman.com/view/18853937/UyrEiahg)_

<p align="right">(<a href="#top">back to top</a>)</p>

