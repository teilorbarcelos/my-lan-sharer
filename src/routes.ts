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
router.get('/download', new FileController().handleDownload)
router.get('/files', new FileController().handleList)
router.delete('/delete', new FileController().handleDelete)
router.get('/local-ip', new FileController().getServerIp)

export { router }
