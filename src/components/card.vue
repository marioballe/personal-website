<template lang="html">
  <div class="card is-centered">
    <div class="card-image">
      <figure class="image">
        <img :src="'/static/'+profileInfo.coverImage" alt="Cover Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image" style="height: 50px; width: 50px;">
            <img :src="'/static/'+profileInfo.profileImage" alt="Profile picture">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ profileInfo.title }}</p>
          <p class="subtitle is-6">{{ profileInfo.subtitle }}</p>
        </div>
      </div>

      <div class="content">
        {{ profileInfo.description }}
        <br>
        <small>{{ profileInfo.date }}</small>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: ['profileInfo']
  }
</script>

<style lang="scss">
.card.is-centered {
  margin: 0 auto;
  -webkit-box-shadow: 7px 7px 24px -7px rgba(61,61,61,1);
  -moz-box-shadow: 7px 7px 24px -7px rgba(61,61,61,1);
  box-shadow: 7px 7px 24px -7px rgba(61,61,61,1);
}
.card{
  width: 400px;
}
</style>
