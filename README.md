### Database details

Update Koha database details `./clients/*`

Update api local database details `./src/database.api.database.js`


- Start API - `nodemon index.js`


### Koha one - test 
- localhost:5000/test/auth
- localhost:5000/test/suggestions
- localhost:5000/test/bib-details

### Koha 2 - cl2
- localhost:5000/cl2/auth
- localhost:5000/cl2/suggestions
- localhost:5000/cl2/bib-details


To activate the API for a new Koha instance, start by including the Koha details in the `./clients/<CLIENT_DIR>/Database.js` file.
Next, import and establish a new route in `./routes/koha.routes.js`. 
This newly created route can be accessed at `localhost:5000/<newly_created_route>/bib-details`.



- All main routes available in `./src/routes/api.routes.js`



#### Error: 

```

 500-Internal-server-error Error: Can't add new command when connection is in closed state
    at PromisePoolConnection.execute (/var/www/html/vhosts/ourlib/api-live/koha-api-node.js/node_modules/mysql2/promise.js:112:22)
    at newArrivals (file:///var/www/html/vhosts/ourlib/api-live/koha-api-node.js/src/controllers/biblio/biblio.js:9:41)
    at Layer.handle [as handle_request] (/var/www/html/vhosts/ourlib/api-live/koha-api-node.js/node_modules/express/lib/router/layer.js:95:5)
    at next (/var/www/html/vhosts/ourlib/api-live/koha-api-node.js/node_modules/express/lib/router/route.js:144:13)
    at Route.dispatch (/var/www/html/vhosts/ourlib/api-live/koha-api-node.js/node_modules/express/lib/router/route.js:114:3)
    at Layer.handle [as handle_request] (/var/www/html/vhosts/ourlib/api-live/koha-api-node.js/node_modules/express/lib/router/layer.js:95:5)
    at /var/www/html/vhosts/ourlib/api-live/koha-api-node.js/node_modules/express/lib/router/index.js:284:15
    at Function.process_params (/var/www/html/vhosts/ourlib/api-live/koha-api-node.js/node_modules/express/lib/router/index.js:346:12)
    at next (/var/www/html/vhosts/ourlib/api-live/koha-api-node.js/node_modules/express/lib/router/index.js:280:10)
    at Function.handle (/var/www/html/vhosts/ourlib/api-live/koha-api-node.js/node_modules/express/lib/router/index.js:175:3) {
  code: undefined,
  errno: undefined,
  sql: undefined,
  sqlState: undefined,
  sqlMessage: undefined
}

```
