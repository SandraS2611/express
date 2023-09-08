let contador = 0;

const controlador = (req, res) => {
  res.status(200).send(`Contador: ${contador}`); //controlador
};

const incrementar = (req, res) => {
  contador++;
  res.status(200).send(`Contador: ${contador}`);
};

const disminuir = (req, res) => {
  contador--;
  res.status(200).send(`Contador: ${contador}`);
};

module.exports = { controlador, incrementar, disminuir };
