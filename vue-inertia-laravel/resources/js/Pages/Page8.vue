<script setup>
import { usePage } from "@inertiajs/vue3";
import { useForm } from "@inertiajs/vue3";
import NavBar from "@/Component/NavBar.vue";
const page = usePage();
const form = useForm({ first_name: "", last_name: "", email: "" });

function submit() {
    form.post("/PostBackForError", {
        preserveScroll: true,
        onSuccess: () => {
            alert(page.props.flash.message);
            alert(JSON.stringify(page.props.flash.share_data));
            form.reset();
        },
    });
}
</script>

<template>
    <NavBar />
    <div class="container mt-5">
        <h4 class="text-center">Inertia Form Post & Get Error</h4>
        <div class="row justify-content-center">
            <div class="col-md-5">
                <form @submit.prevent="submit">
                    <label for="first_name">First name:</label>
                    <input
                        class="form-control"
                        id="first_name"
                        v-model="form.first_name"
                    />
                    <label for="last_name">Last name:</label>
                    <input
                        class="form-control"
                        id="last_name"
                        v-model="form.last_name"
                    />
                    <label for="email">Email:</label>
                    <input
                        class="form-control mb-3"
                        id="email"
                        v-model="form.email"
                    />
                    <button class="btn btn-primary w-100" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
