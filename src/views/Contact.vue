<template>
    <div
        class="w-screen h-screen bg-white pt-40 text-gray-800 flex flex-col items-center text-center"
    >
        <div class="font-extrabold text-4xl animate-rise opacity-0">Contact Me</div>
        <div class="mt-4 animate-rise opacity-0 animation-delay-100">
            Any questions or remarks? Just write me a message!
        </div>
        <div class="h-2/3 w-2/3 mt-7 rounded-2xl bg-text/40 p-4 flex animate-rise opacity-0 animation-delay-200">
            <div
                class="w-1/3 relative bg-text/60 rounded-2xl overflow-hidden text-left p-10 flex flex-col"
            >
                <div class="font-bold text-2xl animate-rise opacity-0 animation-delay-220">Contact Information</div>
                <div class="font-semibold mt-4 text-gray-700 animate-rise opacity-0 animation-delay-240">
                    Fill up the form and I will be back as soon as possible!
                </div>
                <div class="mt-6 text-gray-700 flex items-center font-semibold animate-rise opacity-0 animation-delay-260">
                    <vue-feather type="mail" size="20" class="mr-3" />
                    <div>me@kyeboard.me</div>
                </div>
                <div class="socials mt-auto text-gray-700 gap-x-7 flex">
                    <a href="https://github.com/kyeboard" class="animate-rise opacity-0 animation-delay-260"
                        ><vue-feather type="github" size="20"></vue-feather
                    ></a>
                    <a
                        href="https://www.twitch.tv/kyeboard_" class="animate-rise opacity-0 animation-delay-280"
                        ><vue-feather type="twitch" size="20"></vue-feather
                    ></a>
                    <a href="https://twitter.com/kyeboard_" class="animate-rise opacity-0 animation-delay-300"
                        ><vue-feather type="twitter" size="20"></vue-feather
                    ></a>
                    <a href="https://youtube.com/@kyeboard" class="animate-rise opacity-0 animation-delay-320"
                        ><vue-feather type="youtube" size="20"></vue-feather
                    ></a>
                </div>
            </div>
            <div class="w-2/3 ml-6 mt-6 flex flex-col">
                <div class="flex items-start justify-start font-semibold">
                    <div class="wrapper w-full animate-rise opacity-0 animation-delay-200">
                        <div class="text-start mb-1">First name</div>
                        <input
                            v-model="contact_info.first_name"
                            class="w-full p-4 text-gray-800 rounded-xl bg-text/60 px-6 placeholder-overlay1 mr-4"
                            type="text"
                            placeholder="Your first name..."
                        />
                    </div>
                    <div class="wrapper w-full ml-6 animate-rise opacity-0 animation-delay-220">
                        <div class="text-start mb-1">First name</div>
                        <input
                            v-model="contact_info.last_name"
                            class="w-full p-4 text-gray-800 rounded-xl bg-text/60 px-6 placeholder-overlay1 mr-4"
                            type="text"
                            placeholder="Your last name name..."
                        />
                    </div>
                </div>
                <div class="flex mt-6 items-start justify-start font-semibold">
                    <div class="wrapper w-full animate-rise opacity-0 animation-delay-240">
                        <div class="text-start mb-1">Email address</div>
                        <input
                            class="w-full p-4 rounded-xl text-gray-800 bg-text/60 px-6 placeholder-overlay1 mr-4"
                            type="email"
                            v-model="contact_info.email_address"
                            placeholder="Your email address..."
                        />
                    </div>
                    <div class="wrapper w-full ml-6 animate-rise opacity-0 animation-delay-260">
                        <div class="text-start mb-1">Phone number</div>
                        <input
                            class="w-full p-4 rounded-xl text-gray-800 bg-text/60 px-6 placeholder-overlay1 mr-4"
                            type="text"
                            v-model="contact_info.phone_number"
                            placeholder="Your phone number (optional)..."
                        />
                    </div>
                </div>
                <div class="wrapper animate-rise opacity-0 animation-delay-280">
                    <div class="text-gray-800 mt-4 font-semibold text-start">
                        Message
                    </div>
                    <textarea
                        class="w-full h-full mt-1 resize-none rounded-xl bg-text/60 p-5 focus:outline-none font-semibold placeholder-overlay1"
                        placeholder="Write your message..."
                        v-model="contact_info.message"
                    ></textarea>
                </div>
                <button
                    class="w-full p-4 mt-4 text-white mt-auto bg-gray-800 animate-rise opacity-0 animation-delay-280 rounded-xl font-semibold"
                    @click="send_request()"
                >
                    Send Message
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { MeiliSearch } from "meilisearch";
import { v4 } from "uuid";

const contact_info = {
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    message: "",
    id: ""
}

const send_request = async () => {
    const client = new MeiliSearch({
        apiKey: "4d56e6b5e05270b8818193cc12a8c58d114f73306297450a59da11d11afb5fda",
        host: "https://ms-ce712af3e579-1066.sgp.meilisearch.io"
    })

    contact_info.id = v4();

    // Create a new request document
    console.log(await client.index("requests").addDocuments([contact_info]))
}
</script>