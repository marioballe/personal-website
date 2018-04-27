<template lang="html">
  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div id="profile-div" class="container has-text-centered hidden">
      <figure class="image is-256x256 is-centered">
        <img src="/static/perfil.png">
      </figure>
      <h1 class="title">
        Hola! Soy <strong class="is-pink">Mario Ballester</strong>, encantado de conocerte!
      </h1>
      <h4 class="subtitle">
        <code>Soy desarrollador <strong class="is-primary">Fullstack</strong> actualmente viviendo en Barcelona.</code>
      </h4>
      <social :socialMedia="socialMedia"/>
    </div>
  </div>
</template>

<script>
  import social from './../social-media-nav'
  import { socialMedia } from './../../data/data'
  import $ from 'jquery'

  export default {
    name: 'hero-body',
    components: {
      social
    },
    data () {
      return {
        socialMedia
      }
    }
  }

  $(document).ready(function () {
    $('#profile-div').toggleClass('hidden')
  })
  
</script>

<style lang="scss" scoped>
  $primary: #00d1b2;
  $pink: #ff3860;
   
  .hero-body {
    #profile-div {
      //top: 0px;
      -webkit-transition: all 1.5s, height 1.5s, -webkit-transform 1.5s;
      transition: all 1.5s, height 1.5s, transform 1.5s;
    }
    .hidden {
      opacity: 0;
      margin-top: -200px;
    }
    .title {
      font-size: 28px;
      line-height: 1;
      font-weight: lighter;
      font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
      strong.is-pink {
        color: $pink;
      }
    }
    .subtitle {
      font-size: 19px;
      font-family: Courier, "Lucida Console", monospace;

      strong.is-primary {
        color: $primary;
      }
      code {
        background: none;
        color: white;
      }
    }
  }

  .image.is-256x256 {
    width: 256px;
    height: 256px;
  }

  .image.is-centered {
    margin: 0 auto;
  }

</style>
