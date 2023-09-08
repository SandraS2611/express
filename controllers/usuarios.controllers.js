//CRUD

//READ (leer todos O leer 1 solo)

let usuarios = [
  {
    id: 1,
    username: "admin",
    password: "admin",
  },
  {
    id: 2,
    username: "admin2",
    password: "admin2",
  },
];

const generarId = () => {
  // const ids = usuarios.map((e) => e.id)
  //return Math.max(...ids) + 1
  return Math.max(...usuarios.map((e) => e.id)) + 1; //resumido
};

generarId();

const obtenerTodosLosUsuarios = (req, res) => {
  res.json(usuarios);
};

const obtenerUsuarioPorId = (req, res) => {
  const id = req.params.nombreDeUsuario;

  const usuario = usuarios.find((e) => e.id == id);
  res.json(usuario);
};

const crearUsuario = (req, res) => {
  const { username, password } = req.body;
  const nuevaId = generarId();

  const nuevoUsuario = {
    id: nuevaId,
    username,
    password,
  };

  usuarios.push(nuevoUsuario);

  res.send("Usuario creado");
};

const actualizarUsuario = (req, res) => {};

const eliminarUsuario = (req, res) => {};

module.exports = {
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
