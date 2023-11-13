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
<<<<<<< HEAD
                    as: "usuario",
=======
                    as: "posteo_usuario",
>>>>>>> d48fd5264e609cad46b0787125306f7d970abbfd
                    foreignKey: "idUsuario"
                });
                // Un producto --> muchos comentarios
                Post.hasMany(models.Comment, {
<<<<<<< HEAD
                    as: "comentario",
=======
                    as: "posteo_comentario",
>>>>>>> d48fd5264e609cad46b0787125306f7d970abbfd
                    foreignKey: "idPost"
                })
            };
            

            return Post;
        }