<template>
	<component :is="type" />
</template>

<script>
import Blank from "./Blank"
import Kurt from "./Kurt"
import Prescription01 from "./Prescription01"
import Prescription02 from "./Prescription02"
import Round from "./Round"
import Sunglasses from "./Sunglasses"
import Wayfarers from "./Wayfarers"

export default {
	components: {
		Blank,
		Kurt,
		Prescription01,
		Prescription02,
		Round,
		Sunglasses,
		Wayfarers
	},
	props: {
		type: { type: String, required: true }
	}
}
</script>
