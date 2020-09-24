<template>
	<component :is="type" />
</template>

<script>
import Close from "./Close"
import Cry from "./Cry"
import Default from "./Default"
import Dizzy from "./Dizzy"
import EyeRoll from "./EyeRoll"
import Happy from "./Happy"
import Hearts from "./Hearts"
import Side from "./Side"
import Squint from "./Squint"
import Surprised from "./Surprised"
import Wink from "./Wink"
import WinkWacky from "./WinkWacky"

export default {
	components: {
		Close,
		Cry,
		Default,
		Dizzy,
		EyeRoll,
		Happy,
		Hearts,
		Side,
		Squint,
		Surprised,
		Wink,
		WinkWacky
	},
	props: {
		type: { type: String, required: true }
	}
}
</script>
