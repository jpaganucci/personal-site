<template>
	<div>	
		<navbar></navbar>
		<div class="body-content">
			<nuxt/>
 		</div>	
	</div>
</template>

<script>
  import Navbar from '../components/Navbar'

  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
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
