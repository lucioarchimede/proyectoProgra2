CREATE SCHEMA IF NOT EXISTS dbtrabajo;
USE dbtrabajo;
/*Tabla de usuarios */
CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
    usuario VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE, 
    password VARCHAR(255) NOT NULL,
    fotoPerfil VARCHAR(255),
    fechaNacimiento DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
);

/* Tabla de posteos */
CREATE TABLE posteos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
    idUsuario INT UNSIGNED, 
    nombreImagen VARCHAR(255) NOT NULL,
    textoDescriptivo TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL, 
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

/* Tabla de comentarios */
CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idPost INT UNSIGNED,
    idUsuario INT UNSIGNED, 
    textoComentario TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL, 
	FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
    FOREIGN KEY (idPost) REFERENCES posteos(id)
	
);

INSERT INTO usuarios ( usuario, email, password, fotoPerfil, fechaNacimiento)
VALUES
  ( 'MatiGimenez', 'matigimenez@gmail.com', 'ABC123', 'https://i1.wp.com/www.masrojo.com.ar/home/wp-content/uploads/gimenez.jpeg?fit=1200%2C800&ssl=1', '1999-03-06'),
  ( 'ChrisHelmich', 'chrishelmich@gmail.com', 'DEF456', 'https://http2.mlstatic.com/D_NQ_NP_761988-MLA44370138189_122020-O.webp', '2003-06-19'),
  ( 'LautaroCucco', 'lautarocucco@gmail.com', 'GHI789', 'https://www.directvsports.com/__export/1682301023307/sites/dsports/img/2023/04/23/20230423_105022929_24n0dozqfpax1bkswcik05pk2.jpg_1635092770.jpg', '2001-07-18'),
  ( 'LucioArchi', 'lucioarchi@gmail.com', 'JKM147', 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt21cce3b6f1c9a8b8/6546b9ad348247040ad218de/01a.png?auto=webp&format=pjpg&width=3840&quality=60', '2003-05-29'),
  ( 'MichaelPhelps', 'michaelphelps@gmail.com', 'NOP852', 'https://cdn2.excelsior.com.mx/media/styles/grande/public/pictures/2023/07/23/2981863.jpg', '1985-06-30'),
  ( 'LeoDicaprio', 'leonardodicaprio@gmail.com', 'zzz777', 'https://s3.abcstatics.com/abc/www/multimedia/gente/2023/08/24/leonardo-novia-RMDbUO9KXLrwmsyz368si7J-366x256@abc.jpg', '1974-11-11'),
  ( 'AngieJolie', 'angelinajolie@gmail.com', 'xyz456', 'https://www.themoviedb.org/t/p/original/nXA9vMvskmIDB5NqHCkTQPmemep.jpg', '1975-06-04'),
  ( 'BradPitt', 'bradpitt@gmail.com', 'mno789', 'https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x', '1963-12-18'),
  ( 'JenniferAniston', 'jenniferaniston@gmail.com', 'pqr321', 'https://static.wikia.nocookie.net/doblaje/images/e/e6/Jennifer-Aniston_2019.jpg/revision/latest?cb=20190921233642&path-prefix=es', '1969-02-11'),
  ( 'TomHanks', 'tomhanks@gmail.com', 'def789', 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_FMjpg_UX1000_.jpg', '1956-07-09');
  
  
INSERT INTO posteos (idUsuario, nombreImagen, textoDescriptivo)
VALUES
  (1, 'https://media.gq.com.mx/photos/61b895d865584ef21b20d736/4:3/w_2664,h_1998,c_limit/Hombre-en-la-playa.jpg', 'Disfrutando del sol en la playa 🏖'),
  (2, 'https://apiimg.iberostar.com/uploads/image/38175/crops/16:9/720/image.jpeg', 'Explorando la ciudad en bicicleta 🚴‍♂️'),
  (3, 'https://media.traveler.es/photos/63563ff053805dbdd51dd12d/16:9/w_2560%2Cc_limit/RR0J7X.jpg', 'Preparando una deliciosa cena casera 🍽️'),
  (4, 'https://p1.pxfuel.com/preview/113/666/477/snow-panoramic-mountain-panorama-landscape-nature.jpg', 'Vista panorámica desde la montaña ⛰️'),
  (5, 'https://www.salirconarte.com/wp-content/uploads/2018/10/2266_4da4b386_opt.jpg', 'Pintando un nuevo cuadro 🎨'),
  (5, 'https://www.billboard.com/wp-content/uploads/2022/07/20-tomorrowland-2022-billboard-1548-1.jpg', 'Concierto en vivo con amigos 🎵'),
  (4, 'https://e00-elmundo.uecdn.es/america/imagenes/2010/08/09/brasil/1281372851_1.jpg', 'Aventura en la selva tropical 🌴'),
  (3, 'https://larepublica.cronosmedia.glr.pe/migration/images/NGSL7PJDTBAVDA3EZQ2PF4JEDE.jpg', 'Noche de juegos de mesa 🎲'),
  (2, 'https://fh-sites.imgix.net/sites/2177/2016/11/17161700/punta-cana-party-boat-13.jpg?auto=compress%2Cformat&w=700&h=700&fit=max', 'Recuerdos de un viaje inolvidable ✈️'),
  (1, 'https://www.centralpark.com/downloads/9225/download/picnic-blanket.png?cb=3c219aa5485b1efa02383309717d78df', 'Un día perfecto para un picnic 🧺');
  
INSERT INTO comentarios (idPost, idUsuario, textoComentario)
VALUES
  (1, 4, '¡Qué hermosa playa! 🏖'),
  (1, 5, 'Disfrutando del paraíso 😍'),
  (2, 6, 'Amo esta ciudad 🏙️'),
  (2, 7, '¡La bicicleta es la mejor forma de explorar! 🚴‍♀️'),
   (3, 9, 'Esa cena se ve deliciosa 🍝'),
  (3, 10, '¡Quiero una invitación para cenar contigo!'),
    (4, 8, 'Increíble vista desde la montaña 🏞️'),
  (4, 9, '¿Fue una caminata difícil?'),
    (5, 2, '¡Qué talento tienes! 🎨'),
  (5, 7, 'Me encanta tu obra de arte 🖼️'),
  (6, 10, '¡El concierto estuvo increíble! 🎶'),
  (6, 8, '¿Cuál fue tu canción favorita?'),
  (7, 5, '¿Viste animales exóticos?'),
  (7, 4, '¡Aventura en su máxima expresión! 🌿'),
  (8, 3, '¡Noche de juegos es la mejor noche! 🎲'),
  (8, 2, '¿Qué juegos jugaron?'),
  (9, 4, '¡Ese viaje fue inolvidable! ✈️'),
  (9, 5, '¡Quiero volver allí! 🌍'),
  (10, 7, '¡Un picnic perfecto en un día perfecto! 🧺'),
  (10, 8, '¡Disfruten el aire libre! 🌞');