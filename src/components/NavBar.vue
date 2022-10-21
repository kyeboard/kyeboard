<script lang="ts" setup>
import { ref } from "vue";

const dropdown = ref<HTMLDivElement | null>(null);

const open_dropdown = () => {
    if (dropdown.value) {
        if (dropdown.value.classList.contains("hidden")) {
            dropdown.value.classList.remove(...["hidden", "animate-shrink"]);
            dropdown.value.classList.add(
                ...["flex", "animate-grow", "opacity-0"]
            );

            dropdown.value.querySelectorAll(".nav-item").forEach((e) => {
                e.classList.remove("animate-fade_out");
                e.classList.add("animate-fade_in");
            });

            dropdown.value
                .querySelector(".quick_links")
                ?.classList.remove("animate-fade_out");

            dropdown.value
                .querySelector(".cross")
                ?.classList.remove("animate-fade_out");

            dropdown.value
                .querySelector(".cross")
                ?.classList.add("animate-fade_in");

            dropdown.value
                .querySelector(".quick_links")
                ?.classList.add("animate-fade_in");
        }
    }
};

const close = () => {
    if (dropdown.value) {
        if (!dropdown.value.classList.contains("hidden")) {
            dropdown.value.querySelectorAll(".nav-item").forEach((e) => {
                e.classList.remove("animate-fade_in");
                e.classList.add("animate-fade_out");
            });

            dropdown.value
                .querySelector(".quick_links")
                ?.classList.remove("animate-fade_in");

            dropdown.value
                .querySelector(".quick_links")
                ?.classList.add("animate-fade_out");

            dropdown.value
                .querySelector(".cross")
                ?.classList.remove("animate-fade_in");

            dropdown.value
                .querySelector(".cross")
                ?.classList.add("animate-fade_out");

            dropdown.value.classList.remove(...["animate-grow"]);

            dropdown.value.classList.add(...["animate-shrink"]);

            setTimeout(() => {
                dropdown.value?.classList.add("hidden");
            }, 480);
        }
    }
};
</script>

<template>
    <div
        class="w-full z-40 h-20 fixed top-0 left-0 border-b-2 backdrop-blur-lg bg-base/20 text-text font-semibold border-b-surface0/40 flex items-center sm:justify-center"
    >
        <div class="left hidden sm:flex">
            <a class="nav-item mr-8" href="/">Home</a>
            <a class="nav-item mx-8" href="/resume">Resume</a>
            <a class="nav-item mx-8" href="/blogs">Blogs</a>
        </div>
        <img
            src="https://avatars.githubusercontent.com/u/115910279?v=4"
            class="h-10 mx-4 sm:mx-8 rounded-full"
        />
        <div class="flex hidden sm:flex">
            <a class="nav-item mx-8" href="/courses">Courses</a>
            <a class="nav-item mx-8" href="/store">Store</a>
            <a class="nav-item ml-8" href="/contact">Contact</a>
        </div>
        <div class="sm:hidden ml-auto mr-5" @click="open_dropdown()">
            <vue-feather type="menu" />
        </div>
        <div
            class="dropdown h-screen flex-col h-[0px] hidden items-center gap-y-7 w-screen fixed top-0 left-0 bg-surface0"
            ref="dropdown"
        >
            <div class="cross ml-auto mr-5 mt-7" @click="close()">
                <vue-feather type="x" />
            </div>
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
