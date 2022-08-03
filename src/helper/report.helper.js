const reportMethods = {}

const fields = {
  ano: 0,
  pais: "",
  correo: "",
  distrito: "",
  erocion_local: "",
  latitud: 0,
  vegetacion_dominante: "",
  apellido: "",
  presencia_presa: "",
  temperatura: "",
  descarga_directa: "",
  presencia_vado: "",
  resultado_bmwp: 0,
  edad: 0,
  minuto: 0,
  actividad_agricola: "",
  provincia: "",
  presencia_puente: "",
  hora: 0,
  longitud: 0,
  color: "",
  mes: 0,
  tipologia_agua: "",
  olor: "", 
  dia: 0,
  subsistema_rio: "",
  condicion: "",
  resultado_hidromorfologico: 0,
  extraccion_local: "",
  vegetacion_riparia: "",
  nombre: "",
  lluvias_recientes: "",
  nombre_del_rio: "",
  corregimiento: "",
  presencia_basura: "",
  tipo_de_habitat: "",
  canalizacion: "",
  zona_de_uso: "",
}

reportMethods.clearData = (data) => {
    let x;
   for(let [prop, value] of Object.entries(data)) {
       x = value.replaceAll('\"', '');
       data[prop] = x;
       if(!isNaN(x)){
           data[prop] = Number(x);
       }
   }
   return data;
}

reportMethods.validateFields = (d) => { // { nombre: jair}
    if(Object.keys(d).length === 0) return null

    // tuve que hacer esto porque el objeto que me devuelve de la app tiene fallas ()
    let data = JSON.parse(JSON.stringify(d))

    for(let prop in fields) {
        if(!data.hasOwnProperty(prop)) {
            return null;
        }
    }

    return data;
}

module.exports = reportMethods;