<script setup lang="ts">
import SideBar from "../components/SideBar.vue"
</script>

<template>
<SideBar />
<div class="w-screen h-screen bg-base flex items-center justify-center text-text px-44">
    <div class="left mr-auto w-[40%] relative">
        <div class="bg-gradient-to-r from-[#eecda3] to-[#ef629f] w-fit text-transparent bg-clip-text font-bold">Watashi no saito e yōkoso</div>
        <div class="text-6xl font-bold mt-3 leading-[65px]">
            Fullstack and Android enthusiastic developer<span class="bg-gradient-to-r from-[#eecda3] to-[#ef629f] w-fit text-transparent bg-clip-text font-bold">.</span>
        </div>
        <div class="description mt-6 font-semibold text-overlay2 tracking-[0.018rem]">Hi, I am a self-taught, full stack developer! Though I love weekend over frontend or backend. I love building websites using VueJS and blazingly fast tools using Rust. As for the databases, I love using MongoDB and PostgreSQL.</div>
        <div class="flex w-3/4 mt-9">
            <button class="bg-gradient-to-r flex items-center justify-center from-[#eecda3] to-[#ef629f] p-4 w-1/2 rounded-xl text-base font-bold">
                Let's talk <vue-feather type="send" size="20" class="ml-2" />
            </button>
            <button class="bg-surface0 ml-4 flex items-center justify-center p-4 w-1/2 rounded-xl text-text font-bold">
                Download CV <vue-feather type="download-cloud" size="20" class="ml-4" />
            </button>
        </div>
    </div>
    <div class="right relative">
        <img src="https://avatars.githubusercontent.com/u/115910279?v=4" class="rounded-full" />
        <div class="w-full h-full bg-base/30 flex items-center justify-center absolute top-0 left-0">
            <div class="w-24 h-24 rounded-full bg-text/10 backdrop-blur">
                <div class="text info">Learn about me</div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import CircleType from "circletype";
import { onMounted } from "vue"

onMounted(() => {
    const circletype = new CircleType(document.querySelector(""))
})
</script>

