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
            }
        
            let Comment = sequelize.define(alias, cols, conf);
            //relaciones

            Comment.associate = function(models) {
            // Un perfil --> muchos comentarios
                Comment.belongsTo(models.User , {
                    as: "usuario",
                    foreignKey: "idUsuario"
                });
            // Un producto --> muchos comentarios
                Comment.belongsTo(models.Post , {
                    as: "comentarioPosteo",
                    foreignKey: "idPost"
                })
            };
            return Comment;
        }