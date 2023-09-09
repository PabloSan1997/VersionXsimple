import {DataSource} from 'typeorm';
import { variables } from '../config/variables';
import { Users } from './models/users';
import { Publicaciones } from './models/publicaciones';

export const AppDataSource = new DataSource({
    type:'postgres',
    url: variables.DB_URL,
    synchronize:true,
    logging:true,
    ssl:{
        rejectUnauthorized:false
    },
    entities:[Publicaciones, Users]
});