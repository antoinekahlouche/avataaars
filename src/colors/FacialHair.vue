<template>
	<g id="Color" :mask="url(maskID)" :fill="color_hex">
		<g id="Color" transform="translate(-32.000000, 0.000000)">
			<rect x="0" y="0" width="264" height="244" />
		</g>
	</g>
</template>

<script>
import { url } from "../helpers.js"

const facialHairColor = {
	Auburn: "#A55728",
	Black: "#2C1B18",
	Blonde: "#B58143",
	BlondeGolden: "#D6B370",
	Brown: "#724133",
	BrownDark: "#4A312C",
	Platinum: "#ECDCBF",
	Red: "#C93305"
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
			return facialHairColor[this.color]
		}
	}
}
</script>
