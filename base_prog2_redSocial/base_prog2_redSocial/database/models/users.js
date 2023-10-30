module.exports = function(sequelize, dataTypes){
            let alias = "User"; //Es el nombre con el que identificaremos al modelo cuando lo necesitemos en un controlador.
            
            let cols = {
                id: {
                    primaryKey: true,
                    autoIncrement: true,
                    type: dataTypes.INTEGER
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
                dni:{
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
        
            let user = sequelize.define(alias, cols, conf);
        
            return user;
        }