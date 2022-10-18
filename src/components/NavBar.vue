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
        <div class="sm:hidden ml-auto mr-5">
            <vue-feather type="menu" />
        </div>
    </div>
</template>
