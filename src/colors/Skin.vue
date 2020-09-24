<template>
	<g id="Color" :mask="url(maskID)" :fill="color_hex">
		<g id="Color" transform="translate(0.000000, 0.000000)">
			<rect x="0" y="0" width="264" height="280" />
		</g>
	</g>
</template>

<script>
import { url } from "../helpers.js"

const skinColor = {
	Tanned: "#FD9841",
	Yellow: "#F8D25C",
	Pale: "#FFDBB4",
	Light: "#EDB98A",
	Brown: "#D08B5B",
	DarkBrown: "#AE5D29",
	Black: "#614335"
}

export default {
	props: {
		maskID: { type: String, required: true },
		color: { type: String, required: true }
	},
	data: () => ({
		url
	}),
	computed: {
		color_hex: function () {
			return skinColor[this.color]
		}
	}
}
</script>
