<template>
	<div>	
		<navbar></navbar>
		<div class="body-content">	
			<section class="hero is-fullheight-with-navbar" id="frontpage">
				<div class="hero-head">
					<Signature/>	
					<h1>Julia Paganucci</h1>		
				</div>
				<div class="hero-body">
				</div>
				<div class="hero-footer has-text-centered">
					<div v-scroll-to="'#main'"></div>		
				</div>
			</section>
			<div id="main">	
				<nuxt/>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from '~/components/Navbar.vue';
	import Signature from '~/components/Signature.vue';

	export default {
		components: {
			Navbar,
			Signature
		}
	};
</script>

<style lang="scss">
 	.fade-enter{
		opacity: 0;
	}
	.fade-enter-active{
		transition: opacity 1s;
	}
	.fade-leave{
		/* opacity: 1; */
	}
	.fade-leave-active{
		transition: opacity 1s;
		opacity: 0;
	} 
	html {
    		font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  	}
</style>
