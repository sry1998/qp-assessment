import express from "express";
import dotenv from 'dotenv';
import sequelize from "./database";
import adminRoutes from './routes/admin';
import userRoutes from './routes/user';
import routes from './routes/route';
import { errorHandler } from "./middleware/errorHandler";
import sequelizer from "./models";

dotenv.config();

const app = express()

app.use(express.json());
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/api', routes);

app.use(errorHandler);

sequelizer.sync({force: false}).then(() => {
    console.log('Database Connected');
    app.listen(process.env.PORT || 3000, () => {
        console.log('Server is running on port', process.env.PORT || 3000);
    })
})