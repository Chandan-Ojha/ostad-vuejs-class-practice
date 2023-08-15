<script setup>
defineProps(['modelValue','label']);
defineEmits(["update:modelValue"]);
</script>
<template>
     <p class="my-5">
        <h2 class="text-xl">Single Item</h2>
        {{ label }} is {{ modelValue }} 
    </p>
    <p>
    <form action="" class="flex flex-col">
        <label for="name">{{ label }}</label>
        <input type="text" name="name" id="name" 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)">
    </form>
    </p>
</template>

<style scoped></style>
