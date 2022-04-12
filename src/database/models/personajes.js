module.exports = (sequelize, DataTypes) => {
    let alias = 'Personajes';
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
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        edad: {
            type: DataTypes.INTEGER(11),
        },
        peso: {
            type: DataTypes.INTEGER(11),
        },
        historia: {
            type: DataTypes.TEXT(),
        },
        /* peliculas_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        } */
    };
    let config = {
        timestamps: false,
    };


    const Personajes = sequelize.define(alias, cols, config);

    Personajes.associate = (models) => {
        Personajes.belongsToMany(models.Peliculas, {
            as: "peliculas",
            through: "peliculas_personajes",
            foreignKey: "personajes_id",
            timestamps: false,
            otherKey: "peliculas_id"
        });

    }
    return Personajes;
}