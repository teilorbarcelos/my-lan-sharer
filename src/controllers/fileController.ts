import { Request, Response } from 'express'
import { FileService } from '../services/fileService'

interface FileProps {
  name: string
  file?: string
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
    const { fileName } = request.query

    const service = new FileService()

    try {
      await service.download(String(fileName), response)

      return response
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async handleList(request: Request, response: Response) {
    const service = new FileService()

    try {
      await service.fileList(response)

      return response
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  handleDelete(request: Request, response: Response) {
    const { name }: FileProps = request.body

    const service = new FileService()

    try {
      const deletedFile = service.delete(name)

      return response.json(deletedFile)
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}

export { FileController }
