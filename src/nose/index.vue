<template>
	<component :is="type" />
</template>

<script>
import Default from "./Default"

export default {
	components: {
		Default
	},
	props: {
		type: { type: String, required: true }
	}
}
</script>
