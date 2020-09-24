<template>
	<g id="HairColor" :mask="url(maskID)" :fill="color_hex">
		<g transform="translate(0.000000, 0.000000) " id="Color">
			<rect x="0" y="0" width="264" height="280" />
		</g>
	</g>
</template>

<script>
import { url } from "../helpers.js"

const hairColor = {
	Auburn: "#A55728",
	Black: "#2C1B18",
	Blonde: "#B58143",
	BlondeGolden: "#D6B370",
	Brown: "#724133",
	BrownDark: "#4A312C",
	PastelPink: "#F59797",
	Platinum: "#ECDCBF",
	Red: "#C93305",
	SilverGray: "#E8E1E1"
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
			return hairColor[this.color]
		}
	}
}
</script>
