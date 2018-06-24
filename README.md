## Dependencies
- Run the composer command to install the packages
```
composer install
```
## Run and Build source
- I use the vue-cli version 3 to create the Vue project. Please install the vue-cli version 3 by the following command
```
npm install -g @vue/cli
```
- Run the dev server:
```
npm run serve
```
- Build the source:
```
npm run build
```

## .env file
- In the production mode (.env.production), I want to run Vue with the Laravel. So the **VUE_APP_BASE_URI** is set **api/v1**. If you want to run Vue in the separated server, you need to provide the fullbase url endpoint. for example:
```
http://domain-name/api/v1
```
