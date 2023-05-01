const  itemModel = (sequelize: any, Sequelize: any) => {
    const Tutorial = sequelize.define('Item', {
    name: {
    type: Sequelize.STRING
    },
    description: {
    type: Sequelize.STRING
    },
    price: {
    type: Sequelize.STRING
    }
    });
    return Tutorial;
    };

export {itemModel}