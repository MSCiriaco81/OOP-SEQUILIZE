import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('fatecdiadema', 'root', 'gris3@', { // -> adicione sua senha do MySQL aqui!!!
  host: 'localhost',
  dialect: 'mysql',
});

export async function authenticate() {
  await sequelize.authenticate();
}

export async function sync() {
  await sequelize.sync();
}

export async function close() {
  await sequelize.close();
}

export default sequelize;
