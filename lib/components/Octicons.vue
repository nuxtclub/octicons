<template>
	<div v-html="$octicons[icon].toSVG({ width: size })" />
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: 'octoface',
		},
		size: {
			type: String,
			default: '24',
		},
	},
	computed: {
		icon() {
			return this.$octicons[this.name] ? this.name : 'octoface'
		},
	},
}
</script>
