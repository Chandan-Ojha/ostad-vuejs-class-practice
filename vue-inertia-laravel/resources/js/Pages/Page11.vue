<script setup>
import NavBar from "@/Component/NavBar.vue";
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <NavBar />
    <div class="container">
        <h4 class="text-center mt-5">Inertia Link</h4>

        <h5>Post|Put|Patch|Delete|Get Request Methods</h5>

        <Link href="/logout" method="post" as="button" type="button"
            >Post Request</Link
        >
        <Link href="/logout" method="put" as="button" type="button"
            >Put Request</Link
        >
        <Link href="/logout" method="patch" as="button" type="button"
            >Patch Request</Link
        >
        <Link href="/logout" method="delete" as="button" type="button"
            >Delete Request</Link
        >
        <Link href="/logout" method="get" as="button" type="button"
            >Get Request</Link
        >

        <h5>Post Back Data Directly</h5>
        <Link
            href="/PostBackRequestFromLink"
            :data="{ name: 'Jhon', city: 'dhaka' }"
            method="post"
            as="button"
            type="button"
        >
            Post Request
        </Link>

        <h5>Post Back With Header</h5>
        <Link
            href="/PostBackRequestFromLink"
            :headers="{ token: 'XYZ-123' }"
            :data="{ name: 'Jhon', city: 'dhaka' }"
            method="post"
            as="button"
            type="button"
            >Post Request</Link
        >

        <h5>Browser history Replace</h5>
        <Link href="/Page10" replace>Browser history Replace</Link>

        <h5>Active states</h5>

        <Link href="/" :class="{ 'text-success': $page.url === '/Page11' }"
            >This Page</Link
        >
        <br />
        <Link href="/" :class="{ ' ': $page.url === '/Page101' }"
            >Another Page</Link
        >
    </div>
</template>
