import Layout from "@/pages/index/";
export default [
  {
    path: "/wel",
    component: Layout,
    redirect: "/wel/index",
    children: [
      {
        path: "index",
        name: "首页",
        component: () => import( "@/pages/wel")
      }
    ]
  },
  {
    path: "/home",
    component: Layout,
    redirect: "/home/index",
    children: [
      {
        path: "index",
        name: "2",
        component: () => import( "@/views/Home")
      }
    ]
  },
  {
    path: "/about",
    component: Layout,
    redirect: "/about/index",
    children: [
      {
        path: "index",
        name: "1",
        component: () => import( "@/views/About")
      }
    ]
  }
];
