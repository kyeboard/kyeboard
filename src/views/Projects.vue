<template>
<div class="w-screen h-screen bg-base pt-44 px-44 text-text">
    <div class="text-3xl font-bold">Projects</div>
    <div class="text-semibold text-overlay2 mt-1 font-semibold">All the awesome projects that I have built</div>
    <div class="mt-10">
        <div class="project border border-surface0 bg-surface0/20 w-[400px] rounded-xl" v-for="project in projects" :key="project.id">
            <a :href="project.homepage">
                <img :src="project.poster" class="w-full h-52 object-cover object-left-top border-b border-b-surface0 rounded-tl-xl rounded-tr-xl" />
                <div class="title mt-6 font-bold text-2xl px-5">{{project.id}}</div>
                <div class="text-overlay2 px-5 my-2 text-md font-semibold">{{project.description}}</div>
                <div class="flex items-center px-5 mt-4 mb-6 font-semibold text-blue">
                    <vue-feather type="link" size="16" class="mr-2 text-text" />
                    <a :href="project.homepage">{{project.homepage}}</a>
                </div>
            </a>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import { MeiliSearch } from "meilisearch";
import {ref} from "vue";

const client = new MeiliSearch({
    host: "https://app-kyeboardblogs-prod-001.azurewebsites.net/",
    apiKey: "083abcf2aca9a0d3eea50bce8c355586baaa4d6f8eadfdef3922dc7065842245" // This API key has read only access to the documents, so dont waste time, you get it right?
})

// Project
interface Project {
    id: string,
    description: string,
    homepage: string,
    poster: string,
    tags: Array<string>
}

const projects = ref<Array<Project>>([]);

(async () => {
    projects.value = (await (await client.getIndex("projects")).getDocuments()).results as Array<Project>;
    console.log(projects.value)
})()
</script>
