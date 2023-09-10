import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { variables } from './config/variables';
import { AppDataSource } from './database/config';
import { generateApi } from './routes/main';
import { headerHandle } from './middlewares/headerHandle';
import { boomHandle } from './middlewares/boomHandle';

async function main() {
	try {
		await AppDataSource.initialize();
		console.log('Conectado a la base de datos');
		const app = express();

		app.use(cors());
		app.use(express.json());
		app.use(headerHandle);

		generateApi(app);

		app.use(boomHandle);

		app.listen(variables.PORT, () => {
			console.log(`http://localhost:${variables.PORT}`);
		});
	} catch (error) {
		console.error(error);
	}
}

main();