import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/backend",
    name: "backend",
    component: () => import("../views/BackendView.vue"),
  },
  {
    path: "/documents/:id/",
    name: "documents",
    component: () => import("../views/DocumentDetails.vue"),
    props: true,
  },
  {
    path: "/trackers",
    name: "trackers",
    component: () => import("../views/TrackersPage.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardPage.vue"),
  },
  {
    path: "/documentindex",
    name: "documentindex",
    component: () => import("../views/DocumentIndexPage.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/SettingsPage.vue"),
  },
  {
    path: "/documentsearch",
    name: "documentsearch",
    component: () => import("../views/DocumentListPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
