import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Posts from "../components/Posts.vue";
import Post from "../components/Post.vue";
import User from "../components/User.vue";
import NotFound from "../components/NotFound.vue";
import UserProfile from "../components/UserProfile.vue";
import UserSettings from "../components/UserSettings.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/about", component: About },
  { path: "/contact", component: Contact, name: "contact" },
  { path: "/all-post", component: Posts },
  { path: "/post/:id?", component: Post, name: "post" },
  {
    path: "/user/:id?",
    component: User,
    name: "user",
    children: [
      { path: "profile", component: UserProfile },
      { path: "settings", component: UserSettings },
    ],
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
