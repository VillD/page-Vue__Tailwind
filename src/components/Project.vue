<template>
    <p class="title text-4xl font-bold">Projects</p>
    <div 
    class="flex flex-col gap-8 sm:flex-row justify-between">
        <article 
        class="flex flex-col gap-2 border-4 border-solid rounded-xl p-2">
            <p class=" text-center text-2xl font-semibold ">Order component</p>
            <p class="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ut dicta praesentium eaque delectus</p>
            <div 
            class="img h-60  border-solid rounded-lg border-2 border-gray-500 overflow-hidden sm:max-w-xs h-auto">
                <img class="h-full sm:h-auto " src="../img/sumary-component.jpg"> 
            </div>
        </article>

        <article 
        class="flex flex-col gap-2  border-4 border-solid rounded-xl p-2">
            <p class=" text-center text-2xl font-semibold ">Landing page</p>
            <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia provident necessitatibus vel error</p>
            <div 
            class="img h-60  border-solid rounded-lg border-2 border-gray-500 overflow-hidden sm:max-w-xs h-auto">
                <img class="sm:h-auto" src="../img/landing-page.jpg"> 
            </div>
        </article>

        <article class="flex flex-col gap-2  border-4 border-solid rounded-xl p-2">
            <p class=" text-center text-2xl font-semibold ">Qr component</p>
            <p class=" text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia provident necessitatibus vel error.</p>
            <div 
            class="img h-60 border-solid rounded-lg border-2 border-gray-500 overflow-hidden sm:max-w-xs h-auto">
                <img class="h-full sm:h-auto" src="../img/qr-component.jpg"> 
            </div>
        </article>
    </div>
</template>

<style>
    .title{
        position: relative;
    }
    .title::after{
        content: '';
        position: absolute;
        width:100%;
        height: .2rem;
        background-color: #fff;
        bottom: -8px;
        right: 0;
        transition: .5s ease-in-out;
    }

</style>