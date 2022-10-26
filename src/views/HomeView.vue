<template>
    <div class="overflow-y-hidden no-scrollbar smooth-scroll overflow-x-scroll">
        <SideBar />
        <div
            class="w-screen sm:h-screen pt-32 sd:pt-0 bg-base flex flex-col-reverse sm:flex-row items-center sm:justify-center text-text sm:pl-44 sm:pr-10 md:pr-24"
        >
            <div
                class="left sm:mr-auto sm:w-[60%] relative p-5 pt-10 sm:pt-0 sm:p-0 w-full"
            >
                <div
                    class="bg-gradient-to-r from-[#eecda3] to-[#ef629f] w-fit text-transparent bg-clip-text font-bold"
                >
                    Watashi no saito e yōkoso
                </div>
                <div
                    class="sm:text-6xl text-5xl font-bold mt-3 sm:leading-[65px] leading-[55px]"
                >
                    Fullstack and Android<br> enthusiastic <br> developer<span
                        class="bg-gradient-to-r from-[#eecda3] to-[#ef629f] w-fit text-transparent bg-clip-text font-bold"
                        >.</span
                    >
                </div>
                <div
                    class="description leading-7 mt-6 w-3/4 font-semibold text-overlay2 tracking-[0.016rem]"
                >
                    Hi, I am a self-taught, full stack developer! Though I love
                    weekend over frontend or backend. I love building websites
                    using VueJS and blazingly fast tools using Rust. As for the
                    databases, I love using MongoDB and PostgreSQL.
                </div>
                <div class="sm:flex w-3/4 mt-9">
                    <a
                        class="bg-gradient-to-r w-full flex items-center justify-center from-[#eecda3] to-[#ef629f] sm:p-4 p-5 sm:w-1/2 rounded-xl text-base font-bold"
                        href="/contact"
                    >
                        Let's talk
                        <vue-feather type="send" size="20" class="ml-2" />
                    </a>
                    <a
                        class="bg-surface0/40 sm:ml-4 mt-4 sm:mt-0 flex items-center justify-center sm:p-4 p-5 sm:w-1/2 w-full rounded-xl text-text font-bold"
                        href="/resume"
                    >
                        Download CV
                        <vue-feather
                            type="download-cloud"
                            size="20"
                            class="ml-4"
                        />
                    </a>
                </div>
            </div>
            <div
                class="right relative w-2/3 sm:w-fit flex items-center justify-center"
            >
                <img
                    src="https://avatars.githubusercontent.com/u/115910279?v=4"
                    class="rounded-full w-3/4 sd:w-auto"
                />
            </div>
        </div>
        <br>
        <hr class="border-surface0">
        <div class="w-screen bg-base pt-10 text-text sm:px-44 relative">
            <div class="text-4xl font-bold pl-8">Skills</div>
            <div class="servics flex mt-2 gap-x-9 flex-wrap">
                <div class="service flex-grow w-96 p-10 rounded-lg">
                    <img src="/designer.png" class="w-14" />
                    <div class="mt-4 text-2xl font-bold">Visual Design</div>
                    <div class="text-gray-300 mt-3 font-bold">
                        Get a new vision to your product
                    </div>
                    <div class="mt-1 text-overlay2 leading-7 font-semibold">
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
                    <div class="mt-1 text-overlay2 leading-7 font-semibold">
                        I build secure, reliable blazingly fast open source web
                        servers with Rust that can powerup serveral tools including your sucky frontend website. 
                    </div>
                </div>
                <div class="service flex-grow w-96 p-10 rounded-lg">
                    <img src="/content.png" class="w-14" />
                    <div class="mt-4 text-2xl font-bold">Content Creator</div>
                    <div class="text-gray-300 mt-3 font-bold">
                        With a great power comes a great responsibility
                    </div>
                    <div class="mt-1 text-overlay2 leading-7 font-semibold">
                        Inspired by many content creator, I wanna become one
                        myself! Coding live, interacting with bunch of people and sharing your
                        thoughts with animations seems pretty fun.
                    </div>
                </div>
                <div class="service flex-grow p-10 rounded-lg">
                    <img src="/android.png" class="w-14" />
                    <div class="mt-4 text-2xl font-bold">Android</div>
                    <div class="text-gray-300 mt-3 font-bold">
                        Android is Android
                    </div>
                    <div class="mt-1 text-overlay2 leading-7 font-semibold">
                        Used to develop cross platform apps using Flutter but
                        switched to native Kotlin. Waiting for tauri-rs to
                        be out for Android, so that I can building blazingly fast Android apps as well.
                    </div>
                </div>
            </div>
        </div>
        <br>
        <hr class="pt-10 border-surface0">
        <div
            class="w-screen min-h-[720px] md:min-h-[560px] pt-10 sm:h-fit bg-base text-text sm:px-44 px-8 relative"
        >
            <div class="text-4xl font-bold">Blogs</div>
            <div class="blog mt-6 sm:flex h-[380px]">
                <img
                    src="/blog.png"
                    class="sm:w-1/2 border-2 border-surface0/40 rounded-lg"
                />
                <div class="info sm:ml-10 pt-5 h-full flex flex-col relative">
                    <div class="tags w-fit">
                        <div
                            class="tag bg-gradient-to-r from-[#eecda3] to-[#ef629f] text-base p-1 rounded-3xl px-4"
                        >
                            Introduction
                        </div>
                    </div>
                    <div class="title mt-4 text-3xl font-bold">
                        Introducing myself, I am kyeboard!
                    </div>
                    <div class="title mt-2 text-overlay1 font-semibold">
                        A summary of my life as a programmer!
                    </div>
                    <div
                        class="title mt-6 text-overlay2 font-semibold leading-8 overflow-fade overflow-scroll"
                    >
                        <!-- Hi, I am tokayakii_, a full stack and an Android -->
                        <!-- developer. I was introduced programming back when I was -->
                        <!-- 9 years old, in class 4. I started by learning Java, -->
                        <!-- which my brother used to teach me during the weekends. -->
                        <!-- Soon, I started to master it by solving bunch of tricky -->
                        <!-- problems and patterns. Once solving enough questions, my -->
                        <!-- brother gave me the idea of solve questions on -->
                        <!-- HackerRank. It had a bunch of complex problems, but I -->
                        <!-- somehow was able to do it. Soon, I tried out other -->
                        <!-- languages, and the next language I learnt was Python. -->
                        <!-- Later, I was introduced to web technologies (HTML, CSS, -->
                        <!-- and JavaScript). Our school used to teach us HTML, -->
                        <!-- adding simple input boxes, forms, divs and stuff like -->
                        <!-- that. I still remember how fuck*ng happy I was when I -->
                        <!-- first added a route to my application using form -->
                        <!-- actions. Well IDK, but the truth is the page changing -->
                        <!-- transition (from one url to another) was one of the main -->
                        <!-- reason of myself becoming a frontend developer -->
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Laborum blanditiis voluptates saepe pariatur velit
                        dolor rem quos fugit aspernatur animi qui, assumenda
                        soluta voluptatum ullam sunt sapiente eaque et enim?
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Itaque facilis voluptatum at sequi nisi labore
                        aperiam eveniet nemo nihil animi nostrum, totam dolorum
                        dolore adipisci quibusdam earum hic voluptas
                        consectetur! Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Accusantium magnam consequuntur fugiat
                        iste libero non debitis eaque dicta eos perferendis in
                        voluptate mollitia corporis, labore facere voluptatem?
                        Reprehenderit, explicabo ducimus!
                    </div>
                    <div class="flex mt-4">
                        <a
                            href="/blog/me"
                            class="text-blue font-semibold flex items-center justify-center text-xs text:text-base"
                            >Read more
                            <vue-feather
                                type="arrow-right"
                                size="20"
                                class="ml-2"
                        /></a>
                        <div
                            class="sumup ml-auto flex bg-surface0/40 p-4 sm:p-3 rounded-xl px-5 sm:px-6 text-xs text-overlay3"
                        >
                            <div
                                class="time flex items-center justify-center"
                            >
                                <vue-feather
                                    type="clock"
                                    size="16"
                                    class="mr-2"
                                />10 min
                            </div>
                            <div
                                class="time ml-6 flex items-center justify-center"
                            >
                                <vue-feather
                                    type="eye"
                                    size="16"
                                    class="mr-2"
                                />1408
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="pt-10 border-surface0">
        <br>
        <div
            class="w-screen pb-12 pt-20 sm:pt-0 bg-base text-text flex items-center justify-center flex-col sm:px-44 relative"
        >
            <div class="text-4xl font-bold text-center">Get in Touch</div>
            <div
                class="sm:w-1/2 px-4 text-overlay1 font-semibold text-center mt-4"
            >
                Wanna talk about a project? Contact me below! I will try to
                respond as soon as possible
            </div>
            <div
                class="w-1/2 mt-4 bg-surface0/40 p-2 rounded-3xl flex items-center justify-center hidden sm:flex"
            >
                <input
                    class="h-full w-full bg-transparent px-4 placeholder-overlay1 focus:outline-none"
                    placeholder="Enter your email address..."
                    type="email"
                />
                <button
                    class="bg-blue px-6 text-black rounded-3xl py-2 font-semibold"
                >
                    Sumbit
                </button>
            </div>
            <div class="w-full mt-4 flex flex-col sm:hidden">
                <input
                    class="h-full bg-surface0/40 p-5 sm:p-0 rounded-3xl mx-4 px-8 placeholder-overlay1 focus:outline-none"
                    placeholder="Enter your email address..."
                />
                <button
                    class="bg-blue px-6 text-black rounded-3xl p-4 mt-4 mx-4 font-semibold"
                >
                    Sumbit
                </button>
            </div>
        </div>
        <div class="w-screen bg-base h-44 pt-14">
            <div
                class="w-[3000px] flex flex-col text-overlay1 items-center pt-6 bg-surface0/40 relative left-1/2 -translate-x-1/2 h-[3000px] rounded-full"
            >
                <img
                    src="https://avatars.githubusercontent.com/u/115910279?v=4"
                    class="h-12 w-12 rounded-full mb-3"
                />
                <div class="flex items-center font-semibold">
                    <i class="fa-solid fa-copyright mr-2"></i>
                    <span>All right reserved | kiyotaka - 2022</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';

</script>
