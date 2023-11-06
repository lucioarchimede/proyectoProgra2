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
        
            const comment = sequelize.define(alias, cols, conf);
            //relaciones

            comment.associate = function(models) {
            // Un perfil --> muchos comentarios
                comment.belongsTo(models.User , {
                    as: "comentario_usuario",
                    foreignKey: "idUsuario"
                });
            // Un producto --> muchos comentarios
                comment.belongsTo(models.Post , {
                    as: "comentario_posteo",
                    foreignKey: "idPost"
                })
            };
            return comment;
        }