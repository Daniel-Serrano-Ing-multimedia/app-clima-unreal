
let rssParser = require('rss-parser');
var fs = require('fs');
var xml2js = require('xml2js');

var sourceDir =  `${ process.cwd() }/sources/`;

const transformXML =  fileName => {
   return new Promise((resolve, reject) => {
    let parser = new xml2js.Parser();
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

}

exports.bbcNewsOnline = async ( req, res, next ) => {
  const today = new Date() - (24*60*60*1000);
  let parser = new rssParser();
  try {
    let feed = await parser.parseURL('https://feeds.bbci.co.uk/mundo/rss.xml');

    const data = feed.items.filter(item =>  Date.parse( item.pubDate ) >  today )

    res.status(200).send({ feed: data })
  } catch (error) {
    res.status(500).send({ error })
    
  }
}

exports.hibrido = ( req, res, next ) => {
  console.log( 'News ... ' )
  transformXML( 'hibrido' );

}