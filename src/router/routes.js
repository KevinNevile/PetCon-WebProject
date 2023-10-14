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
    children: [{ path: "", component: () => import("pages/Login.vue") }],
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
        path: "CadastrarConsulta",
        name: "formConsulta",
        component: () => import("pages/Cadastro/ConsultaCad.vue"),
      },
      {
        path: "EditarConsulta",
        name: "editConsulta",
        component: () => import("pages/Editar/ConsultaEdit.vue"),
      },
    ],
  },
  {
    path: "/home",
    component: () => import("pages/Home.vue"),
  },
];

export default routes;
