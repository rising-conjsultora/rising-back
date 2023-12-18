const Convocatoria = require("../models/convocatoria");
const image = require("../utils/image");

function createConvocatoria(req, res) {
  console.log(req.body)
  const cod = new Convocatoria();
  const registro = new Convocatoria({
    ...req.body,
    path:cod._id.toString()
  });
  console.log(registro)
  registro.save((error, postStored) => {
    if (error) {
      // console.log(error)
      res.status(400).send({ msg: "Error al creat el post" });
    } else {
      res.status(201).send(postStored);
    }
  });
}

function getConvocatorias(req, res) {
  const { page = 1, limit = 10 } = req.query;

  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
    sort: { created_at: "desc" },
  };

  Convocatoria.paginate({}, options, (error, postsStored) => {
    if (error) {
      res.status(400).send({ msg: "Error al obtener los posts" });
    } else {
      res.status(200).send(postsStored);
    }
  });
}

function updateConvocatoria(req, res) {
  const { id } = req.params;
  const postData = req.body;

  if (req.files.miniature) {
    const imagePath = image.getFilePath(req.files.miniature);
    postData.miniature = imagePath;
  }

  Convocatoria.findByIdAndUpdate({ _id: id }, postData, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al actualizar el post" });
    } else {
      res.status(200).send({ msg: "Actualización correcta" });
    }
  });
}

function deleteConvocatoria(req, res) {
  const { id } = req.params;

  Convocatoria.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar el post" });
    } else {
      res.status(200).send({ msg: "Post eliminado" });
    }
  });
}

function getConvocatoria(req, res) {
  const { path } = req.params;

  Convocatoria.findOne({ path }, (error, postStored) => {
    if (error) {
      res.status(500).send({ msg: "Error del servidor" });
    } else if (!postStored) {
      res.status(400).send({ msg: "No se ha encontrado ningun post" });
    } else {
      res.status(200).send(postStored);
    }
  });
}

module.exports = {
  createConvocatoria,
  getConvocatorias,
  updateConvocatoria,
  deleteConvocatoria,
  getConvocatoria,
};
