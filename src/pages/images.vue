<template>
  <section class="container page-section">

    <Header>
      Responsive Images
    </Header>

    <p class="page-intro">
      Click an image to toggle its border.
    </p>

    <div class="image-grid">

      
      <ImageCard
        v-for="image in images"
        :key="image.id"
        :src="image.url"
        :alt="image.alt"
        :title="image.title"
      >
        <p>
          {{ image.description }}
        </p>
      </ImageCard>

    </div>

  </section>
</template>

<script setup>

const images = [
  {
    id: 1,
    title: "Mountain",
    url: "https://picsum.photos/800/500?random=1",
    alt: "Mountain landscape",
    description: "A beautiful mountain landscape."
  },

  {
    id: 2,
    title: "Nature",
    url: "https://picsum.photos/800/500?random=2",
    alt: "Nature scene",
    description: "A peaceful nature scene."
  },

  {
    id: 3,
    title: "Landscape",
    url: "https://picsum.photos/800/500?random=3",
    alt: "Landscape",
    description: "A scenic landscape."
  },

  {
    id: 4,
    title: "Forest",
    url: "https://picsum.photos/800/500?random=4",
    alt: "Forest",
    description: "A forest landscape."
  },

  {
    id: 5,
    title: "Water",
    url: "https://picsum.photos/800/500?random=5",
    alt: "Water",
    description: "A peaceful water scene."
  },

  {
    id: 6,
    title: "Adventure",
    url: "https://picsum.photos/800/500?random=6",
    alt: "Adventure landscape",
    description: "An adventurous outdoor scene."
  }
];

</script>