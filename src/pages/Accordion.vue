<template>
  <section class="container page-section">

    <Header>
      Interactive Accordion
    </Header>

    <div class="accordion">

      <div
        v-for="(item, key) in accordionItems"
        :key="key"
        class="accordion-item"
      >

        <button
          class="accordion-button"
          @click="toggleItem(key)"
        >
          {{ item.title }}
        </button>

        <div
          v-if="activeItem === key"
          class="accordion-content"
        >
          <p>
            {{ item.content }}
          </p>
        </div>

      </div>

    </div>

  </section>
</template>

<script setup>

import { ref } from "vue";

const activeItem = ref(null);

const accordionItems = {
  first: {
    title: "What is Vue?",
    content: "Vue is a JavaScript framework used to build user interfaces."
  },

  second: {
    title: "What is Nuxt?",
    content: "Nuxt is a framework built on top of Vue."
  },

  third: {
    title: "Why use Nuxt?",
    content: "Nuxt provides routing, layouts, server features, and more."
  }
};

function toggleItem(key) {

  if (activeItem.value === key) {
    activeItem.value = null;
  } else {
    activeItem.value = key;
  }

}

</script>