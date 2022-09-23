<script setup>
    defineProps({
      msg: {
        type: String,
        required: true
      }
    })
    </script>
<template>
        <div class=" flex-grow">
            <h1 class="">{{ msg }}</h1>
            <p>I like to craft solid and scalable frontend products with great user experience</p>
        </div>
        <div class=" flex-grow gap-2 w-44 h-44 bg-gray-500">
            <img src="" alt="">
        </div>


</template>