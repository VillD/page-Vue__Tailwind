<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="flex flex-col gap-4 sm:flex-row items-center">
    <div class="flex flex-col gap-6 sm:gap-8">
      <h1
        class="text-center text-white font-semibold text-3xl sm:text-start sm:text-4xl"
      >
        {{ msg }}
        <span class="font-bold block text-4xl sm:text-5xl">
          <strong class="font-bold text-amber-500">Frontend</strong>
          Developer
        </span>
      </h1>
      <h3 class="text-center text-xl text-white sm:text-start">
        I like to craft solid and scalable frontend products with great user
        experience.
      </h3>
    </div>
    <div class="max-w-sm m-auto sm:max-w-lg">
      <img
        class="h-full"
        src="src/img/porfolio-02-edit.png"
        alt="Imagen perfil"
      />
    </div>
  </div>

  <section class="relative flex justify-center text-white font-light sm:w-8/12">
    <div class="title-icon absolute right-0 opacity-0 top-10">
      Web design
      <font-awesome-icon class="ml-1" icon="fa-solid fa-pen-nib" />
    </div>
    <div class="title-icon absolute left-0 opacity-0 top-10">
      Coding
      <font-awesome-icon class="ml-1" icon="fa-solid fa-code" />
    </div>
    <div class="title-icon absolute opacity-0 top-10">
      App Developer
      <font-awesome-icon class="ml-1" icon="fa-solid fa-mobile-screen-button" />
    </div>
  </section>
</template>
<style scoped>
.title-icon {
  animation: up 1s forwards;
}
@keyframes up {
  from {
  }
  to {
    top: 1.5rem;
    opacity: 1;
  }
}
</style>
