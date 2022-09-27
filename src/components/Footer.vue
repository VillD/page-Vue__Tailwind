<template>
    <nav 
    class="flex flex-col gap-8 font-semibold text-lg pr-2 pl-2 sm:flex-row justify-between pb-8 items-start">
        <a class=" text-2xl font-bold pl-2 pr-2 border-solid border-2 w-min sm:h-min sm:text-3xl" href="">DD.Vill</a>
        <ul class=" flex flex-col gap-4  font-semibold sm:text-xl">
            <li><a href="#About">About me</a></li>
            <li><a href="#Project">Projects</a></li>
        </ul>
        <ul class="flex flex-col gap-4 sm:text-xl">
            <li>Coding</li>
            <li>App Developer</li>
            <li>Web Design</li>
        </ul>
        <ul class=" flex gap-4">
            <li class=" w-6 flex items-center">
                <a class="" href="">
                    <font-awesome-icon class=" fill-black w-full h-full" icon="fa-brands fa-github" />
                </a>
            </li>
            <li class=" w-6 flex items-center">
                <a class="" href="">
                    <font-awesome-icon class=" fill-black w-full h-full" icon="fa-brands fa-instagram" />
                </a>
            </li>
            <li class=" w-6 flex items-center">
                <a class="" href="">
                    <font-awesome-icon class=" fill-black w-full h-full" icon="fa-brands fa-linkedin" />
                </a>
            </li>
        </ul>
    </nav>
</template>