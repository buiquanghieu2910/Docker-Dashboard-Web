import { createRouter, createWebHistory } from "vue-router";
import ContainerView from "../views/ContainerView.vue";
import ImageView from "../views/ImageView.vue";
import VolumeView from "../views/VolumeView.vue";
import CleanUpView from "../views/CleanUpView.vue";

const routes = [
  {
    path: "",
    name: "none",
    redirect: "container",
  },
  {
    path: "/container",
    name: "container-view",
    component: ContainerView,
  },
  {
    path: "/image",
    name: "image-view",
    component: ImageView,
  },
  {
    path: "/volume",
    name: "volume-view",
    component: VolumeView,
  },
  {
    path: "/clean",
    name: "clean-up-view",
    component: CleanUpView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
