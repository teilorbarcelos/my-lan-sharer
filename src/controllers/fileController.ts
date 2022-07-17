import { Request, Response } from 'express'
import { FileService } from '../services/fileService'

interface FileProps {
  name: string
  file: string
}

class FileController {
  async handleUpload(request: Request, response: Response) {
    const { name, file }: FileProps = request.body

    const service = new FileService()

    try {
      const uploadedFiles = await service.upload(name, file)

      return response.json(uploadedFiles)
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async handleDownload(request: Request, response: Response) {
    const { name }: FileProps = request.body

    const service = new FileService()

    try {
      await service.download(name, response)

      return response
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async handleDelete(request: Request, response: Response) {
    const { name }: FileProps = request.body

    const service = new FileService()

    try {
      const deletedFile = await service.delete(name)

      return deletedFile
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}

export { FileController }
