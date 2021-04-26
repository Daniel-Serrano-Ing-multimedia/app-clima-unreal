const express = require('express');
// ********  routers  *********


const app = express();

// configurar puerto
app.set( 'port', 4000 );
const port = 4000;
//configure Header HTTP
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
//....
// Router Basic
app.use( `/hidromet`, require('./routes/hidromet') );

//...

app.listen(port, () => {
  console.log("#############################");
  console.log("########## API REST #########");
  console.log("#############################");
  console.log(`http://localhost:${ port }/hidromet`);
});
