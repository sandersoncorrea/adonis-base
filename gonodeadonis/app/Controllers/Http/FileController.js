"use strict";

const File = use("App/Models/File");
const Helpers = use("Helpers");

/**
 * Resourceful controller for interacting with files
 */
class FileController {
  /**
   * Create/save a new file.
   * POST files
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      if (!request.file("file")) {
        return response.status(401).send({ message: "Arquivo não enviado" });
      }

      const upload = request.file("file", { size: "2mb" });

      const fileName = `${Date.now()}.${upload.subtype}`;

      await upload.move(Helpers.tmpPath("uploads"), {
        name: fileName,
      });

      if (!upload.moved()) {
        throw upload.error();
      }

      const file = await File.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype,
      });

      return file;
    } catch (err) {
      return response
        .status(err.status)
        .send({ message: "Erro no upload de arquivo", error: err.message });
    }
  }
}

module.exports = FileController;
