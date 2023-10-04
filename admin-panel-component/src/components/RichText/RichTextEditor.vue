<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { ref } from "vue";
const inputValue = ref("<h3>Write here...!</h3>");

const EditorContent = () => {
  alert(inputValue.value);
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <QuillEditor
              v-model:content="inputValue"
              content-type="html"
              toolbar="full"
              class="editor"
              theme="snow"
            />
            <br />
            <button @click="EditorContent" class="btn w-25 btn-success">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
