<script setup></script>
<template>
  <p>
    <slot name="header">Header</slot>
  </p>
  <p>
    <slot name="default">This is default content</slot>
  </p>
  <p>
    <slot name="footer"></slot>
  </p>
</template>
