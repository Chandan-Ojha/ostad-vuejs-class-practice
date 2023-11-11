<script setup>
import { useForm, usePage } from "@inertiajs/vue3";
import NavBar from "@/Component/NavBar.vue";
const page = usePage();

document.title = "Page 6";

const form = useForm({ image_file: "" });

function submit() {
    form.post("/UploadRequest", {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => {
            alert(page.props.flash.message);
            alert(JSON.stringify(page.props.flash.shared_data));
            form.reset();
        },
    });
}
</script>

<template>
    <NavBar />
    <div class="container mt-5">
        <h4 class="text-center">Inertia File Upload</h4>
        <div class="row justify-content-center">
            <div class="col-md-5">
                <form @submit.prevent="submit">
                    <label for="email">File</label>
                    <input
                        class="form-control"
                        type="file"
                        @input="form.image_file = $event.target.files[0]"
                    />
                    <button class="btn btn-primary mt-3 w-100" type="submit">
                        Submit
                    </button>

                    <progress
                        class="w-100"
                        v-if="form.progress"
                        :value="form.progress.percentage"
                        max="100"
                    >
                        {{ form.progress.percentage }}%
                    </progress>
                </form>
            </div>
        </div>
    </div>
</template>
