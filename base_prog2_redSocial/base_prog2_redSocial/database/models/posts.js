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
           
            poat.associate = function(models) {
                // Un perfil --> muchos productos
                Producto.belongsTo(models.User , {
                    as: "usuario",
                    foreignKey: "idUsuario"
                }),
                // Un producto --> muchos comentarios
                Producto.hasMany(models.Comment, {
                    as: "comentario",
                    foreignKey: "idPost"
                })
            };
            

            return post;
        }