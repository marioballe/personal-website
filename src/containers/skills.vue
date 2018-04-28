<template lang="html">
  <div id="skills">
    <headersection :headdata="skillsheader"/>
    <div class="columns">
      <div v-for="skill in skills" :key="skill.class" class="column is-narrow is-12-mobile is-4-tablet is-2-desktop">
        <article class="tile is-child notification with-shadow" :id="skill.class">
          <tileArticle :articleInfo="skill"></tileArticle>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import { skillsheader, skillsStack } from './../data/data'
  import headersection from './../components/header'
  import tileArticle from './../components/article-tile'

  
  export default {
    name: 'skills',
    components: { headersection, tileArticle },
    data () { return { skillsheader, skillsStack } }
  }
</script>

<style lang="scss">
  $primary: #00d1b2;
  $pink: #ff3860;

  $vueColor: #41b883;
  $angularColor: #dd0330;
  $nodeColor: #689f64;
  $npmColor: #cb3837;
  $gitColor: #f05033;
  $jsColor: #f6df48;
  $jqueryColor: #0868ab;
  $htmlColor: #f16529;
  $bootstrapColor: #563d7c;
  $cssColor: #2162af;
  $sassColor: #cd679a;
  $webpackColor: #6a91d9;
  $mysqlColor: #5e87a1;
  $netColor: #16649b;
  $csharpColor: #680e7f;
  
  #vue {
    border: 4px solid $vueColor;
    strong {
      color: $vueColor;
    }
  }
  #angular {
    border: 4px solid $angularColor;
    strong {
      color: $angularColor;
    }
  }
  #node {
    border: 4px solid $nodeColor;
    strong {
      color: $nodeColor;
    }
  }
  #npm {
    border: 4px solid $npmColor;
    strong {
      color: $npmColor;
    }
  }
  #js {
    border: 4px solid $jsColor;
    strong {
      color: $jsColor;
    }
  }
  #git {
    border: 4px solid $gitColor;
    strong {
      color: $gitColor;
    }
  }
  #jquery {
    border: 4px solid $jqueryColor;
    strong {
      color: $jqueryColor;
    }
  }
  #bulma {
    border: 4px solid $primary;
    strong {
      color: $primary;
    }
  }
  #html {
    border: 4px solid $htmlColor;
    strong {
      color: $htmlColor;
    }
  }
  #css {
    border: 4px solid $cssColor;
    strong {
      color: $cssColor;
    }
  }
  #bootstrap {
    border: 4px solid $bootstrapColor;
    strong {
      color: $bootstrapColor;
    }
  }
  #sass {
    border: 4px solid $sassColor;
    strong {
      color: $sassColor;
    }
  }
  #webpack {
    border: 4px solid $webpackColor;
    strong {
      color: $webpackColor;
    }
  }
  #mysql {
    border: 4px solid $mysqlColor;
    strong {
      color: $mysqlColor;
    }
  }
  #net {
    border: 4px solid $netColor;
    strong {
      color: $netColor;
    }
    figure {
      padding-top: 20px;
    }
  }
  #csharp {
    border: 4px solid $csharpColor;
    strong {
      color: $csharpColor;
    }
  }

  .columns {
    flex-wrap: wrap;
  }


  .with-shadow {
    -webkit-box-shadow: 7px 7px 24px -7px rgba(61,61,61,1);
    -moz-box-shadow: 7px 7px 24px -7px rgba(61,61,61,1);
    box-shadow: 7px 7px 24px -7px rgba(61,61,61,1);
  }
</style>
