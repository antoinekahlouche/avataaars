
<template>
	<component :is="type" :color="color" :graphic="graphic" />
</template>

<script>
import BlazerShirt from "./BlazerShirt"
import BlazerSweater from "./BlazerSweater"
import CollarSweater from "./CollarSweater"
import GraphicShirt from "./GraphicShirt"
import Hoodie from "./Hoodie"
import Overall from "./Overall"
import ShirtCrewNeck from "./ShirtCrewNeck"
import ShirtScoopNeck from "./ShirtScoopNeck"
import ShirtVNeck from "./ShirtVNeck"

export default {
	components: {
		BlazerShirt,
		BlazerSweater,
		CollarSweater,
		GraphicShirt,
		Hoodie,
		Overall,
		ShirtCrewNeck,
		ShirtScoopNeck,
		ShirtVNeck
	},
	props: {
		type: { type: String, required: true },
		color: { type: String, required: true },
		graphic: { type: String }
	}
}
</script>
