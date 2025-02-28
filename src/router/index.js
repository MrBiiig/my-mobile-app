import { createRouter, createWebHistory } from "vue-router";
import BasicLayout from "../layouts/BasicLayout.vue";
import Couple from "../views/Couple.vue";
import Dog from "../views/Dog.vue";
import Wedding from "../views/Wedding.vue";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";

const routes = [
  {
    path: "/",
    component: BasicLayout,
    redirect: "/couple",
    children: [
      {
        path: "/couple",
        name: "couple",
        component: Couple,
        meta: {
          title: "两人",
          /* 隐藏顶部导航栏 */
          hideTop: false,
          /* 隐藏底部标签栏 */
          hideBottom: false,
        },
      },
      {
        path: "/dog",
        name: "dog",
        component: Dog,
        meta: {
          title: "一狗",
          hideTop: false,
          hideBottom: false,
        },
      },
      {
        path: "/wedding",
        name: "wedding",
        component: Wedding,
        meta: {
          title: "婚礼",
          hideTop: false,
          hideBottom: false,
        },
      },
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
