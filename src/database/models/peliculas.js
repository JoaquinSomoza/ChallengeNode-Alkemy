module.exports = (sequelize, DataTypes) => {
    let alias = 'Peliculas';
    let cols = {
        id: {
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        imagen: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        fechaCreacion: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        calificacion: {
            type: DataTypes.DECIMAL(5),
            allowNull: false
        },
        genero_id: {
            type: DataTypes.BIGINT(11),
            allowNull: false
        }
    };


    /*  let config = {
         timestamps: true,
         createAt: "created_at",
         updateAt: "updated_at",
         deletedAt: "deleted_at",
     }; */

    const Pelicula = sequelize.define(alias, cols, config);
    Pelicula.associate = function (models) {
        Pelicula.belongsToMany(models.Personajes, {
            as: "personajes",
            through: "peliculas_personajes",
            foreignKey: "pelicula_id",
            otherKey: "personaje_id"
        });

        Pelicula.belongsTo(models.Generos, {
            as: "generos",
            foreignKey: "genero_id"
        })
    }
    return Pelicula;
}