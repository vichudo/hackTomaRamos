//extract

"Gestión de operaciones AVANZADAS"
ramo = 28857
id = 71055 //Matus

"Estrategia y Marketing"
ramo = 28858
id = 70954

"Optativo Profesional I" (Natural Language Processing)
ramo = 28859
id = 70989

"Optativo Profesional II" //neural networks
ramo = 28860
id = 70991

"Optativo Profesional III" //image processing
ramo = 40183
id = 70975

"Investigación de operaciones"
ramo = 26655
id = 73715 //Matus


//to take
btnInscribir(_0xb2bdx7, _0xb2bdx8, _0xb2bdx9, _0xb2bdxa, _0xb2bdxb, _0xb2bdxc, _0xb2bdxd, _0xb2bdxe, _0xb2bdxf)
btnInscribir(false,"id","ramo","sigla","NombreRamo",1, 1, false, 0) //Template

btnInscribir(false,'71055','28857','ING502','GESTIÓN DE OPERACIONES AVANZADAS',1,1,false,0)
imgDesinscribir('28857')

btnInscribir(false,'70954','28858','IND425','ESTRATEGIA Y MARKETING', 1, 1, false, 0)
btnInscribir(false,'70989','28859','TICS418','PROCESAMIENTO DE LENGUAJE NATURAL',1,1,false,0)
btnInscribir(false,'70991','28860','TICS579','REDES NEURONALES ARTIFICIALES Y DEEP LEARNING',1,1,false,0)
btnInscribir(false,'70975','40183','MDS112','PROCESAMIENTO DE IMÁGENES',1,1,false,0)
btnInscribir(false,'73715','26655','ING201','INVESTIGACIÓN DE OPERACIONES',1,1,false,0)


//en caso de tener que solicitar Minería en python:
SolicitudPorSeccion("73654","26193",4)

//////Desinscribir en Pregrado para guardar cupo
imgDesinscribir('28857')
imgDesinscribir('28859')
imgDesinscribir('28860')
imgDesinscribir('40183')

//Inscribir en QUINTO
btnInscribir(false,'70991','28860','TICS579','REDES NEURONALES ARTIFICIALES Y DEEP LEARNING',1,1,false,0)
btnInscribir(false,'71055','28857','ING502','GESTIÓN DE OPERACIONES AVANZADAS',1,1,false,0)
btnInscribir(false,'70975','40183','MDS112','PROCESAMIENTO DE IMÁGENES',1,1,false,0)

btnInscribir(false,'70954','28858','IND425','ESTRATEGIA Y MARKETING', 1, 1, false, 0)
btnInscribir(false,'70989','28859','TICS418','PROCESAMIENTO DE LENGUAJE NATURAL',1,1,false,0)


SolicitudPorSeccion('70975','40183',4)
SolicitudPorSeccion('70989','28859',4)
