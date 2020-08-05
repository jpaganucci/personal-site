const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/personal-site/'
  }
} : {}

export default {
	...routerBase,
	mode: 'spa',

	env: {
		siteTitle: "Julia Paganucci",
		navItems: {
			"About": "",
			Education: "education",
			Projects: "projects",
			Art: "art",
			Travel: "travel",
		},
		baseURL: process.env.BASE_URL || 'http://localhost:3000',
	},

	/*
	** Headers of the page
	*/
	head: {
  		title: 'Julia Paganucci',
  		meta: [
    			{ charset: 'utf-8' },
    			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
    			{ hid: 'description', name: 'description', content: 'Julia Paganucci Personal Site' }
  		],
  		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' },
  		]
	},

	modules: [
		// provide path to file with resources
		['nuxt-sass-resources-loader', './assets/css/main.scss']
	],

	css: [
		'./assets/css/main.scss',
	],

	plugins: [
		{ src: '~/plugins/directives.js' },
	],
}
