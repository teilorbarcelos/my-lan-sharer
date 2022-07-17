"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const fileService_1 = require("../services/fileService");
class FileController {
    async handleUpload(request, response) {
        const { name, file } = request.body;
        const service = new fileService_1.FileService();
        try {
            const uploadedFiles = await service.upload(name, file);
            return response.json(uploadedFiles);
        }
        catch (error) {
            return response.json({ error: error.message });
        }
    }
    async handleDownload(request, response) {
        const { name } = request.body;
        const service = new fileService_1.FileService();
        try {
            await service.download(name, response);
            return response;
        }
        catch (error) {
            return response.json({ error: error.message });
        }
    }
    async handleDelete(request, response) {
        const { name } = request.body;
        const service = new fileService_1.FileService();
        try {
            const deletedFile = await service.delete(name);
            return deletedFile;
        }
        catch (error) {
            return response.json({ error: error.message });
        }
    }
}
exports.FileController = FileController;
