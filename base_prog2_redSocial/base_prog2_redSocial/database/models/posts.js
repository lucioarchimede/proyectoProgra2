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
        
            let Post = sequelize.define(alias, cols, conf);
           
            Post.associate = function(models) {
                // Un perfil --> muchos productos
                Post.belongsTo(models.User , {
                    as: "posteo_usuario",
                    foreignKey: "idUsuario"
                });
                // Un producto --> muchos comentarios
                Post.hasMany(models.Comment, {
                    as: "posteo_comentario",
                    foreignKey: "idPost"
                })
            };
            

            return Post;
        }