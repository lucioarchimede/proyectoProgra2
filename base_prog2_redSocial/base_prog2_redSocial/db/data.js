let data = {
    usuario :  [
        {   id: 1,
            email: 'MGimenezRojas@gmail.com',
            contrasena:'ABC123',
            fotoPerfil:'https://i1.wp.com/www.masrojo.com.ar/home/wp-content/uploads/gimenez.jpeg?fit=1200%2C800&ssl=1',
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
            fotoPerfil:'https://cdn2.excelsior.com.mx/media/styles/grande/public/pictures/2023/07/23/2981863.jpg',
            fechaDeNacimiento:'1985-30-06',
            Dni:'30222589',
            logueado:true
        },
        {id: 6,
            email: 'leonardodicaprio@gmail.com',
            contrasena:'zzz777',
            fotoPerfil:'https://s3.abcstatics.com/abc/www/multimedia/gente/2023/08/24/leonardo-novia-RMDbUO9KXLrwmsyz368si7J-366x256@abc.jpg',
            fechaDeNacimiento:'1974-11-11',
            Dni:'12345678',
            logueado:true
        },
        {   id: 7,
            email: 'angelinajolie@gmail.com',
            contrasena:'xyz456',
            fotoPerfil:'https://www.themoviedb.org/t/p/original/nXA9vMvskmIDB5NqHCkTQPmemep.jpg',
            fechaDeNacimiento:'1975-06-04',
            Dni:'23456789',
            logueado:true
        },
        {   id: 8,
            email: 'bradpitt@gmail.com',
            contrasena:'mno789',
            fotoPerfil:'https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x',
            fechaDeNacimiento:'1963-12-18',
            Dni:'34567890',
            logueado:true
        },
        {   id: 9,
            email: 'jenniferaniston@gmail.com',
            contrasena:'pqr321',
            fotoPerfil:'https://static.wikia.nocookie.net/doblaje/images/e/e6/Jennifer-Aniston_2019.jpg/revision/latest?cb=20190921233642&path-prefix=es',
            fechaDeNacimiento:'1969-02-11',
            Dni:'45678901',
            logueado:true
        },
        {   id: 10,
            email: 'tomhanks@gmail.com',
            contrasena:'def789',
            fotoPerfil:'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_FMjpg_UX1000_.jpg',
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
            imagen:'https://media.gq.com.mx/photos/61b895d865584ef21b20d736/4:3/w_2664,h_1998,c_limit/Hombre-en-la-playa.jpg',
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
            imagen:'https://apiimg.iberostar.com/uploads/image/38175/crops/16:9/720/image.jpeg',
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
            imagen:'https://media.traveler.es/photos/63563ff053805dbdd51dd12d/16:9/w_2560%2Cc_limit/RR0J7X.jpg',
            descripcion:'Preparando una deliciosa cena casera 🍽️',
            comments:[
                {
                    idUsuario:6,
                    nomComent:"LeoDicaprio",
                    textoComentario:'Esa cena se ve deliciosa 🍝',
                    fotoDePer:''
                },
                {
                    idUsuario:8,
                    nomComent:"Brad_Pitt",
                    textoComentario:'¿Me puedes dar la receta?',
                    fotoDePer:''
                },
                {
                    idUsuario:9,
                    nomComent:"Jennifer.Aniston",
                    textoComentario:'Buen Provecho',
                    fotoDePer:''
                },
                {
                    idUsuario:10,
                    nomComent:"T.hanks",
                    textoComentario:'¡Quiero una invitación para cenar contigo!',
                    fotoDePer:''
                }
            ]
        },
        {
            id:4,
            idUser:4,
            nombreUsuario:"LucioArchi",
            imagen:'https://p1.pxfuel.com/preview/113/666/477/snow-panoramic-mountain-panorama-landscape-nature.jpg',
            descripcion:'Vista panorámica desde la montaña ⛰️',
            comments:[
                {
                    idUsuario:2,
                    nomComent:"ChrisHelmich",
                    textoComentario:'Increíble vista desde la montaña 🏞️',
                    fotoDePer:''
                },
                {
                    idUsuario:5,
                    nomComent:"MichaelPhelps",
                    textoComentario:'¿Fue una caminata difícil?',
                    fotoDePer:''
                },
                {
                    idUsuario:6,
                    nomComent:"LeoDicaprio",
                    textoComentario:'La naturaleza siempre asombra 🌿',
                    fotoDePer:''
                },
                {
                    idUsuario:7,
                    nomComent:"AngieJolie",
                    textoComentario:'¡Qué aventura!',
                    fotoDePer:''
                }
            ]
        },
        {
            id:5,
            idUser:5,
            nombreUsuario:"MichaelPhelps",
            imagen:'https://www.salirconarte.com/wp-content/uploads/2018/10/2266_4da4b386_opt.jpg',
            descripcion:'Pintando un nuevo cuadro 🎨',
            comments:[
                {
                    idUsuario:1,
                    nomComent:"",
                    textoComentario:'¡Qué talento tienes! 🎨',
                    fotoDePer:'https://i1.wp.com/www.masrojo.com.ar/home/wp-content/uploads/gimenez.jpeg?fit=1200%2C800&ssl=1'
                },
                {
                    idUsuario:3,
                    nomComent:"cucco51",
                    textoComentario:'Me encanta tu obra de arte 🖼️',
                    fotoDePer:''
                },
                {
                    idUsuario:4,
                    nomComent:"LucioArchi",
                    textoComentario:'¿Vas a vender tus pinturas?',
                    fotoDePer:''
                },
                {
                    idUsuario:10,
                    nomComent:"T.hanks",
                    textoComentario:'Sigue pintando, eres genial',
                    fotoDePer:''
                }
            ]
        },
        {
            id:6,
            idUser:5,
            nombreUsuario:"MichaelPhelps",
            imagen:'https://www.billboard.com/wp-content/uploads/2022/07/20-tomorrowland-2022-billboard-1548-1.jpg',
            descripcion:'Concierto en vivo con amigos 🎵',
            comments:[
                {
                    idUsuario:4,
                    nomComent:"LucioArchi",
                    textoComentario:'¡El concierto estuvo increíble! 🎶',
                    fotoDePer:''
                },
                {
                    idUsuario:3,
                    nomComent:"cucco51",
                    textoComentario:'¿Cuál fue tu canción favorita?',
                    fotoDePer:''
                },
                {
                    idUsuario:7,
                    nomComent:"AngieJolie",
                    textoComentario:'Buena compañía, buena música 🎤',
                    fotoDePer:''
                },
                {
                    idUsuario:9,
                    nomComent:"Jennifer.Aniston",
                    textoComentario:'Quiero unirme la próxima vez.',
                    fotoDePer:''
                }
            ]
        },
        {
            id:7,
            idUser:4,
            nombreUsuario:"LucioArchi",
            imagen:'https://e00-elmundo.uecdn.es/america/imagenes/2010/08/09/brasil/1281372851_1.jpg',
            descripcion:'Aventura en la selva tropical 🌴',
            comments:[
                {
                    idUsuario:3,
                    nomComent:"cucco51",
                    textoComentario:'¿Viste animales exóticos?',
                    fotoDePer:''
                },
                {
                    idUsuario:6,
                    nomComent:"LeoDicaprio",
                    textoComentario:'¡Aventura en su máxima expresión! 🌿',
                    fotoDePer:''
                },
                {
                    idUsuario:8,
                    nomComent:"Brad_Pitt",
                    textoComentario:'¿Algún consejo para visitar la selva?',
                    fotoDePer:''
                }
            ]
        },
        {
            id:8,
            idUser:3,
            nombreUsuario:"cucco51",
            imagen:'https://larepublica.cronosmedia.glr.pe/migration/images/NGSL7PJDTBAVDA3EZQ2PF4JEDE.jpg',
            descripcion:'Noche de juegos de mesa 🎲',
            comments:[
                {
                    idUsuario:1,
                    nomComent:"MatiGimenez",
                    textoComentario:'¡Noche de juegos es la mejor noche! 🎲',
                    fotoDePer:''
                },
                {
                    idUsuario:5,
                    nomComent:"MichaelPhelps",
                    textoComentario:'¿Qué juegos jugaron?',
                    fotoDePer:''
                },
                {
                    idUsuario:7,
                    nomComent:"AngieJolie",
                    textoComentario:'Diviértete mucho, amigos 😄',
                    fotoDePer:''
                },
                {
                    idUsuario:10,
                    nomComent:"T.hanks",
                    textoComentario:'¡Necesito una noche de juegos!',
                    fotoDePer:''
                }
            ]
        },
        {
            id:9,
            idUser:2,
            nombreUsuario:"ChrisHelmich",
            imagen:'https://fh-sites.imgix.net/sites/2177/2016/11/17161700/punta-cana-party-boat-13.jpg?auto=compress%2Cformat&w=700&h=700&fit=max',
            descripcion:'Recuerdos de un viaje inolvidable ✈️',
            comments:[
                {
                    idUsuario:1,
                    nomComent:"MatiGimenez",
                    textoComentario:'¡Ese viaje fue inolvidable! ✈️',
                    fotoDePer:''
                },
                {
                    idUsuario:3,
                    nomComent:"cucco51",
                    textoComentario:'¡Quiero volver allí! 🌍',
                    fotoDePer:''
                },
                {
                    idUsuario:4,
                    nomComent:"LucioArchi",
                    textoComentario:'Las mejores experiencias de mi vida 🌟',
                    fotoDePer:''
                },
                {
                    idUsuario:8,
                    nomComent:"Brad_Pitt",
                    textoComentario:'¿Algún consejo para viajar?',
                    fotoDePer:''
                }
            ]
        },
        {
            id:10,
            idUser:1,
            nombreUsuario: "MatiGimenez",
            imagen:'https://www.centralpark.com/downloads/9225/download/picnic-blanket.png?cb=3c219aa5485b1efa02383309717d78df',
            descripcion:'Un día perfecto para un picnic 🧺',
            comments:[
                {
                    idUsuario:3,
                    nomComent:"cucco51",
                    textoComentario:'¡Un picnic perfecto en un día perfecto! 🧺',
                    fotoDePer:''
                },
                {
                    idUsuario:5,
                    nomComent:"MichaelPhelps",
                    textoComentario:'¿Qué comida llevaron?',
                    fotoDePer:''
                },
                {
                    idUsuario:6,
                    nomComent:"LeoDicaprio",
                    textoComentario:'¡Disfruten el aire libre! 🌞',
                    fotoDePer:''
                },
                {
                    idUsuario:9,
                    nomComent:"Jennifer.Aniston",
                    textoComentario:'Me encantaría unirme a ustedes.',
                    fotoDePer:''
                }
            ]
            
            
        }

    ],
}
module.exports = data