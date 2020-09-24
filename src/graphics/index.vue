
<template>
	<component :is="type" :maskID="maskID" />
</template>

<script>
import Bat from "./Bat"
import Bear from "./Bear"
import Cumbia from "./Cumbia"
import Deer from "./Deer"
import Diamond from "./Diamond"
import Hola from "./Hola"
import Pizza from "./Pizza"
import Resist from "./Resist"
import Selena from "./Selena"
import SkullOutline from "./SkullOutline"
import Skull from "./Skull"

export default {
	components: {
		Bat,
		Bear,
		Cumbia,
		Deer,
		Diamond,
		Hola,
		Pizza,
		Resist,
		Selena,
		SkullOutline,
		Skull
	},
	props: {
		type: { type: String, required: true },
		maskID: { type: String, required: true }
	}
}
</script>
