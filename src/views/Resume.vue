<template>
    <div class="w-screen h-screen overflow-scroll bg-base text-text pt-32 px-44 flex">
        <div class="left w-full">
            <div class="bg-surface0/20 w-full p-6 px-8 rounded-lg">
                <div class="info flex w-full">
                    <img
                        src="https://avatars.githubusercontent.com/u/115910279?v=4"
                        class="w-12 h-12 rounded-full"
                    />
                    <div class="wrapper ml-6">
                        <div class="font-bold text-xl">kyeboard</div>
                        <div class="text-overlay1 font-semibold">
                            Junior fullstack developer
                        </div>
                    </div>
                    <button
                        class="w-48 font-semibold h-12 ml-auto bg-gradient-to-r text-sm from-[#ef629f] to-[#eecda3] rounded-lg text-base"
                    >
                        Download Resume
                    </button>
                </div>
                <div class="tabbar flex mt-10">
                    <div class="tab bg-gradient-to-r from-[#ef629f] to-[#eecda3] text-base"><vue-feather type="home" size="21"/> Overview</div>
                    <div class="tab"><vue-feather type="file" size="21" /> Certificates</div>
                    <div class="tab"><vue-feather type="heart" size="21" /> Projects</div>
                    <div class="tab"><vue-feather type="clock" size="21" /> History</div>
                </div>
            </div>
            <div class="bg-surface0/20 mt-6 w-full p-8 px-10 rounded-lg">
                <div class="text-2xl font-bold">All Personal Informations</div>
                <div class="personal_info mt-8">
                    <div class="flex">
                        <div class="left">
                            <div class="card flex items-center justify-center w-fit">
                                <div class="icon bg-surface0/40 flex items-center justify-center p-4 rounded-lg"><vue-feather type="mail" size="18" /></div>
                                <div class="info ml-6">
                                    <div class="text-overlay2 font-bold">me@kyeboard.xyz</div>
                                    <div class="text-overlay1 font-semibold">Email Address</div>
                                </div>
                            </div>
                            <div class="card mt-6 flex items-center justify-center">
                                <div class="icon bg-surface0/40 flex items-center justify-center p-4 rounded-lg"><i class="fa-regular fa-cake-candles"></i></div>
                                <div class="info ml-6">
                                    <div class="text-overlay2 font-bold">22nd September, 2007</div>
                                    <div class="text-overlay1 font-semibold">15 years old</div>
                                </div>
                            </div>

                        </div>
                        <div class="ml-auto mr-44">
                            <div class="card flex items-center justify-center w-fit">
                                <div class="icon bg-surface0/40 flex items-center justify-center p-4 rounded-lg"><vue-feather type="smartphone" size="18" /></div>
                                <div class="info ml-6">
                                    <div class="text-overlay2 font-bold">+91 (933) 091 05 79</div>
                                    <div class="text-overlay1 font-semibold">Indian Number</div>
                                </div>
                            </div>
                            <div class="card mt-6 flex items-center justify-center">
                                <div class="icon bg-surface0/40 flex items-center justify-center p-4 rounded-lg"><vue-feather type="dollar-sign" size="18" /></div>
                                <div class="info ml-6">
                                    <div class="text-overlay2 font-bold">$2000</div>
                                    <div class="text-overlay1 font-semibold">Expected Salary (intern)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br><hr class="border-surface0"><br>
                    <div class="card mt-6 flex items-center justify-center w-fit">
                        <div class="icon bg-surface0/40 flex items-center justify-center p-4 rounded-lg"><vue-feather type="map-pin" size="18" /></div>
                        <div class="info ml-6">
                            <div class="text-overlay2 font-bold">Kolkata, West Bengal, India</div>
                            <div class="text-overlay1 font-semibold">Location</div>
                        </div>
                    </div>
                    <div class="card mt-6 flex items-center justify-center w-fit">
                        <div class="icon bg-surface0/40 flex items-center justify-center p-4 rounded-lg"><vue-feather type="smile" size="18" /></div>
                        <div class="info ml-6">
                            <div class="text-overlay2 font-bold">Remote, Part-Time, Internship, Freelance</div>
                            <div class="text-overlay1 font-semibold">Work Type</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-surface0/20 my-8 w-full p-6 px-10 rounded-lg">
                <div class="text-2xl font-bold">Resume</div>
                <div class="card mt-6 flex items-center justify-center">
                    <div class="icon bg-surface0/40 flex items-center justify-center p-4 rounded-full"><vue-feather type="file-text" size="18" /></div>
                    <div class="font-semibold text-lg ml-6">kyeboard_resume_latest.pdf</div>
                    <button
                        class="w-48 font-semibold h-12 ml-auto flex items-center justify-center bg-surface0/40 text-sm rounded-lg"
                    >
                        <vue-feather type="download-cloud" class="mr-3" />Download
                    </button>
                </div>
            </div>
            <div class="bg-surface0/20 w-full p-6 px-10 rounded-lg">
                <div class="text-2xl font-bold">Skills</div>
                <div class="card mt-6 flex flex-wrap gap-x-4 gap-y-4">
                    <div class="skill bg-surface0/40 p-3 rounded-lg px-6">Kotlin</div>
                    <div class="skill bg-surface0/40 p-3 rounded-lg px-6">HTML / CSS / SASS</div>
                    <div class="skill bg-surface0/40 p-3 rounded-lg px-6">JavaScript / TypeScript</div>
                    <div class="skill bg-surface0/40 p-3 rounded-lg px-6">VueJS</div>
                    <div class="skill bg-surface0/40 p-3 rounded-lg px-6">Rust</div>
                    <div class="skill bg-surface0/40 p-3 rounded-lg px-6">TailwindCSS</div>
                    <div class="skill bg-surface0/40 p-3 rounded-lg px-6">MongoDB</div>
                    <div class="skill bg-surface0/40 p-3 rounded-lg px-6">PostgreSQL</div>
                    <div class="skill bg-surface0/40 p-3 rounded-lg px-6">SurrealDB</div>
                </div>
            </div>
            <div class="bg-surface0/20 w-full mt-8 p-6 px-10 rounded-lg">
                <div class="text-2xl font-bold">Language</div>
                <div class="flex">
                    <div class="card w-80 border-2 border-surface0 rounded-xl p-5 mt-6 flex items-center w-fit">
                        <div class="icon bg-surface0/40 flex items-center justify-center p-4 rounded-full">HN</div>
                        <div class="info ml-6">
                            <div class="text-text font-bold">Hindi</div>
                            <div class="text-overlay1 font-semibold">Native Language</div>
                        </div>
                    </div>
                    <div class="card w-80 ml-4 border-2 border-surface0 rounded-xl p-5 mt-6 flex items-center w-fit">
                        <div class="icon bg-surface0/40 flex items-center justify-center p-4 rounded-full">EN</div>
                        <div class="info ml-6">
                            <div class="text-text font-bold">English</div>
                            <div class="text-overlay1 font-semibold">Intermediate</div>
                        </div>
                    </div>
                </div>
            </div>
            <br><br>
        </div>
        <div class="ml-10 w-[400px]"></div>
    </div>
</template>
