module.exports = (sequelize, DataTypes) => {
    let alias = "Generos";
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
    };
    let config = {
        timestamps: false,
    };


    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function (models) {
        Genero.hasMany(models.Peliculas, {
            as: "peliculas",
            foreignKey: "genero_id",
            timestamps: false
        })
    }
    return Genero;
}