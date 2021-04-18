# @nuxtclub/octicons

## Setup

1. Add `@nuxtclub/octicons` dependency to your project

```bash
npm i -D @nuxtclub/octicons
```

2. Add `@nuxtclub/octicons` to the `buildModules` section of `nuxt.config.js`

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

```javascript
export default {
	buildModules: ['@nuxtclub/octicons'],
}
```

# Typescript support

Add the types to your `"types"` array in `tsconfig.json` after the `@nuxt/types` entry.

:warning: Use `@nuxt/vue-app` instead of `@nuxt/types` for nuxt < 2.9.

```json
{
	"compilerOptions": {
		"types": ["@nuxt/types", "@nuxtclub/octicons"]
	}
}
```

## Usage

This module will inject \$octicons in the context of your application.

Using \$octicons you can access to an object with all the icons of the [Octicons Package](https://octicons-primer.vercel.app/octicons/packages/javascript).

## Example

```vue
<template>
	<div v-html="$octicons['home'].toSVG()"></div>
</template>
```

## Component

Now you can also use the auto-imported component in your `.vue` files.

```vue
<template>
	<octicons name="home" size="64">
</template>
```

Learn more about Octicons [here](https://octicons-primer.vercel.app/octicons/).
