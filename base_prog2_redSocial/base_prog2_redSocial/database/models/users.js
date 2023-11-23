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
                password:{
                    type: dataTypes.STRING
                },
                fotoPerfil: {
                    type: dataTypes.STRING
                },
                fechaNacimiento:{
                    type: dataTypes.DATE
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
    
            }
        
            let User = sequelize.define(alias, cols, conf);

            //relaciones
            User.associate = function(models) {
            // Un perfil --> muchos productos
                User.hasMany(models.Post, {

                    as: "posteo",
                    foreignKey: "idUsuario"
                });
            // Un perfil --> muchos comentarios
                User.hasMany(models.Comment, {
                    as: "comentario",
                    foreignKey: "idUsuario"
                })
            };
            return User;
    }