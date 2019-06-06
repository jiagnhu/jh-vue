export const menusJson = [
    {
        id:1,
        component: "views/earth/index",
        label: "玩转地球",
        name: "玩转地球",
        icon: null,
        meta: {},
        parentId: -1,
        path: "/earth",
        keepAlive: "0",
        children: []
    },
    {
        id:2,
        component: "Layout",
        label: "拼团",
        name: "拼团",
        icon: null,
        meta: {},
        parentId: -1,
        path: "/assemble",
        keepAlive: "0",
        children:[
            {
                id:2100,
                component: "views/assemble/index",
                label: "拼团去",
                name: "拼团我",
                icon: null,
                meta: {},
                parentId: 2,
                path: "/assemble/index",
                keepAlive: "0",
                children:[]
            }
        ]
    },
    {
        id:3,
        component: "Layout",
        label: "推荐",
        name: "推荐",
        icon: null,
        meta: {},
        parentId: -1,
        path: "/recommend",
        keepAlive: "0",
        children:[
            {
                id:3100,
                component: "views/recommend/index",
                label: "推荐1",
                name: "推荐1",
                icon: null,
                meta: {},
                parentId: 3,
                path: "/recommend/index",
                keepAlive: "0",
                children:[]
            }
        ]
    },
    {
        id:4,
        component: "Layout",
        label: "社区中心",
        name: "社区中心",
        icon: null,
        meta: {},
        parentId: -1,
        path: "/community",
        keepAlive: "0",
        children:[
            {
                id:4100,
                component: "views/community/index",
                label: "社区中心1",
                name: "社区中心1",
                icon: null,
                meta: {},
                parentId: 4,
                path: "/community/index",
                keepAlive: "0",
                children:[]
            }
        ]
    }
]