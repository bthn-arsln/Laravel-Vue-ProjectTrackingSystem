import Vue from "vue";
import VueRouter from "vue-router";
import Admin from "@/pages/admin";
import Developer from "@/pages/developer";
import middleware from "./middleware";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: 'login' */ "@/pages/auth/login")
    },
    {
        path: "/admin/setting",
        name: "Setting",
        component: () =>
            import(/* webpackChunkName: 'setting' */ "@/pages/admin/setting"),
        beforeEnter: middleware.isAdmin
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        beforeEnter: middleware.isAdmin
    },
    {
        path: "/admin/projects",
        name: "Projects",
        component: () =>
            import(/* webpackChunkname: 'projects' */ "@/pages/admin/projects"),
        beforeEnter: middleware.isAdmin
    },
    {
        path: "/admin/project/create",
        name: "ProjectCreate",
        component: () =>
            import(
                /* webpackChunkName: 'create' */ "@/pages/admin/project/create"
            ),
        beforeEnter: middleware.isAdmin
    },
    {
        path: "/admin/project/:project",
        component: () =>
            import(/* webpackChunkName: 'project' */ "@/pages/admin/project"),
        beforeEnter: middleware.isAdmin,
        children: [
            {
                path: "",
                component: () =>
                    import(
                        /* webpackChunkName: 'specification' */ "@/pages/admin/project/specification"
                    )
            },
            {
                path: "todos",
                component: () =>
                    import(
                        /* webpackChunkName: 'todos' */ "@/pages/admin/project/todos"
                    )
            },
            {
                path: "notes",
                component: () =>
                    import(
                        /* webpackChunkName: 'notes' */ "@/pages/admin/project/notes"
                    )
            },
            {
                path: "edit",
                component: () =>
                    import(
                        /* webpackChunkName: 'edit' */ "@/pages/admin/project/edit"
                    )
            }
        ]
    },
    {
        path: "/admin/profile/:user",
        component: () =>
            import(/* webpackChunkName: 'profile' */ "@/pages/admin/profile"),
        beforeEnter: middleware.isAdmin,
        children: [
            {
                path: "",
                component: () =>
                    import(
                        /* webpackChunkName: 'profile' */ "@/pages/admin/profile/detail"
                    )
            },
            {
                path: "edit",
                component: () =>
                    import(
                        /* webpackChunkName: 'profile' */ "@/pages/admin/profile/edit"
                    )
            }
        ]
    },
    {
        path: "/admin/team",
        name: "Team",
        component: () =>
            import(/* webpackChunkName: 'team' */ "@/pages/admin/team"),
        beforeEnter: middleware.isAdmin
    },
    {
        path: "/admin/account/:slug",
        component: () =>
            import(/* webpackChunkName: 'account' */ "@/pages/admin/account"),
        beforeEnter: middleware.isAdmin,
        children: [
            {
                path: "",
                component: () =>
                    import(
                        /* webpackChunkName: 'account-detail' */ "@/pages/admin/account/detail"
                    )
            },
            {
                path: "projects",
                component: () =>
                    import(
                        /* webpackChunkName: 'account-projects' */ "@/pages/admin/account/projects"
                    )
            }
        ]
    },
    {
        path: "/",
        name: "Developer",
        component: Developer,
        beforeEnter: middleware.isDeveloper
    },
    {
        path: "/profile/:user",
        component: () =>
            import(
                /* webpackChunkName: 'profile' */ "@/pages/developer/profile"
            ),
        beforeEnter: middleware.isDeveloper,
        children: [
            {
                path: "",
                component: () =>
                    import(
                        /* webpackChunkName: 'profile' */ "@/pages/developer/profile/detail"
                    )
            },
            {
                path: "edit",
                component: () =>
                    import(
                        /* webpackChunkName: 'profile' */ "@/pages/developer/profile/edit"
                    )
            },
            {
                path: "projects",
                component: () =>
                    import(
                        /* webpackChunkName: 'profile' */ "@/pages/developer/profile/projects"
                    )
            }
        ]
    },
    {
        path: "/project/:project",
        component: () =>
            import(
                /* webpackChunkName: 'project' */ "@/pages/developer/project"
            ),
        beforeEnter: middleware.isDeveloper,
        children: [
            {
                path: "",
                component: () =>
                    import(
                        /* webpackChunkName: 'specification' */ "@/pages/developer/project/specification"
                    )
            },
            {
                path: "todos",
                component: () =>
                    import(
                        /* webpackChunkName: 'todos' */ "@/pages/developer/project/todos"
                    )
            },
            {
                path: "notes",
                component: () =>
                    import(
                        /* webpackChunkName: 'notes' */ "@/pages/developer/project/notes"
                    )
            }
        ]
    },
    {
        path: "/projects",
        name: "MyProjects",
        component: () =>
            import(
                /* webpackChunkName: 'my-projects' */ "@/pages/developer/projects"
            )
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem("user");

    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        next({ path: "/login" });
    } else {
        next();
    }
});

export default router;
