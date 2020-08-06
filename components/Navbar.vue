<template>	
	<div class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
	  		<nuxt-link to="/">
	      			<img src="logo-initials.pdf" class="navbar-item" id="brand-logo">
	    		</nuxt-link>

	    		<a 
				role="button" 
				:class="['navbar-burger burger', {'is-active': isActive}]" 
				aria-label="menu" 
				aria-expanded="false" 
				v-on:click="menuToggle"
			>
	      			<span aria-hidden="true"></span>
	      			<span aria-hidden="true"></span>
	      			<span aria-hidden="true"></span>
	    		</a>
	  	</div>

	  	<div id="navMenu" :class="['navbar-menu', {'is-active': isActive}]">
	    		<div class="navbar-end">
	      			<nuxt-link
					class="navbar-item"
					v-for="(slug,name) in sectionNames"
					:key="slug"
					:to="'/'+slug"
				>{{ name }}</nuxt-link>
	      		</div>
	    	</div>
	</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
			sectionNames: process.env.navItems
		};
	},
	methods: {
		menuToggle: function() {
			this.isActive = !this.isActive;
		}	
	},
	watch: {
		$route: function() {
			this.isActive = false;
		}
	}
} 

</script>

<style lang="scss">
</style>
