<template>
<div class="flex w-screen h-screen bg-white absolute">
    <div class="gradient-circle absolute bg-red top-10 -left-64"></div>
    <div class="wrapper absolute w-full h-full flex">
        <div class="flex flex-col justify-center px-24 w-1/2">
            <a href="/blog/me" class="overview z-2 text-gray-600 font-bold text-md flex items-center animate-rise opacity-0">
                Get a quick overview of me <vue-feather type="arrow-right" size="20" class="ml-2" />
            </a>
            <div class="title text-6xl font-bold mt-5 leading-[70px] text-gray-900">
                <div class="animate-rise opacity-0">Fullstack and Android</div>
                <div class="animate-rise opacity-0 animation-delay-75">Enthusiastic</div>
                <div class="animate-rise opacity-0 animation-delay-150">Developer.</div>
            </div>
            <div class="description mt-5 w-[450px] text-gray-600 font-semibold font-semibold animate-rise opacity-0 animation-delay-75">
                Hi, I am kyeboard, an average weekend lover, a frontend developer and a Rustacean! I love making blazingly fast tools for the homies.
            </div>
            <div class="mt-8 w-fit flex gap-x-6 text-sm font-bold animate-rise opacity-0">
                <button class="flex items-center bg-gray-900 px-14 py-4 text-white rounded-xl">Download CV <vue-feather type="download-cloud" size="20" class="ml-4" /> </button>
                <button class="flex items-center ml-4 px-6"><vue-feather type="send" size="20" class="mr-3" /> Contact Me</button>
            </div>
        </div>
        <div class="right w-1/2 pb-20 relative h-full flex flex-col items-center justify-center">
            <div class="image flex w-fit mt-10 absolute animate-rise animation-delay-75 opacity-0">
                <img src="/profile.png" class="w-[25rem] h-[25rem] rounded-3xl z-10 absolute" />
                <div class="mark w-[25rem] h-[25rem] bg-gray-400/20 rounded-2xl -translate-y-10 translate-x-10"></div>
            </div>
            <div class="bench mt-auto text-2xl font-bold w-[25rem] flex gap-x-28 justify-center">
                <div class="github flex gap-y-2 flex-col items-center justify-center animate-rise animation-delay-200 opacity-0">
                    <div class="number text-4xl">{{followers}}</div>
                    <div class="title text-xl">Followers</div>
                </div>
                <div class="github flex gap-y-2 flex-col items-center justify-center animate-rise animation-delay-220 opacity-0">
                    <div class="number text-4xl">{{stars}}</div>
                    <div class="title text-xl">Stars</div>
                </div>
                <div class="github flex gap-y-2 flex-col items-center justify-center animate-rise animation-delay-240 opacity-0">
                    <div class="number text-4xl">{{projects}}</div>
                    <div class="title text-xl">Project</div>
                </div>
            </div>
        </div>

    </div>
</div>
<div class="mt-14 text-gray-700 flex gap-x-5 absolute bottom-6 left-24">
    <a href="https://www.twitch.tv/kyeboard_"  class="animate-rise opacity-0 animation-delay-200">
        <vue-feather type="twitch" class="mr-4" size="20" />
    </a>
    <a href="https://www.github.com/kyeboard" class="animate-rise opacity-0 animation-delay-210">
        <vue-feather type="github" class="mr-4" size="20" />
    </a>
    <a href="https://www.gitlab.com/kyeboard" class="animate-rise opacity-0 animation-delay-220">
        <vue-feather type="gitlab" class="mr-4" size="20" />
    </a>
    <a href="https://www.twitter.com/kyeboard_" class="animate-rise opacity-0 animation-delay-230">
        <vue-feather type="twitter" class="mr-4" size="20" />
    </a>
    <a href="https://www.instagram.com/thekyeboard" class="animate-rise opacity-0 animation-delay-240">
        <vue-feather type="instagram" class="mr-4" size="20" />
    </a>
    <a href="https://www.youtube.com/@kyeboard" class="animate-rise opacity-0 animation-delay-250">
        <vue-feather type="youtube" class="mr-4" size="20" />
    </a>
    <a href="mailto:me@kyeboard.me" class="animate-rise opacity-0 animation-delay-260">
        <vue-feather type="mail" class="mr-4" size="20" />
    </a>
    <a href="https://www.github.com/sponsors/kyeboard" class="animate-rise opacity-0 animation-delay-260">
        <vue-feather type="heart" class="mr-4" size="20" />
    </a>
</div>
<img src="/arrow.png" alt="Arrow" class="arrow absolute top-1/2 w-28 left-1/3 rotate-[60deg] animate-rise opacity-0">
<div class="dot w-4 absolute top-44 left-[40rem] h-4 bg-peach rounded-full absolute animate-grow"></div>
<div class="dot w-4 absolute top-52 left-[60rem] h-4 bg-green rounded-full absolute animate-grow"></div>
<div class="dot w-5 absolute top-[30rem] left-[55rem] h-5 bg-blue rounded-full absolute animate-grow"></div>
<div class="dot w-2 absolute top-[35rem] left-[60rem] h-2 bg-red rounded-full absolute animate-grow"></div>
<div class="dot w-5 absolute right-[10rem] top-[10rem] h-5 bg-sky rounded-full absolute animate-grow"></div>
<div class="dot w-2 absolute right-[15rem] top-[20rem] h-2 bg-teal rounded-full absolute animate-grow"></div>
<div class="dot w-3 absolute right-[15rem] bottom-[10rem] h-3 bg-teal rounded-full absolute animate-grow"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const followers = ref<number>(0);
const stars = ref<number>(0);
const projects = ref<number>(0);

(async () => {
    // Get the followers
    followers.value = (await (await fetch("https://api.github.com/users/kyeboard")).json()).followers

    // Get the total number of stars
    let _stars = 0
    const repos = (await (await fetch("https://api.github.com/users/kyeboard/repos")).json());
    projects.value = repos.length;

    for(const repo of repos) {
        _stars += repo.stargazers_count
    }

    stars.value = _stars

})()

</script>