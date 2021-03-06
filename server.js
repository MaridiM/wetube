import './db'
import './models/video'
import './models/user'
import './models/comment'
import app from './app'
import dotenv from 'dotenv'
dotenv.config();


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`✔️  Server is running on http://localhost:${PORT}`)
})