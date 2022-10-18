<template>
    <div class="overflow-y-hidden no-scrollbar overflow-x-scroll">
        <SideBar />
        <div
            class="w-screen h-screen bg-base flex items-center justify-center text-text px-44"
        >
            <div class="left mr-auto w-[40%] relative">
                <div
                    class="bg-gradient-to-r from-[#eecda3] to-[#ef629f] w-fit text-transparent bg-clip-text font-bold"
                >
                    Watashi no saito e yōkoso
                </div>
                <div class="text-6xl font-bold mt-3 leading-[65px]">
                    Fullstack and Android enthusiastic developer<span
                        class="bg-gradient-to-r from-[#eecda3] to-[#ef629f] w-fit text-transparent bg-clip-text font-bold"
                        >.</span
                    >
                </div>
                <div
                    class="description leading-6 mt-6 font-semibold text-overlay2 tracking-[0.018rem]"
                >
                    Hi, I am a self-taught, full stack developer! Though I love
                    weekend over frontend or backend. I love building websites
                    using VueJS and blazingly fast tools using Rust. As for the
                    databases, I love using MongoDB and PostgreSQL.
                </div>
                <div class="flex w-3/4 mt-9">
                    <button
                        class="bg-gradient-to-r flex items-center justify-center from-[#eecda3] to-[#ef629f] p-4 w-1/2 rounded-xl text-base font-bold"
                    >
                        Let's talk
                        <vue-feather type="send" size="20" class="ml-2" />
                    </button>
                    <button
                        class="bg-surface0/40 ml-4 flex items-center justify-center p-4 w-1/2 rounded-xl text-text font-bold"
                    >
                        Download CV
                        <vue-feather
                            type="download-cloud"
                            size="20"
                            class="ml-4"
                        />
                    </button>
                </div>
            </div>
            <div class="right relative">
                <img
                    src="https://avatars.githubusercontent.com/u/115910279?v=4"
                    class="rounded-full"
                />
                <div
                    class="w-full h-full bg-base/30 flex items-center justify-center absolute top-0 left-0"
                >
                    <div
                        class="w-28 h-28 rounded-full relative bg-text/10 backdrop-blur"
                    >
                        <div class="text rounded info p-1.5 text-sm">
                            Learn about me
                        </div>
                        <div
                            class="play absolute top-1/2 flex items-center justify-center left-1/2 h-fit bg-text text-base -translate-x-1/2 p-3 rounded-full -translate-y-1/2"
                        >
                            <vue-feather type="play" size="14" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="absolute flex items-center justify-center bottom-10 animate-bounce"
            >
                Scroll down <vue-feather type="chevron-down" class="ml-2" />
            </div>
        </div>
        <div class="w-screen bg-base pt-10 text-text px-44 relative">
            <div class="text-4xl font-bold">Services</div>
            <div class="servics flex mt-14 gap-x-9 flex-wrap gap-y-9">
                <div class="service flex-grow w-96 p-10 rounded-lg">
                    <img src="/designer.png" class="w-14" />
                    <div class="mt-4 text-2xl font-bold">Visual Design</div>
                    <div class="text-gray-300 mt-3 font-bold">
                        Get a new vision to your product
                    </div>
                    <div class="mt-1 text-overlay2 font-semibold">
                        I have recently started designing web pages. Not really
                        good to it, but I am trying my best to master it.
                        Creativity doesn't wait for that perfect moment.
                    </div>
                </div>
                <div class="service flex-grow w-96 p-10 rounded-lg">
                    <img src="/server.png" class="w-14" />
                    <div class="mt-4 text-2xl font-bold">Server</div>
                    <div class="text-gray-300 mt-3 font-bold">
                        Secure and blazingly fast servers
                    </div>
                    <div class="mt-1 text-overlay2 font-semibold">
                        I build secure and blazingly fast open source web
                        servers with Rust that can powerup serveral tools. They
                        are 100% reliable!
                    </div>
                </div>
                <div class="service flex-grow w-96 p-10 rounded-lg">
                    <img src="/cloud.png" class="w-14" />
                    <div class="mt-4 text-2xl font-bold">Cloud</div>
                    <div class="text-gray-300 mt-3 font-bold">
                        Heavy load on someone's computer
                    </div>
                    <div class="mt-1 text-overlay2 font-semibold">
                        Deploying to cloud has never been easier! AWS, GCP and
                        Azure are my keen interests. Hoping to build my own
                        cloud in future!
                    </div>
                </div>
                <div class="service flex-grow w-96 p-10 rounded-lg">
                    <img src="/content.png" class="w-14" />
                    <div class="mt-4 text-2xl font-bold">Content Creator</div>
                    <div class="text-gray-300 mt-3 font-bold">
                        With a great power comes a great responsibility
                    </div>
                    <div class="mt-1 text-overlay2 font-semibold">
                        Inspired by many content creator, I wanna become one
                        myself! It looks fun, coding live and sharing your
                        thoughts with animations.
                    </div>
                </div>
                <div class="service flex-grow w-96 p-10 rounded-lg">
                    <img src="/product.png" class="w-14" />
                    <div class="mt-4 text-2xl font-bold">Product Designer</div>
                    <div class="text-gray-300 mt-3 font-bold">
                        Enriching shops with beautiful merchandise
                    </div>
                    <div class="mt-1 text-overlay2 font-semibold">
                        Who does not want their creativity to be IRL? I often
                        design merchandise to make it look beautiful and add it
                        to my own shop!
                    </div>
                </div>
                <div class="service flex-grow w-96 p-10 rounded-lg">
                    <img src="/android.png" class="w-14" />
                    <div class="mt-4 text-2xl font-bold">Android</div>
                    <div class="text-gray-300 mt-3 font-bold">
                        Android is Android
                    </div>
                    <div class="mt-1 text-overlay2 font-semibold">
                        Used to develop cross platform apps using Flutter but
                        soon switched to native Kotlin. Waiting for tauri-rs to
                        be out for Android!
                    </div>
                </div>
            </div>
        </div>
        <div class="w-screen py-12 bg-base pt-10 text-text px-44 relative">
            <div class="text-4xl font-bold">Blogs</div>
            <div class="blog mt-10 flex h-[380px]">
                <img
                    src="/blog.png"
                    class="w-1/2 border-2 border-surface0/40 rounded-lg"
                />
                <div class="info ml-10 pt-5 h-full flex flex-col relative">
                    <div class="tags w-fit">
                        <div
                            class="tag bg-gradient-to-r from-[#eecda3] to-[#ef629f] text-base p-1 rounded-3xl px-4"
                        >
                            Introduction
                        </div>
                    </div>
                    <div class="title mt-4 text-3xl font-bold">
                        Introducing myself, I am tokayakii_!
                    </div>
                    <div class="title mt-2 text-overlay1 font-semibold">
                        A summary of my life as a programmer!
                    </div>
                    <div
                        class="title mt-6 text-overlay2 font-semibold leading-8 overflow-fade overflow-scroll"
                    >
                        Hi, I am tokayakii_, a full stack and an Android
                        developer. I was introduced programming back when I was
                        9 years old, in class 4. I started by learning Java,
                        which my brother used to teach me during the weekends.
                        Soon, I started to master it by solving bunch of tricky
                        problems and patterns. Once solving enough questions, my
                        brother gave me the idea of solve questions on
                        HackerRank. It had a bunch of complex problems, but I
                        somehow was able to do it. Soon, I tried out other
                        languages, and the next language I learnt was Python.
                        Later, I was introduced to web technologies (HTML, CSS,
                        and JavaScript). Our school used to teach us HTML,
                        adding simple input boxes, forms, divs and stuff like
                        that. I still remember how fuck*ng happy I was when I
                        first added a route to my application using form
                        actions. Well IDK, but the truth is the page changing
                        transition (from one url to another) was one of the main
                        reason of myself becoming a frontend developer
                    </div>
                    <div class="flex mt-4">
                        <a href="/blog/me" class="text-blue font-semibold flex items-center justify-center">Read more <vue-feather type="arrow-right"  size="20" class="ml-2"/></a>
                        <div class="sumup ml-auto flex bg-surface0/40 p-2 rounded-xl px-5">
                            <div class="time flex items-center justify-center"><vue-feather type="clock" size="16" class="mr-2" />10 min</div>
                            <div class="time ml-6 flex items-center justify-center"><vue-feather type="eye" size="16" class="mr-2" />1408</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-screen py-12 bg-base pt-32 text-text flex items-center justify-center flex-col px-44 relative">
            <div class="text-4xl font-bold text-center">Get in Touch</div>
            <div class="w-1/2 text-overlay1 font-semibold text-center mt-4">Wanna talk about a project? Contact me below! I will try to respond as soon as possible</div>
            <div class="w-1/2 flex mt-4 bg-surface0/40 p-2 rounded-3xl flex items-center justify-center">
                <input class="h-full w-full bg-transparent px-4 placeholder-overlay1 focus:outline-none" placeholder="Enter your email address..." />
                <button class="bg-blue px-6 text-black rounded-3xl py-2 font-semibold">Sumbit</button>
            </div>
        </div>
        <div class="w-screen h-52 pt-14 bg-base">
            <div class="w-[1600px] flex flex-col text-overlay1 items-center pt-12 bg-surface0/40 relative left-1/2 -translate-x-1/2 h-[1600px] rounded-full">
                <img
                    src="https://avatars.githubusercontent.com/u/115910279?v=4"
                    class="h-12 w-12 rounded-full mb-6"
                />
                <div class="flex items-center justify-center font-semibold">
                    <i class="fa-solid fa-copyright mr-2"></i>
                    <span>All right reserved | tokayakii_ - 2022</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CircleType from "circletype";
import SideBar from "../components/SideBar.vue";
import { onMounted } from "vue";

onMounted(() => {
    const circletype = new CircleType(document.querySelector(".rounded"));

    circletype.radius(48);
});
</script>
