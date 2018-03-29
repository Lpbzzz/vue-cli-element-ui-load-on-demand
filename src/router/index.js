import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import TestRouter from "@/components/TestRouter";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/user/:id",
            name: "HelloWorld",
            component: HelloWorld
        }
    ]
});
