import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import TestRouter from "@/components/TestRouter";
import Index from "@/components/Index";

import Two from "@/components/Two";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/user/:id/:name",
            name: "HelloWorld",
            component: HelloWorld
        },
        {
            path: "/index",
            component: Index,
            children: [
                {
                    name: "two",
                    path: "two/:name/:ue",
                    component: Two
                }
            ]
        }
    ]
});
