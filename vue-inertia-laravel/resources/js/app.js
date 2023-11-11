import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NProgress from "nprogress";
import { router } from "@inertiajs/vue3";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});

// Appear @ Before Route

/* router.on("before", (event) => {
    if (!confirm("Are you sure you want to navigate away?")) {
        event.preventDefault();
    }
}); */

router.on("start", () => NProgress.start());

// Pass Invalid Params like Inertia::render('Page8',$invalid_variable) to see this

/* router.on("invalid", (event) => {
    console.log(`An invalid Inertia response was received.`);
    console.log("Response: ", event.detail.response);
}); */

// Shutdown Server To See This Exception
/*router.on('exception', (event) => {
    console.log(`An unexpected error occurred during an Inertia visit.`)
    console.log(event.detail.error)
})*/

// Appear @ Current Navigation
/*router.on("navigate", (event) => {
    console.log(`Navigated to ${event.detail.page.url}`);
});*/

router.on("finish", () => NProgress.done());
