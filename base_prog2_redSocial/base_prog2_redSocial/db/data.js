let data = {
    usuario :  [
        {   id: 1,
            email: 'MGimenezRojas@gmail.com',
            contrasena:'ABC123',
            fotoPerfil:'',
            fechaDeNacimiento:'06-03-1999',
            Dni:'41683316',
            logueado:true
        },
        {   id: 2,
            email: 'ChristianH@gmail.com',
            contrasena:'DEF456',
            fotoPerfil:'',
            fechaDeNacimiento:'2003-06-19',
            Dni:'44898471',
            logueado:true
        },
        {   id: 3,
            email: 'LautaroCucco@gmail.com',
            contrasena:'GHI789',
            fotoPerfil:'',
            fechaDeNacimiento:'2001-07-18',
            Dni:'43626147',
            logueado:true
        },
        {   id: 4,
            email: 'Lucioarchi@gmail.com',
            contrasena:'JKM147',
            fotoPerfil:'',
            fechaDeNacimiento:'2003-05-29',
            Dni:'45678901',
            logueado:true
        },
        {   id: 5,
            email: 'Michaelphelps@gmail.com',
            contrasena:'NOP852',
            fotoPerfil:'',
            fechaDeNacimiento:'1985-30-06',
            Dni:'30222589',
            logueado:true
        },
        {id: 6,
            email: 'leonardodicaprio@gmail.com',
            contrasena:'zzz777',
            fotoPerfil:'',
            fechaDeNacimiento:'1974-11-11',
            Dni:'12345678',
            logueado:true
        },
        {   id: 7,
            email: 'angelinajolie@gmail.com',
            contrasena:'xyz456',
            fotoPerfil:'',
            fechaDeNacimiento:'1975-06-04',
            Dni:'23456789',
            logueado:true
        },
        {   id: 8,
            email: 'bradpitt@gmail.com',
            contrasena:'mno789',
            fotoPerfil:'',
            fechaDeNacimiento:'1963-12-18',
            Dni:'34567890',
            logueado:true
        },
        {   id: 9,
            email: 'jenniferaniston@gmail.com',
            contrasena:'pqr321',
            fotoPerfil:'',
            fechaDeNacimiento:'1969-02-11',
            Dni:'45678901',
            logueado:true
        },
        {   id: 10,
            email: 'tomhanks@gmail.com',
            contrasena:'def789',
            fotoPerfil:'',
            fechaDeNacimiento:'1956-07-09',
            Dni:'56789012',
            logueado:true
        },
    ],
    posteos:[
        {
            id:1,
            idUser:1,
            nombreUsuario: "MatiGimenez",
            imagen:'',
            descripcion:'Disfrutando del sol en la playa 🏖',
            comments:[
                {
                    idUsuario:2,
                    nomComent:"ChrisHelmich",
                    textoComentario:'¡Qué hermosa playa! 🌊',
                    fotoDePer:''
                },
                {
                    idUsuario:3,
                    nomComent:"cucco51",
                    textoComentario:'Disfrutando del paraíso 😍',
                    fotoDePer:''
                },
                {
                    idUsuario:4,
                    nomComent:"LucioArchi",
                    textoComentario:'¿Alguien sabe dónde está esto?',
                    fotoDePer:''
                },
                {
                    idUsuario:5,
                    nomComent:"MichaelPhelps",
                    textoComentario:'Qué envidia, me encantaría estar allí ahora.',
                    fotoDePer:''
                }
            ],
        },
        {
            id:2,
            idUser:2,
            nombreUsuario:"ChrisHelmich",
            imagen:'',
            descripcion:'Explorando la ciudad en bicicleta 🚴‍♂️',
            comments:[
                {
                    idUsuario:3,
                    nomComent:"cucco51",
                    textoComentario:'Amo esta ciudad 🏙️',
                    fotoDePer:''
                },
                {
                    idUsuario:5,
                    nomComent:"MichaelPhelps",
                    textoComentario:'¡La bicicleta es la mejor forma de explorar! 🚴‍♀️',
                    fotoDePer:''
                },
                {
                    idUsuario:6,
                    nomComent:"LeoDicaprio",
                    textoComentario:'¿Qué lugares visitaron?',
                    fotoDePer:''
                },
                {
                    idUsuario:7,
                    nomComent:"AngieJolie",
                    textoComentario:'Necesito ir allí pronto.',
                    fotoDePer:''
                }
            ]
        },
        {
            id:3,
            idUser:3,
            nombreUsuario:"cucco51",
            imagen:'',
            descripcion:'Preparando una deliciosa cena casera 🍽️',
            comments:[
                {
                    idUsuario:6,
                    textoComentario:'Esa cena se ve deliciosa 🍝',
                    fotoDePer:''
                },
                {
                    idUsuario:8,
                    textoComentario:'¿Me puedes dar la receta?',
                    fotoDePer:''
                },
                {
                    idUsuario:9,
                    textoComentario:'Buen Provecho',
                    fotoDePer:''
                },
                {
                    idUsuario:10,
                    textoComentario:'¡Quiero una invitación para cenar contigo!',
                    fotoDePer:''
                }
            ]
        },
        {
            id:4,
            idUser:4,
            nombreUsuario:"LucioArchi",
            imagen:'',
            descripcion:'Vista panorámica desde la montaña ⛰️',
            comments:[
                {
                    idUsuario:2,
                    textoComentario:'Increíble vista desde la montaña 🏞️',
                    fotoDePer:''
                },
                {
                    idUsuario:5,
                    textoComentario:'¿Fue una caminata difícil?',
                    fotoDePer:''
                },
                {
                    idUsuario:6,
                    textoComentario:'La naturaleza siempre asombra 🌿',
                    fotoDePer:''
                },
                {
                    idUsuario:7,
                    textoComentario:'¡Qué aventura!',
                    fotoDePer:''
                }
            ]
        },
        {
            id:5,
            idUser:5,
            nombreUsuario:"",
            imagen:'',
            descripcion:'Pintando un nuevo cuadro 🎨',
            comments:[
                {
                    idUsuario:1,
                    textoComentario:'¡Qué talento tienes! 🎨',
                    fotoDePer:''
                },
                {
                    idUsuario:3,
                    textoComentario:'Me encanta tu obra de arte 🖼️',
                    fotoDePer:''
                },
                {
                    idUsuario:4,
                    textoComentario:'¿Vas a vender tus pinturas?',
                    fotoDePer:''
                },
                {
                    idUsuario:5,
                    textoComentario:'Sigue pintando, eres genial',
                    fotoDePer:''
                }
            ]
        },
        {
            id:6,
            idUser:5,
            imagen:'',
            descripcion:'Concierto en vivo con amigos 🎵',
            comments:[
                {
                    idUsuario:4,
                    textoComentario:'¡El concierto estuvo increíble! 🎶',
                    fotoDePer:''
                },
                {
                    idUsuario:5,
                    textoComentario:'¿Cuál fue tu canción favorita?',
                    fotoDePer:''
                },
                {
                    idUsuario:7,
                    textoComentario:'Buena compañía, buena música 🎤',
                    fotoDePer:''
                },
                {
                    idUsuario:'9',
                    textoComentario:'Quiero unirme la próxima vez.',
                    fotoDePer:''
                }
            ]
        },
        {
            id:7,
            idUser:4,
            imagen:'',
            descripcion:'Aventura en la selva tropical 🌴',
            comments:[
                {
                    idUsuario:3,
                    textoComentario:'¿Viste animales exóticos?',
                    fotoDePer:''
                },
                {
                    idUsuario:6,
                    textoComentario:'¡Aventura en su máxima expresión! 🌿',
                    fotoDePer:''
                },
                {
                    idUsuario:8,
                    textoComentario:'¿Algún consejo para visitar la selva?',
                    fotoDePer:''
                }
            ]
        },
        {
            id:8,
            idUser:3,
            imagen:'',
            descripcion:'Noche de juegos de mesa 🎲',
            comments:[
                {
                    idUsuario:3,
                    textoComentario:'¡Noche de juegos es la mejor noche! 🎲',
                    fotoDePer:''
                },
                {
                    idUsuario:5,
                    textoComentario:'¿Qué juegos jugaron?',
                    fotoDePer:''
                },
                {
                    idUsuario:7,
                    textoComentario:'Diviértete mucho, amigos 😄',
                    fotoDePer:''
                },
                {
                    idUsuario:10,
                    textoComentario:'¡Necesito una noche de juegos!',
                    fotoDePer:''
                }
            ]
        },
        {
            id:9,
            idUser:2,
            imagen:'',
            descripcion:'Recuerdos de un viaje inolvidable ✈️',
            comments:[
                {
                    idUsuario:1,
                    textoComentario:'¡Ese viaje fue inolvidable! ✈️',
                    fotoDePer:''
                },
                {
                    idUsuario:2,
                    textoComentario:'¡Quiero volver allí! 🌍',
                    fotoDePer:''
                },
                {
                    idUsuario:4,
                    textoComentario:'Las mejores experiencias de mi vida 🌟',
                    fotoDePer:''
                },
                {
                    idUsuario:8,
                    textoComentario:'¿Algún consejo para viajar?',
                    fotoDePer:''
                }
            ]
        },
        {
            id:10,
            idUser:1,
            imagen:'',
            descripcion:'Un día perfecto para un picnic 🧺',
            comments:[
                {
                    idUsuario:3,
                    textoComentario:'¡Un picnic perfecto en un día perfecto! 🧺',
                    fotoDePer:''
                },
                {
                    idUsuario:5,
                    textoComentario:'¿Qué comida llevaron?',
                    fotoDePer:''
                },
                {
                    idUsuario:6,
                    textoComentario:'¡Disfruten el aire libre! 🌞',
                    fotoDePer:''
                },
                {
                    idUsuario:9,
                    textoComentario:'Me encantaría unirme a ustedes.',
                    fotoDePer:''
                }
            ]
            
            
        }

    ],
}
module.exports = data