<template>
  <section class="container page-section">

    <Header>
      Bootstrap Grid System
    </Header>

    <p class="page-intro">
      These columns demonstrate responsive grid sizes.
    </p>

    <div class="grid-container">

      <div
        v-for="card in gridCards"
        :key="card.id"
        class="grid-card"
      >
        <h2>{{ card.title }}</h2>

        <p>
          {{ card.description }}
        </p>
      </div>

    </div>

  </section>
</template>

<script setup>

const gridCards = [
  {
    id: 1,
    title: "Small Screens",
    description: "This content is designed for smaller screens."
  },

  {
    id: 2,
    title: "Medium Screens",
    description: "This content adapts to medium-sized screens."
  },

  {
    id: 3,
    title: "Large Screens",
    description: "This content adapts to larger screens."
  }
];

</script>