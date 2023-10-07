<script setup>
import TeamMember from "./components/TeamMember.vue";
import { persons } from "./data/persons.js";

// const fullName = "Bonnie Green";
/*const person1 = {
  name: "Bonnie Green",
  designation: "CEO & Web Developer",
  avatar:
    "//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
  about:
    " Bonnie drives the technical strategy of the flowbite platform and brand.",
  age: 30,
};*/
</script>

<template>
  <section class="mx-auto container">
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            Our Team
          </h2>
          <p
            class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
          >
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <!-- static data -->
          <!-- <TeamMember
            name="Bonnie Green"
            designation="CEO & Web Developer"
            avatar="//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
            about=" Bonnie drives the technical strategy of the flowbite platform
                  and brand."
          />
          <TeamMember
            name="Jese Leos"
            designation="CTO"
            avatar="//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            about=" Jese drives the technical strategy of the flowbite platform
                  and brand."
          />
          <TeamMember
            name="Michael Gough"
            designation="Senior Front-end Developer"
            avatar="//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            about=" Michael drives the technical strategy of the flowbite platform
                  and brand."
          />
          <TeamMember
            name="Lana Byrd"
            designation="Marketing & Sale"
            avatar="//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
            about=" Lana drives the technical strategy of the flowbite platform
                  and brand."
          /> -->

          <!-- dynamic data -->
          <!-- <TeamMember
            :name="person1.name"
            :designation="person1.designation"
            :avatar="person1.avatar"
            :about="person1.about"
          /> -->

          <!-- single person object -->
          <!-- <TeamMember v-bind="person1" /> -->

          <!--all persons -->
          <TeamMember
            v-for="(person, index) in persons"
            v-bind="person"
            :key="index"
          />
        </div>
      </div>
    </section>
  </section>
</template>
