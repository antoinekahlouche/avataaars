<template>
	<component :is="type" :maskID="maskID" :color="color" />
</template>

<script>
import Default from "./Default"

export default {
	components: {
		Default
	},
	props: {
		maskID: { type: String, required: true },
		type: { type: String, required: true },
		color: { type: String, required: true }
	}
}
</script>
