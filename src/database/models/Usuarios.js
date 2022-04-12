module.exports = (sequelize, DataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id: {
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    };
    let config = {
        timestamps: false,
    };

    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}