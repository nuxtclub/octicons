import octicons from '@primer/octicons'

declare module '@nuxt/vue-app' {
	interface Context {
		$octicons: typeof octicons
	}
}

declare module '@nuxt/types' {
	interface Context {
		$octicons: typeof octicons
	}
}

declare module 'vue/types/vue' {
	interface Vue {
		$octicons: typeof octicons
	}
}

declare module 'vuex/types/index' {
	interface Store<S> {
		$supabase: SupabaseClient
	}
}
