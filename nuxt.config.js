const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/personal-site/'
  }
} : {}

export default {
	...routerBase
	mode: 'spa'
}
