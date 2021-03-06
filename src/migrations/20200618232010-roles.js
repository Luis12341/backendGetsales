"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("roles", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            rol: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("roles");
    },
};
