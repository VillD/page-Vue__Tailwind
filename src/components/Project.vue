<script setup>
import { useProjectStore } from "../store/ProjectStore";

const projectStore = useProjectStore();
// import imgSumary from "../img/sumary-component.jpg";
// import imgLanding from "../img/landing-page.jpg";
// import imgQr from "../img/qr-component.jpg";

// const projects = [
//   {
//     id: 0,
//     title: "Order",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ut dicta praesentium eaque delectus",
//     image: imgSumary,
//   },
//   //   {
//   //     id: 1,
//   //     title: "Landing page",
//   //     description:
//   //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ut dicta praesentium eaque delectus",
//   //     image: imgLanding,
//   //   },
//   {
//     id: 2,
//     title: "Qr Component",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ut dicta praesentium eaque delectus",
//     image: imgQr,
//   },
// ];
</script>
<template>
  <p class="title text-4xl font-bold">Projects</p>
  <div class="flex flex-col gap-8 sm:flex-row justify-between">
    <article
      v-for="project in projectStore.projects"
      :key="project.id"
      class="flex flex-col gap-2 border-4 border-solid rounded-xl p-2"
    >
      <p class="text-center text-2xl font-semibold">{{ project.title }}</p>
      <p class="text-xl">
        {{ project.description }}
      </p>
      <div class="img h-60 border-solid rounded-lg overflow-hidden sm:max-w-xs">
        <img class="h-full sm:object-cover" :src="project.image" />
      </div>
    </article>
  </div>
  <div class="flex gap-5">
    <button
      @click="projectStore.push"
      class="border-2 p-2 border-black font-semibold rounded-full"
    >
      Increment
    </button>
    <button
      @click="projectStore.pop()"
      class="border-2 p-2 font-semibold bg-blue-800 text-white rounded-full"
    >
      Decrement
    </button>
  </div>
</template>

<style>
.title {
  position: relative;
}
.title::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.2rem;
  background-color: #fff;
  bottom: -8px;
  right: 0;
  transition: 0.5s ease-in-out;
}
</style>
