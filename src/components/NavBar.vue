<template>
    <div
        class="navbar absolute z-10 flex w-full items-center px-6 sm:px-20 py-8 font-medium sm:bg-white/40 backdrop-blur-lg"
    >
        <div class="left">
            <div class="title font-bold text-3xl tracking-wide dancing-script">
                kyeboard
            </div>
        </div>
        <div class="mx-auto font-semibold text-gray-700 hidden sm:flex gap-x-14">
            <a href="/">Home</a>
            <a href="/resume">Resume</a>
            <a href="/blogs">Blogs</a>
            <a href="/courses">Courses</a>
            <a href="/projects">Projects</a>
            <a href="/gaming">Games</a>
            <a href="/contact">Contact</a>
        </div>

        <div class="sm:hidden ml-auto cursor-pointer" @click="openDropdown()">
            <vue-feather type="menu" size="20" />
        </div>

        <div class="hidden dropdown-menu overlay backdrop-blur-lg absolute top-0 left-0 w-screen px-6 h-screen flex bg-white flex-col pt-9" ref="dropdown_menu">
            <div class="cross ml-auto cursor-pointer" @click="closeDropdown()">
                <vue-feather type="x" size="20" />
            </div>
            <div class="flex flex-col gap-y-8 wrapper items-center pt-10">
                <a href="/">Home</a>
                <a href="/resume">Resume</a>
                <a href="/blogs">Blogs</a>
                <a href="/courses">Courses</a>
                <a href="/projects">Projects</a>
                <a href="/gaming">Games</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dropdown_menu = ref<HTMLDivElement | null>(null);

const openDropdown = () => {
    dropdown_menu.value?.classList.remove(...["hidden", "animate-decrease"])
    dropdown_menu.value?.classList.add(...["animate-increase"])
}

const closeDropdown = () => {
    dropdown_menu.value?.classList.remove(...["animate-increase"])
    dropdown_menu.value?.classList.add(...["animate-decrease"])

    setTimeout(() => {
        dropdown_menu.value?.classList.add(...["hidden"])
    }, 500)
}
</script>