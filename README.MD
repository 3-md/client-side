RW client-side v. 0.9

///INSTALATION

Before using software you have to download and install XAMPP server or alternative (search on www.google.com) on your PC. (Download from: https://www.apachefriends.org/download.html)

Remove all content from XAMPP's x:\xampp\htdocs folder.

Clone client-side folder from GitHub into x:\xampp\htdocs folder.

Run XAMPP control panel and start Apache. (If you get errors close software which uses 80, 443 ports. e.g. 'Skype')

///USAGE

Go to your browser and open 'http://localhost/client-side/index.html' (prefered browser 'Google Chrome', download from: https://www.google.com/chrome/browser/desktop/index.html)
!!! Internet connection on PC is required !!!

Register as a new user by pressing register on loaded page. (New user credentials will be stored in browser's file system until it will be cleaned, closing and reopening browser does not affect user persistance)

After registration login with your credentials.

On the left side of window enter data which will be used in calculations.

Using drop down menu 'Select' you can choose values out of prepared list.

///KNOWN BUGS

Sometimes page does not respond to buttons. Solution: refresh page using F5. Cause: might be browser compatibility issues with 'jquery 2.0'.

///UNFINISHED FUNCTIONALITY

Saving data to 'json' file type using 'jquery'. Solution: use server-side functions. Cause: security breach.

///USED PACKAGES

- google/jsapi
- google charts 1.0
- angular: js, cookies, route 1.2.20
- jquery 2.1.4
- bootstrap 3.3.5
- Jason WatMore's AngularJS User Registration and Login Example (https://github.com/cornflourblue/angular-registration-login-example)

//STRUCTURE

/client-side
			./app.js
			
			./data.json
			
			./index.html
			
			./app-content
						././app.css
						
			./app-services
						././authentication.service.js
						././flash.service.js
						././user.service.js
						././user.service.local-storage.js
						
			./css
						././bootstrap.css
						././bootstrap.css.map
						././bootstrap.min.css
						././bootstrap-theme.css
						././bootstrap-theme.css.map
						././bootstrap-theme.min.css
						././style.css
						
			./fonts
						././glyphicons-halflings-regular.eot
						././glyphicons-halflings-regular.svg
						././glyphicons-halflings-regular.ttf
						././glyphicons-halflings-regular.woff
						././glyphicons-halflings-regular.woff2
						
			./home
						././home.controller.js
						././home.view.html
						
			./js
						././angular.js
						././angular-cookies.js
						././angular-route.js
						././bootstrap.js
						././bootstrap.min.js
						././calc.js
						././calc_form_validation.js
						././chart.js
						././jquery-2.1.4.min.js
						././jsapi
						././list_population.js
						
			./login
						././login.controller.js
						././login.view.html
						
			./register
						././register.controller.js
						././register.view.html
		 

