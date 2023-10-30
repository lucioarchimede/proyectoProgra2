module.exports = function(sequelize, dataTypes){
            let alias = "Post"; //Es el nombre con el que identificaremos al modelo cuando lo necesitemos en un controlador.
            
            let cols = {
                 id: {
                    primaryKey: true,
                    autoIncrement: true,
                    type: dataTypes.INTEGER
                },
                idUsuario: {
                    type: dataTypes.INTEGER
                },
                nombreImagen:{
                    type: dataTypes.STRING
                },
                textoDescriptivo: {
                    type: dataTypes.INTEGER
                },
                createdAt:{
                    type: dataTypes.DATE
                },
                updatedAt:{
                    type: dataTypes.DATE
                }
            }
        
            let conf = {
                tableName: "posteos",
                timestamps: true,
            //     underscored: true,
            }
        
            let post = sequelize.define(alias, cols, conf);

            return post;
        }