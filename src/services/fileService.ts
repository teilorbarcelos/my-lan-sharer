import { Response } from 'express'
class FileService {
  async upload(name: string, file: ReadableStream) {}

  async download(name: string, response: Response) {}

  async delete(name: string) {}
}

export { FileService }
