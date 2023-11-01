const routes = [
  {
    path: "/", // Redireciona a rota raiz ("/") para "/home"
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("pages/Home.vue"),
  },
  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      { path: "", name: "login", component: () => import("pages/Login.vue") },
    ],
  },
  {
    path: "/cadastro",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        name: "cadastro",
        component: () => import("pages/Cadastro.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "consultas",
        name: "consultas",
        component: () => import("pages/Consultas.vue"),
      },
      {
        path: "clientes",
        name: "clientes",
        component: () => import("pages/Clientes.vue"),
      },
      {
        path: "animais",
        name: "animais",
        component: () => import("pages/Animais.vue"),
      },
      {
        path: "CadastrarConsulta",
        name: "formConsulta",
        component: () => import("pages/Cadastro/ConsultaCad.vue"),
      },
      {
        path: "CadastrarCliente",
        name: "formCliente",
        component: () => import("pages/Cadastro/ClienteCad.vue"),
      },
      {
        path: "EditarConsulta/:id",
        name: "editConsulta",
        component: () => import("pages/Editar/ConsultaEdit.vue"),
      },
      {
        path: "EditarCliente",
        name: "editCliente",
        component: () => import("pages/Editar/ClienteEdit.vue"),
      },
      {
        path: "veterinarios",
        name: "veterinarios",
        component: () => import("pages/Veterinarios.vue"),
      },
      {
        path: "CadastrarVeterinario",
        name: "formVeterinario",
        component: () => import("pages/Cadastro/VeterinarioCad.vue"),
      },
      {
        path: "EditarVeterinario",
        name: "editVeterinario",
        component: () => import("pages/Editar/VeterinarioEdit.vue"),
      },
      {
        path: "EditarAnimal/:idCliente/:idAnimal",
        name: "editAnimal",
        component: () => import("pages/Editar/AnimalEdit.vue"),
      },
    ],
  },
  {
    path: "/home",
    component: () => import("pages/Home.vue"),
  },
];

export default routes;
