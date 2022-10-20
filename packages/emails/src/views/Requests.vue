<template>
    <div class="w-screen h-screen bg-base text-text p-24">
        <div class="text-3xl font-bold">All pending requests</div>
        <div class="font-semibold text-overlay1 mt-2">
            Well make sure you respond to every one of the requests!
        </div>
    </div>
</template>

<script setup lang="ts">
import Surreal from "surrealdb.js";
import { Suspense } from "vue";

const db = new Surreal("http://127.0.0.1:8000/rpc");
(async () => {
    await db.signin({
        user: "root",
        pass: "root",
    });

    await db.use("test", "test");

    await db.create("request", {
        first_name: "John",
        last_name: "Doe",
        email: "johndoe@gmail.com",
        message: "Hii! I am John Doe and love your finest works!",
    });

    console.log(await db.select("request"));
})();
</script>
