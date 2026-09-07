<template>
  <article class="api-card">

    <img
      :src="image"
      :alt="title"
    >

    <div class="api-card-content">

      <h2>
        {{ title }}
      </h2>

      <p>
        {{ description }}
      </p>

      <p>
        <strong>Category:</strong>
        {{ category }}
      </p>

      <p>
        <strong>Price:</strong>
        ${{ price }}
      </p>

      <p>
        <strong>Rating:</strong>
        {{ rating }}
      </p>

      <button
        @click="toggleDetails"
        class="api-button"
      >
        {{ showDetails ? "Hide Details" : "Show Details" }}
      </button>

      <div v-if="showDetails">

        <p>
          <strong>Brand:</strong>
          {{ brand }}
        </p>

        <p>
          <strong>Stock:</strong>
          {{ stock }}
        </p>

      </div>

    </div>

  </article>
</template>

<script>
export default {

  props: {

    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    rating: {
      type: Number,
      required: true
    },

    brand: {
      type: String,
      required: false,
      default: "Unknown"
    },

    stock: {
      type: Number,
      required: true
    }

  },

  data() {

    return {
      showDetails: false
    };

  },

  methods: {

    toggleDetails() {

      this.showDetails = !this.showDetails;

    }

  }

};
</script>