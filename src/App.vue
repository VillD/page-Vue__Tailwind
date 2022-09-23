<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'
</script>

<template>

  <div class=" flex flex-col max-w-lg m-auto gap-8">
    <nav class="pt-4">
      <Nav />
    </nav>

    <main class="flex flex-col gap-4">
      <Main msg="Frontend developer" />
    </main>
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
