<template>

  <section class="container page-section">

    <Header>
      Welcome to My Nuxt Website
    </Header>

    <p class="page-intro">
      This website was created using Nuxt and Vue.
    </p>

    <div class="feature-grid">

      <div
        v-for="feature in features"
        :key="feature.title"
        class="feature-card"
      >

        <h2>
          {{ feature.title }}
        </h2>

        <p>
          {{ feature.description }}
        </p>

      </div>

    </div>

  </section>

  <section class="container page-section">

    <Header>
      Products From an API
    </Header>

    <div
      v-if="products"
      class="api-grid"
    >

      <ApiCard
        v-for="product in products.products"
        :key="product.id"

        :title="product.title"
        :description="product.description"
        :image="product.thumbnail"
        :category="product.category"
        :price="product.price"
        :rating="product.rating"
        :brand="product.brand || 'Unknown'"
        :stock="product.stock"
      />

    </div>

    <p v-else>
      Loading products...
    </p>

  </section>

</template>


<script setup>

const {
  data: products
} = await useFetch(
  "https://dummyjson.com/products"
);

const features = [

  {
    title: "Responsive Images",
    description:
      "View responsive images using Vue components."
  },

  {
    title: "Interactive Accordion",
    description:
      "Explore information using an interactive accordion."
  },

  {
    title: "Bootstrap Grid",
    description:
      "Learn how responsive grid layouts work."
  }

];

</script>