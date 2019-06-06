import Vue from "vue";
// import Home from "../views/Home.vue";
import PageRouter from "./page/";
import ViewsRouter from "./views/";
import VueRouter from "vue-router";
import jhvueRouter from "./jh-router";
import Store from "../store/";
import { menusJson } from "@/const/menus";  // 测试数据

Vue.use(VueRouter);

let Router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      };
    }
  }
});
jhvueRouter.install(Router, Store);
Router.$jhvueRouter.formatRoutes(menusJson, true); // 添加菜单
Router.addRoutes([...ViewsRouter, ...PageRouter]);

export default Router;
