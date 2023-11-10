<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container">
            <Link class="navbar-brand" href="/">Laravel-Vue</Link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <Link class="nav-link" href="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/Page1">Page1</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/Page2">Page2</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/Page3">Page3</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/Page4">Page4</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/Page5">Page5</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar-custom {
    background-color: #e3f2fd;
}

.navbar-custom .navbar-brand {
    color: #1565c0;
}

.navbar-custom .nav-link {
    color: #1565c0;
}

.navbar-custom .nav-link:hover {
    color: #0d47a1;
}
</style>
