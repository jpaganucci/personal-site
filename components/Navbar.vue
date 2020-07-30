<template>	
	<div class="navbar is-white" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
	  		<nuxt-link to="/">
	      			<img src="logo-initials.pdf" width=80 height=114 class="navbar-item">
	    		</nuxt-link>

	    		<a 
				role="button" 
				:class="['navbar-burger burger', {'is-active': isActive}]" 
				aria-label="menu" 
				aria-expanded="false" 
				data-target="navbarBasicExample"
				v-on:click="menuToggle"
			>
	      			<span aria-hidden="true"></span>
	      			<span aria-hidden="true"></span>
	      			<span aria-hidden="true"></span>
	    		</a>
	  	</div>

	  	<div id="navbarBasicExample" class="navbar-menu">
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
	}
} 

</script>

<style lang="scss">
</style>
