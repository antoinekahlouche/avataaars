<template>
	<Colors :maskID="maskID" :color="color" />
</template>

<script>
import { url } from "../helpers.js"
import Colors from "../colors/Skin"

export default {
	components: {
		Colors
	},
	props: {
		maskID: { type: String, required: true },
		color: { type: String, required: true }
	}
}
</script>
