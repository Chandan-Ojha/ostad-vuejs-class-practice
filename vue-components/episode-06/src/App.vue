<script setup>
import BlogPosts from "./components/BlogPosts.vue";
</script>

<template>
  <section class="mx-auto">
    <header>
      <nav
        class="container mx-auto max-w-3xl px-8 pt-2 flex flex-wrap justify-between"
      >
        <div>
          <h1>
            <a href="/11r/">11r</a>
          </h1>
          <p>america's favorite eleventy blog template</p>
        </div>

        <ul
          class="flex flex-wrap sm:w-32 w-full mt-6 md:justify-between justify-evenly"
        >
          <li>
            <a href="#">404</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto max-w-3xl p-8 grow">
      <div>
        <BlogPosts />
      </div>
      <div>
        <div class="md:flex justify-evenly mb-6">
          <div class="flex justify-between mx-auto w-full">
            <div class="mx-auto mb-4">
              <a class="next-page md:mb-2" href="/11r/page/2/">Previous Page</a>
            </div>
          </div>

          <div class="flex justify-between mx-auto w-full">
            <div class="mx-auto">
              <a class="last-page" href="/11r/page/2/">Last Page</a>
            </div>
          </div>
        </div>
        <p class="text-center text-sm italic mb-10">(On page 1 of 2.)</p>
      </div>
      <div class="grid grid-flow-row grid-cols-3 gap-4 mb-2">
        <a class="tag cats mx-auto" href="/11r/tag/cats">cats</a>
        <a class="tag enchiladas mx-auto" href="/11r/tag/enchiladas"
          >enchiladas</a
        >
        <a class="tag beer mx-auto" href="/11r/tag/beer">beer</a>
        <a class="tag spirituality mx-auto" href="/11r/tag/spirituality"
          >spirituality</a
        >
        <a class="tag orcas mx-auto" href="/11r/tag/orcas">orcas</a>
        <a class="tag stoicism mx-auto" href="/11r/tag/stoicism">stoicism</a>
      </div>
    </main>
  </section>
</template>

<style scoped></style>
