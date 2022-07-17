import { Response } from 'express'
import {
  createWriteStream,
  createReadStream,
  unlinkSync,
  readdir,
  existsSync,
  mkdirSync,
} from 'fs'
import { Readable } from 'stream'
import { join } from 'path'

class FileService {
  async upload(name: string, file: string) {
    const filePath = join(process.cwd(), 'tempFiles')

    if (!existsSync(filePath)) {
      mkdirSync(filePath)
    }

    const fileBuffer = Buffer.from(file, 'base64')
    const fileStream = Readable.from(fileBuffer)
    const fileLocation = join(filePath, name)
    fileStream.pipe(createWriteStream(fileLocation, 'base64'))
    return true
  }

  async download(name: string, response: Response) {
    const filePath = join(process.cwd(), 'tempFiles', name)
    const fileStream = createReadStream(filePath)
    fileStream.pipe(response)
  }

  async fileList(response: Response) {
    const filesPath = join(process.cwd(), 'tempFiles')
    readdir(filesPath, (err, files) => {
      if (err) {
        return console.log('Unable to scan directory: ' + err)
      }
      response.json(files)
    })
  }

  delete(name: string) {
    const filePath = join(process.cwd(), 'tempFiles', name)
    unlinkSync(filePath)
    return true
  }
}

export { FileService }
