import { createRouter, createWebHistory } from "vue-router";
import BasicLayout from "../layouts/BasicLayout.vue";
import Couple from "../views/Couple.vue";
import Dog from "../views/Dog.vue";
import Wedding from "../views/Wedding.vue";
import Test1 from "../views/Test1.vue";
import Map from "../views/Map.vue";

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
          hideTop: true,
          /* 隐藏底部标签栏 */
          hideBottom: false,
          /* 是否缓存 */
          keepAlive: true
        },
      },
      {
        path: "/dog",
        name: "dog",
        component: Dog,
        meta: {
          title: "一狗",
          hideTop: true,
          hideBottom: false,
          keepAlive: true
        },
      },
      {
        path: "/wedding",
        name: "wedding",
        component: Wedding,
        meta: {
          title: "婚礼",
          hideTop: true,
          hideBottom: false,
        },
      },
    ]
  },
  {
    path: "/test1",
    name: "test1",
    component: Test1,
    meta: {
    },
  },
  {
    path: "/map",
    name: "map",
    component: Map,
    meta: {
    },
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
