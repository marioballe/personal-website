<template lang="html">
      <nav class="tabs is-centered">
            <ul>
              <li v-for="social in socialMedia" :key="social.title" class="social-list">
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

<style lang="scss" scoped>

$size-icon: 28px;
$spotify: #1ed760;
$twitter: #1da1f2;
$github: #ffdd57;

.social-list {
  
  font-size: $size-icon;
  
  a.Spotify:hover {
    color: $spotify!important;
  }

  a.Twitter:hover {
    color: $twitter!important;
  }

  a.Github:hover {
    color: $github!important;
  }
}
</style>
