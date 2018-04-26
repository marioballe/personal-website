<template lang="html">
      <nav class="tabs is-centered">
            <ul>
              <li v-for="social in socialMedia" class="social-list">
                <a :class="social.title" :href="social.url" target="_blank">
                  <span class="icon is-medium">
                      <i :class="social.icon"></i>
                  </span>
                </a>
              </li>
            </ul>
        </nav>
</template>

<script>
  export default {
    name: 'social-media-nav',
    props: ['socialMedia']
  }
</script>

<style lang="scss">
$spotify: #1ed760;
$twitter: #1da1f2;
$github: #ffdd57;
.social-list {
  a.Spotify:hover {
    color: $spotify;
  }

  a.Twitter:hover {
    color: $twitter;
  }

  a.Github:hover {
    color: $github;
  }
}

</style>
