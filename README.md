# Teestube-Teatime
  ## Table of Contents
   - [Demonstration](#Demonstration)
   - [Description](#Description)
   - [Installation](#Installation)
   - [Author](#Author)
   - [Installation Tip](#InstallationTip)
   - [Questions](#Questions)
  ## Demonstration
  Live Website: https://teestube-teatime.de/
  ## Description
  This is a website I created for a client that has a tea store in Mainz, Germany. It is a responsive website that works on different screen sizes and mobile devices. It was developed in React, and makes use of packages such as: react-bootstrap and antd style frameworks, google-map-react to display its location, i18 internationalization for translations, and dotenv for hiding API keys.
  ## Installation
  First clone the repo down, then navigate to it in a terminal with node/npm installed on the computer.  
  >npm install  

  This will install all dependencies, allowing the website to run.  

  >npm start  

  This will start the website locally.  

  >npm run build  
  
  This will build the website for putting into production. You must copy the contents of the build folder to your webserver.
  ## InstallationTip
  Many web hosts have trouble with react being bundled, and routing to different pages won't work. You need to make it so the server always redirects to index.html in the public folder. Create a .htaccess file in the root folder, and include 
  >Options -MultiViews  
  >RewriteEngine On  
  >RewriteCond %{REQUEST_FILENAME} !-f  
  >RewriteRule ^ index.html [QSA,L]
  ## Author
  This project was created by: [Mark Drecoll](https://markdrecoll.com)
  ## Questions
  markdrecoll@gmail.com