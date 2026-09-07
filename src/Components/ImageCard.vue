<template>
  <div class="image-card">

    <img
      :src="src"
      :alt="alt"
      :title="title"
      :class="{ 'image-border': borderEnabled }"
      @click="toggleBorder"
    >

    <h2>{{ title }}</h2>

    <slot></slot>

  </div>
</template>

<script>
export default {

  props: {
    src: {
      type: String,
      required: true
    },

    alt: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      borderEnabled: false
    };
  },

  methods: {

    toggleBorder() {
      this.borderEnabled = !this.borderEnabled;
    }

  }
};
</script>