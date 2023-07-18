<script setup>
import { countries } from "./data/country";

//only get the country which first charater start with 'B'
const countryList = countries.filter((country) => country.country[0] === "B");

//annomous function
/** function getCountryList() {
  return countries.filter(function (country) {
    return country.country[0] === "B";
  });
} **/
</script>

<template>
  <div>
    <h1 style="font-weight: bold">Country List</h1>
    <br />
    <ul>
      <li v-for="(country, index) in countryList" :key="index">
        {{ index + 1 }}. {{ country.country }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
