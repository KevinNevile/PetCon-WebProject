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
    ],
  },
  {
    path: "/home",
    component: () => import("pages/Home.vue"),
  },
];

export default routes;
