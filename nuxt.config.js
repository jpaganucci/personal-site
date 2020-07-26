const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/personal-site/'
  }
} : {}

export default {
	...routerBase,
	mode: 'spa',

	head: {
		link: [
			{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' },
		]
	},
}
