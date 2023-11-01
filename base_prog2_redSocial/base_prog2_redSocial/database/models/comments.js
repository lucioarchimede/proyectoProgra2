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
                createdAt:{
                    type: dataTypes.DATE
                },
                updatedAt:{
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
            //relaciones

            Comentario.associate = function(models) {
            // Un perfil --> muchos comentarios
                Comentario.belongsTo(models.User , {
                    as: "usuario",
                    foreignKey: "idUsuario"
                }),
            // Un producto --> muchos comentarios
                Comentario.belongsTo(models.Producto , {
                    as: "posteo",
                    foreignKey: "idPost"
                })
            };
            return comment;
        }