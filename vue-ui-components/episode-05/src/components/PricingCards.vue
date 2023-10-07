<script setup>
import PricingCard from "./PricingCard.vue";
import { cards } from "../data/card.js";
</script>
<template>
  <PricingCard v-for="(card, index) in cards" :key="index" :card="card" />
</template>
