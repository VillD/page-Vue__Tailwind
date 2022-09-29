<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import This_is_Nav from "./components/Nav.vue";
import This_is_Main from "./components/Main.vue";
import This_is_About from "./components/AboutMe.vue";
import This_is_Project from "./components/Project.vue";
import This_is_Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col">
    <!--max-w-md-->

    <div class="main-bg w-screen flex justify-center">
      <div class="max-w-md sm:max-w-5xl">
        <div class="min-h-screen flex flex-col m-auto gap-10 pt-8 sm:gap-0">
          <nav class="sm:flex-shrink-0">
            <This_is_Nav />
          </nav>

          <main
            class="flex flex-col gap-5 pr-4 pl-4 sm:flex-grow justify-center"
          >
            <This_is_Main msg="Hey, I'm a" />
          </main>
        </div>
      </div>
    </div>

    <div class="about-bg">
      <section
        id="About"
        class="max-w-md m-auto min-h-screen flex flex-col justify-center items-center pr-6 pl-6 gap-10 sm:gap-12 sm:max-w-5xl"
      >
        <This_is_About />
      </section>
    </div>

    <section
      id="Project"
      class="max-w-md m-auto min-h-screen flex flex-col justify-center items-center gap-8 pr-6 pl-6 sm:max-w-5xl"
    >
      <This_is_Project />
    </section>
  </div>

  <footer class="max-w-md pl-6 pr-6 sm:max-w-5xl m-auto">
    <This_is_Footer />
  </footer>
</template>
<style scoped>
.main-bg {
  width: 100vw;
  background-image: linear-gradient(
    to bottom,
    hsl(226, 66%, 55%) 80%,
    hsl(53, 94%, 57%) 10%
  );
}
.about-bg {
  width: 100vw;
  background-color: hsl(53, 94%, 57%);
}
@media (min-width: 640px) {
  .main-bg {
    width: calc(100vw - 16.5px);
    background-image: linear-gradient(
      to right,
      hsl(226, 66%, 55%) 80%,
      hsl(53, 94%, 57%) 10%
    );
  }
  .about-bg {
    width: calc(100vw - 16.5px);
    background-color: hsl(53, 94%, 57%);
  }
}
</style>
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
