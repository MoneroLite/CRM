import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

app.listen(port, (err) => {
    if (err) {
        return logger.error(err)
    }
    console.log(`serves started on port ${port}`)
})