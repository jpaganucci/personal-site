const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/personal-site/'
  }
} : {}

export default {
	...routerBase,
	mode: 'spa',

	/*
	** Headers of the page
	*/
	head: {
  		title: 'Julia Paganucci',
  		meta: [
    			{ charset: 'utf-8' },
    			{ name: 'viewport', content: 'width=device-width, initial-  scale=1' },
    			{ hid: 'description', name: 'description', content: 'Julia Paganucci Personal Site' }
  		],
  		link: [
			{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' },
  		]
	},
}
