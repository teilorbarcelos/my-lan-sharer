"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const fileController_1 = require("./controllers/fileController");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (request, response) => {
    const message = {
        message: 'API created to LAN file sharing Author: Teilor Souza Barcelos',
        contact: 'https://teilorwebdev.vercel.app/',
    };
    return response.json(message);
});
// File routes
router.post('/upload', new fileController_1.FileController().handleUpload);
router.post('/download', new fileController_1.FileController().handleDownload);
router.post('/delete', new fileController_1.FileController().handleDelete);
