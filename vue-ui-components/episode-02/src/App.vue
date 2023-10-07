<script setup>
import Ticket from "./components/Ticket.vue";
import { tickets } from "./data/ticket.js";
</script>

<template>
  <section class="mx-auto">
    <h1 class="my-10 text-center">Components</h1>
    <div class="flex flex-col space-y-5">
      <!-- <Ticket
        :title="ticket.title"
        :description="ticket.description"
        :image="ticket.image"
        :distance="ticket.distance"
        :location="ticket.location"
        :reviews="ticket.reviews"
      /> -->
      <Ticket v-for="(ticket, index) in tickets" v-bind="ticket" :key="index" />
    </div>
  </section>
</template>
