<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import This_is_Nav from './components/Nav.vue'
import This_is_Main from './components/Main.vue'
import This_is_About from './components/AboutMe.vue'
import This_is_Project from './components/Project.vue';
import This_is_Footer from './components/Footer.vue'
</script>

<template>
<div class="flex flex-col gap-10 max-w-md sm:max-w-5xl">
  <div class="min-h-screen flex flex-col m-auto gap-10 pt-8 sm:gap-0">
    <nav class="sm:flex-shrink-0">
      <This_is_Nav />
    </nav>

    <main class="flex flex-col gap-5 pr-6 pl-6 sm:flex-grow justify-center">
      <This_is_Main msg="Hey, I'm a" />
    </main>
  </div>

  <section 
    id="About" 
    class="m-auto min-h-screen flex flex-col justify-center items-center pr-6 pl-6 gap-10 sm:gap-12">
      <This_is_About />
  </section>

  <section
    id="Project"
    class="m-auto min-h-screen flex flex-col justify-center items-center gap-8 pr-6 pl-6">
      <This_is_Project/>
  </section>

  <footer
    class="self-start sm:max-w-5xl sm:self-stretch">
    <This_is_Footer />
  </footer>
</div>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
