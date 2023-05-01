import { dbConfig  } from "./dbConfig";
import { Sequelize } from "sequelize";
import { itemModel } from "./item";
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,
dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	pool: {
	max: dbConfig.pool.max,
	min: dbConfig.pool.min,
	acquire: dbConfig.pool.acquire,
	idle: dbConfig.pool.idle
	}
});
// const db: any = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.item =  itemModel(sequelize, Sequelize);
const item = itemModel(sequelize, Sequelize);
export {sequelize, item};