<template>
	<component :is="type" :color="color" />
</template>

<script>
import BeardLight from "./BeardLight"
import BeardMajestic from "./BeardMajestic"
import BeardMedium from "./BeardMedium"
import Blank from "./Blank"
import MoustacheFancy from "./MoustacheFancy"
import MoustacheMagnum from "./MoustacheMagnum"

export default {
	components: {
		BeardLight,
		BeardMajestic,
		BeardMedium,
		Blank,
		MoustacheFancy,
		MoustacheMagnum
	},
	props: {
		type: { type: String, required: true },
		color: { type: String, required: true }
	}
}
</script>
