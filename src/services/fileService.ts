import { Response } from 'express'
import { createWriteStream } from 'fs'
import { Readable } from 'stream'
import { join } from 'path'

class FileService {
  async upload(name: string, file: string) {
    const fileBuffer = Buffer.from(file, 'base64')
    const fileStream = Readable.from(fileBuffer)
    const filePath = join(process.cwd(), 'tempFiles', name)
    fileStream.pipe(createWriteStream(filePath, 'base64'))
    return true
  }

  async download(name: string, response: Response) {}

  async delete(name: string) {}
}

export { FileService }
