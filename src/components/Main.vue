<script setup>
    defineProps({
      msg: {
        type: String,
        required: true
      }
    })
    </script>
<template>
        <div class="flex flex-col gap-5 sm:flex-row items-center ">
          <div class="flex flex-col gap-5">
            <h1 class=" text-center text-3xl sm:text-start sm:text-4xl">{{ msg }}
              <span class=" block text-4xl sm:text-5xl "><strong class="text-amber-500">Frontend</strong> Developer</span>
            </h1>
            <h3 class=" text-center text-xl sm:text-start">I like to craft solid and scalable frontend products with great user experience.</h3>
          </div>

            

            <div class=" max-w-sm m-auto sm:max-w-lg ">
              <img class="h-full" src="src/img/porfolio-02-edit.png" alt="Imagen perfil">
            </div>
        </div>

        

        <section class=" relative flex justify-center sm:w-8/12">
          <div class="title-icon absolute right-0 opacity-0 top-14 ">Web design
            <font-awesome-icon class=" ml-1" icon="fa-solid fa-pen-nib" />
          </div>
          <div class="title-icon absolute left-0 opacity-0 top-14 ">Coding 
            <font-awesome-icon class=" ml-1" icon="fa-solid fa-code" />
          </div>
          <div class="title-icon absolute opacity-0 top-14">App Developer 
            <font-awesome-icon class=" ml-1" icon="fa-solid fa-mobile-screen-button" />
          </div>
        </section>
</template>
<style scoped>
  .title-icon{
    animation: up 1.5s forwards;
    }
  @keyframes up{
    from{
    }
    to{
      top:.5rem;
      opacity: 1;
    }
  }
</style>