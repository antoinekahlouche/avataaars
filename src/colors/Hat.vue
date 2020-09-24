<template>
	<g id="Color" :mask="url(maskID)" fill-rule="evenodd" :fill="color_hex">
		<rect id="Color" x="0" y="0" width="264" height="280" />
	</g>
</template>

<script>
import { url } from "../helpers.js"

const hatColor = {
	Black: "#262E33",
	Blue01: "#65C9FF",
	Blue02: "#5199E4",
	Blue03: "#25557C",
	Gray01: "#E6E6E6",
	Gray02: "#929598",
	Heather: "#3C4F5C",
	PastelBlue: "#B1E2FF",
	PastelGreen: "#A7FFC4",
	PastelOrange: "#FFDEB5",
	PastelRed: "#FFAFB9",
	PastelYellow: "#FFFFB1",
	Pink: "#FF488E",
	Red: "#FF5C5C",
	White: "#FFFFFF"
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
			return hatColor[this.color]
		}
	}
}
</script>
