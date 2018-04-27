<template lang="html">
  <section class="hero is-primary is-fullheight with-bg-image">
    <herobody />
  </section>
</template>

<script>
import herobody from './hero-body'

export default {
  name: 'hero',
  components: {
    herobody
  }
}

</script>

<style lang="scss">

.hero.is-fullheight.with-bg-image {
  background-image: linear-gradient(rgba(0, 209, 179, 0.4),rgba(140, 0, 210, 0.4)),linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(/static/arcDeTriomf.jpg);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
