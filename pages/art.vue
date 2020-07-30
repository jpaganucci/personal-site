<template>
	<section class="container">
    <div id="svgwrapper" class="load-logo">
    <svg class="logo-path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.85 262.79" xml:space="preserve">
            <path class="logo-path underline" d="M555.51,597.1s.86-6.1,39-15.67S677.41,563,690.11,563s23.42,6.27,22.92,9.57-40.52,4.87-48.15,4.12" transform="translate(-345.54 -373.68)" />
	</svg>
	</div>
	</section>
</template>

<style lang="scss">
body {
  margin:0;
	background:#FFFFFF;
	text-align:center;
}

#svgwrapper {
  display:inline-block;
  width:400px;
  height:200px;
  stroke: black;
  fill: none;
  position: relative;
}

.logo-path {
    display: block;
    margin: 0 auto;
    position: absolute;
    top: calc(20% + 20px);
}

.logo-path {
    stroke-dasharray: 2600;
    stroke-dashoffset: 2600;
}

.underline {
    stroke-width: 20;
    animation: letter-animation 5s linear forwards;
    animation-delay: 0s;
}
</style>
