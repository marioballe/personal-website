<template lang="html">
    <div class="window" id="#description-code">
      <div class="bar">
        <div class="dot close"></div>
        <div @click="minimize('#description-code')" class="dot minimize"></div>
        <div class="dot expand"></div>
      </div>
      <pre class="hljs">
        <code v-html="computedCode" class="hljs"> 
        </code>
      </pre>
    </div>
</template>

<script>
import hljs from 'highlightjs'
import $ from 'jquery'
import 'highlightjs/styles/atom-one-dark.css'

console.log(hljs)
hljs.initHighlighting()

export default {
  name: 'window',
  props: ['resume'],
  methods: {
    minimize: function (window) {
      $(document).ready(function () {
        console.log($(window))
        $(window).toggleClass('minimized')
      })
    }
  },
  computed: {
    computedCode: function () {
      return hljs.highlight(this.resume.language, this.resume.code).value
    }
  }
}
</script>


<style lang="scss">
  $primary: #00d1b2;
  $yellow : #F5AB35;
  $sunset : #F64747;
  $darkGrey : #DADADA;
  $lightGrey : #EEEEEE;
  $pink: #ff3860;

  $heightBar: 30px;

  .window {
  height: 100%;
  border-radius: 5px;
  -webkit-box-shadow: -7px 7px 24px -7px rgba(61,61,61,1);
  -moz-box-shadow: -7px 7px 24px -7px rgba(61,61,61,1);
  box-shadow: -7px 7px 24px -7px rgba(61,61,61,1);
  -webkit-transition: all 1.5s, height 1.5s, -webkit-transform 1.5s;
  transition: all 1.5s, height 1.5s, transform 1.5s;

    line-height: 1.2;
    .bar {
    width: 100%;
    background-color: $lightGrey;
    padding: 5px;
    height: $heightBar;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-top: 1px solid $darkGrey;
    border-left: 1px solid $darkGrey;
    border-right: 1px solid $darkGrey;
  
    .dot {
      display: inline-block;
      margin: 2px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }

    .dot.close {
      background-color: $pink;
    }
    .dot.expand {
      background-color: $primary;
    }
    .dot.minimize {
      background-color: $yellow;
    }

  }

    pre {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      height: calc(100% - 30px);
  }
 }

 .window.minimized {
    height: $heightBar;
 }


 .hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #abb2bf!important;
  background: #192640!important;
}

.hljs-comment,
.hljs-quote {
  color: #5c6370!important;
  font-style: italic;
}

.hljs-doctag,
.hljs-keyword,
.hljs-formula {
  color: #F5AB35!important;
}

.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e06c75!important;
}

.hljs-literal {
  color: #56b6c2!important;
}

.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta-string {
  color: #00d1b2!important;
}

.hljs-built_in,
.hljs-class .hljs-title {
  color: #e6c07b!important;
}

.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #ff3860!important;
}

.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #61aeee!important;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}

</style>
