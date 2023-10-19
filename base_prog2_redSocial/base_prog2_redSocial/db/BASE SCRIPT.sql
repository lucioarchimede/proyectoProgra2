CREATE SCHEMA IF NOT EXISTS dbtrabajo;
USE dbtrabajo;
/*Tabla de usuarios */
CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
    email VARCHAR(255) NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    fotoPerfil VARCHAR(255),
    fechaRegistro DATE,
    dni INT NOT NULL,
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







