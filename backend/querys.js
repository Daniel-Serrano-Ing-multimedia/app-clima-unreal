const pronostico = ValRegion => {
  let query;
  if ( ValRegion != 'Panamá Oeste' ) {
    query = `SELECT region, fecha_pronostico, temp_maxima, temp_minima, sensacion_termica, humedad_relativa, tiempo_manana, tiempo_tarde, tiempo_noche FROM hidromet.pronosticodiario WHERE provincia = '${ ValRegion }'`;
  } else {
    query = `SELECT region, fecha_pronostico, temp_maxima, temp_minima, sensacion_termica, humedad_relativa, tiempo_manana, tiempo_tarde, tiempo_noche FROM hidromet.pronosticodiario WHERE region = '${ ValRegion };'`;
  }
  connetcion.query( query, (error, result)=> {
    if ( error ) throw error ;
    console.log( result )
  })
}
