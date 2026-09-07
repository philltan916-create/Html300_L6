<template>
  <nav class="navbar">
    <div class="navbar-container">

      <NuxtLink to="/" class="navbar-brand">
        Vue Demo
      </NuxtLink>

      <ul class="navbar-links">

        <li
          v-for="link in navLinks"
          :key="link.name"
        >
          <NuxtLink
            :to="link.path"
            class="nav-link"
          >
            {{ link.name }}
          </NuxtLink>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script setup>
const navLinks = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Images",
    path: "/images"
  },
  {
    name: "Accordion",
    path: "/accordion"
  },
  {
    name: "Grid",
    path: "/grid"
  }
];
</script>