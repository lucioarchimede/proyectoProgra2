module.exports = function(sequelize, dataTypes){
            let alias = "Movie"; //Es el nombre con el que identificaremos al modelo cuando lo necesitemos en un controlador.
            
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
                created_at:{
                    type: dataTypes.DATE
                },
                updated_at:{
                    type: dataTypes.DATE
                }
            }
        
            let conf = {
                tableName: "posteos",
                timestamps: true,
                underscored: true,
            }
        
            let post = sequelize.define(alias, cols, conf);
            
            return post;
        }