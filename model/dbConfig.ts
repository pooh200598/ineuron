const dbConfig: any = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'root@123',
    DB: 'ineurona',
    dialect: 'mysql', 
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
}
export {dbConfig}