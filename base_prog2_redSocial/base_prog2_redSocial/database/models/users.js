module.exports = function(sequelize, dataTypes){
            let alias = "User"; //Es el nombre con el que identificaremos al modelo cuando lo necesitemos en un controlador.
            
            let cols = {
                id: {
                    primaryKey: true,
                    autoIncrement: true,
                    type: dataTypes.INTEGER
                },
                usuario:{
                    type: dataTypes.STRING
                },
                email: {
                    type: dataTypes.STRING
                },
                contraseña:{
                    type: dataTypes.STRING
                },
                fotoPerfil: {
                    type: dataTypes.STRING
                },
                fechaNacimiento:{
                    type: dataTypes.STRING
                },
                createdAt:{
                    type: dataTypes.DATE
                },
                updatedAt:{
                    type: dataTypes.DATE
                }
            }
        
            let conf = {
                // underscored: true,
                tableName: "usuarios",
                timestamps: true,
                underscored: true,
            }
        
            let User = sequelize.define(alias, cols, conf);

            //relaciones
            User.associate = function(models) {
            // Un perfil --> muchos productos
                User.hasMany(models.Post, {
<<<<<<< HEAD
                    as: "posteo",
=======
                    as: "usuario_posteo",
>>>>>>> d48fd5264e609cad46b0787125306f7d970abbfd
                    foreignKey: "idUsuario"
                });
            // Un perfil --> muchos comentarios
                User.hasMany(models.Comment, {
<<<<<<< HEAD
                    as: "comentario",
=======
                    as: "usuario_comentario",
>>>>>>> d48fd5264e609cad46b0787125306f7d970abbfd
                    foreignKey: "idUsuario"
                })
            };
            return User;
    }