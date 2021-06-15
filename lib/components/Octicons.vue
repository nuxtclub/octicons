<template>
	<svg
		version="1.1"
		:width="size"
		:height="size"
		:viewBox="`0 0 ${size > 16 ? 24 : 16} ${size > 16 ? 24 : 16}`"
		style="fill: currentColor;"
		class="octicon"
		:class="`octicon-${name}`"
		aria-hidden="true"
		v-html="icon"
	/>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: 'bug',
		},
		size: {
			type: String,
			default: '24',
		},
	},
	computed: {
		icon() {
			const size = parseInt(this.size) != NaN ? parseInt(this.size) : 24
			const height = size > 16 ? 24 : 16
			const name = this.$octicons[this.name] ? this.name : 'bug'
			return this.$octicons[name].heights[height].path
		},
	},
}
</script>
