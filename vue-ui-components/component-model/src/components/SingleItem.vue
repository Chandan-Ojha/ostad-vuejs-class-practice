<script setup>
defineProps(["modelValue", "label"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <label for="name">{{ label }}</label>
  <input
    type="text"
    name="name"
    id="name"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped></style>
