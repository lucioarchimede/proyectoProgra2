module.exports = function(sequelize, dataTypes){
            let alias = "Comment"; //Es el nombre con el que identificaremos al modelo cuando lo necesitemos en un controlador.
            
            let cols = {
                id: {
                    primaryKey: true,
                    autoIncrement: true,
                    type: dataTypes.INTEGER
                },
                idPost: {
                    type: dataTypes.INTEGER
                },
                idUsuario:{
                    type: dataTypes.INTEGER
                },
                textoComentario: {
                    type: dataTypes.STRING
                },
                created_at:{
                    type: dataTypes.DATE
                },
                updated_at:{
                    type: dataTypes.DATE
                }
            }
        
            let conf = {
                // underscored: true,
                tableName: "comentarios",
                timestamps: true,
                underscored: true,
            }
        
            let comment = sequelize.define(alias, cols, conf);
        
            return comment;
        }