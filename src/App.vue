<template>
  <div class="app"> 
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import router from './router'

export default {
  name: 'app',
  components: {
    router
  }
}
</script>
