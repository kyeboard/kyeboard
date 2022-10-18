<script lang="ts" setup>
import {ref} from 'vue';


const dropdown = ref<HTMLDivElement | null>(null);

const open_dropdown = () => {
    if(dropdown.value) {
        if(dropdown.value.classList.contains("hidden")) {
            dropdown.value.classList.remove("hidden")
            dropdown.value.classList.add(...["flex" , "animate-grow" , "opacity-0"])

            dropdown.value.querySelectorAll(".nav-item").forEach(e => {
                e.classList.add("animate-fade_in")
                console.log("HEHE")
            })
            
            dropdown.value.querySelector(".quick_links")?.classList.add("animate-fade_in")
        }
    }
}
</script>

<template>
    <div
        class="w-full z-40 h-20 fixed top-0 left-0 border-b-2 backdrop-blur-lg bg-base/20 text-text font-semibold border-b-surface0/40 flex items-center sm:justify-center"
    >
        <div class="left hidden sm:flex">
            <div class="nav-item mr-8">Home</div>
            <div class="nav-item mx-8">Portfolio</div>
            <div class="nav-item mx-8">Blogs</div>
        </div>
        <img
            src="https://avatars.githubusercontent.com/u/115910279?v=4"
            class="h-10 mx-4 sm:mx-8 rounded-full"
        />
        <div class="flex hidden sm:flex">
            <div class="nav-item mx-8">Courses</div>
            <div class="nav-item mx-8">Store</div>
            <div class="nav-item ml-8">Contact</div>
        </div>
        <div class="sm:hidden ml-auto mr-5" @click="open_dropdown()">
            <vue-feather type="menu" />
        </div>
        <div class="dropdown h-screen flex-col h-[0px] items-center pt-10 gap-y-7 w-screen fixed top-0 left-0 bg-surface0 hidden" ref="dropdown">
            <div class="nav-item">Home</div>
            <div class="nav-item">Portfolio</div>
            <div class="nav-item">Blogs</div>
            <div class="nav-item">Courses</div>
            <div class="nav-item">Store</div>
            <div class="nav-item">Contact</div>
            <div class="quick_links flex gap-x-8 mt-8 text-overlay2">
                <a href="https://gitlab.com/tokayakii"
                    ><vue-feather type="gitlab" size="21"></vue-feather
                ></a>
                <a href="https://github.com/tokayakii"
                    ><vue-feather type="github" size="21"></vue-feather
                ></a>
                <a href="https://www.linkedin.com/in/purple-light-ab4b2a253/"
                    ><vue-feather type="linkedin" size="21"></vue-feather
                ></a>
                <a href="https://twitter.com/tokayakii_"
                    ><vue-feather type="twitter" size="21"></vue-feather
                ></a>
                <a href="https://www.twitch.tv/tokayakii_"
                    ><vue-feather type="twitch" size="21"></vue-feather
                ></a>
                <a href="https://github.com/tokayakii"
                    ><vue-feather type="youtube" size="21"></vue-feather
                ></a>
            </div>
        </div>
    </div>
</template>
