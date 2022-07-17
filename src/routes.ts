import { Request, Response, Router } from 'express'
import { FileController } from './controllers/fileController'

const router = Router()

router.get('/', (request: Request, response: Response) => {
  const message = {
    message: 'API created to LAN file sharing Author: Teilor Souza Barcelos',
    contact: 'https://teilorwebdev.vercel.app/',
  }
  return response.json(message)
})

// File routes
router.post('/upload', new FileController().handleUpload)
router.post('/download', new FileController().handleDownload)
router.post('/delete', new FileController().handleDelete)

export { router }
