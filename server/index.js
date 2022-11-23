import * as dotenv from 'dotenv'
dotenv.config()
import express, { Router } from 'express'
import cors from 'cors'
import { UserController } from './controllers/index.js';

const app = express();
const port = process.env.PORT || 5000;
const router = Router();

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

router.post('/api/auth/registration', UserController.registration)
router.post('/api/auth/login', UserController.login)

app.listen(port, (err) => {
    if (err) {
        return logger.error(err)
    }
    console.log(`serves started on port ${port}`)
})