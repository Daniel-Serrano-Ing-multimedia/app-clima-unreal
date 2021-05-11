const express = require('express');
var fs = require('fs');
var xml2js = require('xml2js');

var sourceDir =  `${ process.cwd() }/sources/`;

let miPrimeraPromise = new Promise((resolve, reject) => {
  // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
  // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
  // En la vida real, probablemente uses algo como XHR o una API HTML5.
  setTimeout(function(){
    resolve("¡Éxito!"); // ¡Todo salió bien!
  }, 250);
});

const transformXML =  fileName => {
   return new Promise((resolve, reject) => {
    var parser = new xml2js.Parser();
    fs.readFile( `${ sourceDir}/${ fileName }.xml` , (err, data) => {
        if (err) { reject ( err ) }
        parser.parseString( data, (err, result) => {
          if (err) { reject ( err ) }
          resolve( result );
        });
    });
  });
  
}

exports.bbcNews = async ( req, res, next ) => {
  console.log( 'News ... ' );
  try {
    const news = await transformXML( 'bbc' );
    newsData =  [
      news.rss.channel[0].item[0],
      news.rss.channel[0].item[1],
      news.rss.channel[0].item[2],
      news.rss.channel[0].item[3],
      news.rss.channel[0].item[4],
      news.rss.channel[0].item[5],
      news.rss.channel[0].item[6],
      news.rss.channel[0].item[6],
      news.rss.channel[0].item[7],
    ];

    res.status( 200 ).send( {news : newsData })
  } catch (error) {
    
  }
  console.log( newsData )
}

exports.hibrido = ( req, res, next ) => {
  console.log( 'News ... ' )
  transformXML( 'hibrido' );

}