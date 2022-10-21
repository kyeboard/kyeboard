<template>
    <div
        class="w-screen h-screen bg-base pt-40 text-text flex flex-col items-center text-center"
    >
        <div class="font-extrabold text-4xl">Contact Me</div>
        <div class="mt-4 text-overlay2">
            Any questions or remarks? Just write me a message!
        </div>
        <div class="h-2/3 w-2/3 mt-7 rounded-2xl bg-surface0/20 p-4 flex">
            <div
                class="w-1/3 relative bg-surface0/30 rounded-2xl overflow-hidden text-left p-10 flex flex-col"
            >
                <div
                    class="absolute w-72 h-72 bg-[#ef629f] rounded-full left-full top-full -translate-x-1/2 -translate-y-1/2"
                ></div>
                <div
                    class="absolute w-32 h-32 bg-[#eecda3]/90 rounded-full right-10 bottom-10"
                ></div>
                <div class="font-bold text-2xl">Contact Information</div>
                <div class="font-semibold mt-2 text-overlay2">
                    Fill up the form and I will be back as soon as possible!
                </div>
                <div class="mt-6 text-overlay2 flex items-center font-semibold">
                    <vue-feather type="mail" size="20" class="mr-3" />
                    <div>contact@kiyotaka.xyz</div>
                </div>
                <div class="socials mt-auto text-overlay2 gap-x-7 flex">
                    <a href="https://github.com/tokayakii"
                        ><vue-feather type="github" size="20"></vue-feather
                    ></a>
                    <a
                        href="https://www.linkedin.com/in/purple-light-ab4b2a253/"
                        ><vue-feather type="linkedin" size="20"></vue-feather
                    ></a>
                    <a href="https://twitter.com/tokayakii_"
                        ><vue-feather type="twitter" size="20"></vue-feather
                    ></a>
                    <a href="https://github.com/tokayakii"
                        ><vue-feather type="youtube" size="20"></vue-feather
                    ></a>
                </div>
            </div>
            <div class="w-2/3 ml-6 mt-6 flex flex-col">
                <div class="flex items-start justify-start font-semibold">
                    <div class="wrapper w-full">
                        <div class="text-start mb-1">First name</div>
                        <input
                            class="w-full p-4 text-overlay1 rounded-xl bg-surface0/40 px-6 placeholder-overlay1 mr-4"
                            type="text"
                            placeholder="Your first name..."
                        />
                    </div>
                    <div class="wrapper w-full ml-6">
                        <div class="text-start mb-1">First name</div>
                        <input
                            class="w-full p-4 text-overlay1 rounded-xl bg-surface0/40 px-6 placeholder-overlay1 mr-4"
                            type="text"
                            placeholder="Your last name name..."
                        />
                    </div>
                </div>
                <div class="flex mt-6 items-start justify-start font-semibold">
                    <div class="wrapper w-full">
                        <div class="text-start mb-1">Email address</div>
                        <input
                            class="w-full p-4 rounded-xl text-overlay1 bg-surface0/40 px-6 placeholder-overlay1 mr-4"
                            type="email"
                            placeholder="Your email address..."
                        />
                    </div>
                    <div class="wrapper w-full ml-6">
                        <div class="text-start mb-1">Phone number</div>
                        <input
                            class="w-full p-4 rounded-xl text-overlay1 bg-surface0/40 px-6 placeholder-overlay1 mr-4"
                            type="text"
                            placeholder="Your phone number..."
                        />
                    </div>
                </div>
                <div class="text-start mt-4 font-semibold text-text">
                    Message
                </div>
                <textarea
                    class="w-full h-full mt-1 resize-none rounded-xl bg-surface0/40 p-5 focus:outline-none font-semibold placeholder-overlay1"
                    placeholder="Write your message..."
                ></textarea>
                <button
                    class="w-full p-4 text-base bg-gradient-to-r from-[#eecda3] to-[#ef629f] rounded-xl font-semibold mt-4"
                >
                    Send Message
                </button>
            </div>
        </div>
    </div>
</template>
