module.exports = (sequelize, DataTypes) => {
    let alias = "Genero";
    let cols = {
        id: {
            type: DataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        peliculas_id: {
            type: DataTypes.BIGINT(11),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createAt: "created_at",
        updateAt: "updated_at",
        deletedAt: "deleted_at",
    };

    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function (models) {
        Genero.hasMany(models.Pelicula, {
            as: "peliculas",
            foreignKey: "pelicula_id",
            timestamps: false
        })
    }
    return Genero;
}