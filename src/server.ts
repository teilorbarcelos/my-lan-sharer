import express from 'express'
import { router } from './routes'
import cors from 'cors'

const app = express()

app.use(cors({ origin: '*' }))

app.use(express.json())
app.use(router)

const port = process.env.PORT || 3300

app.listen(port, () => console.log(`Server runing on http://localhost:${port}`))
