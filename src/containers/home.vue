<template lang="html">
  <div id="home">
    <headersection :headdata="cabecera"/>
	<div class="columns">
		<div class="column is-12-mobile is-6-desktop">
			<card :profileInfo="profileInfo"/>
		</div>
		<div class="column is-12-mobile is-6-desktop">
			<window :resume="resume"/>
		</div>
	</div>
  </div>
</template>

<script>
import { profileInfo, resume, cabecera } from './../data/data'
import card from './../components/card'
import window from './../components/window'
import headersection from './../components/header'

export default {
  name: 'home',
  components: { card, window, headersection },
  data () { return { profileInfo, resume, cabecera } }
}
</script>

<style lang="scss">
  $primary: #00d1b2;
  $pink: #ff3860;
  $yellow : #F5AB35;
  $sunset : #F64747;
  $darkGrey : #DADADA;
  $lightGrey : #EEEEEE;

  $heightBar: 30px;
  html::-webkit-scrollbar { 
    display: none; 
  }
  .section-title {
  	margin: 30px 0px;
		p.title, p.subtitle{
	  	span.icon {
			.is-danger {
				color: $pink;
			}
			.is-primary {
				color: $primary;
			}
	  	}
	  }
  }
  #home {
  	margin-top: 40px;
  	margin-bottom: 80px;
  }

  .window {
	height: 100%;
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
		background-color: $sunset;
	}
	.dot.expand {
		background-color: $primary;
	}
	.dot.minimize {
		background-color: $yellow;
	}
    	pre {
		border-bottom-left-radius: 5px;
  		border-bottom-right-radius: 5px;
  		height: calc(100% - 30px);
	}}}
 </style>
