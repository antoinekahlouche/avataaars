<template>
	<component :is="type" />
</template>

<script>
import AngryNatural from "./AngryNatural"
import Angry from "./Angry"
import DefaultNatural from "./DefaultNatural"
import Default from "./Default"
import FlatNatural from "./FlatNatural"
import FrownNatural from "./FrownNatural"
import RaisedExcitedNatural from "./RaisedExcitedNatural"
import RaisedExcited from "./RaisedExcited"
import SadConcernedNatural from "./SadConcernedNatural"
import SadConcerned from "./SadConcerned"
import UnibrowNatural from "./UnibrowNatural"
import UpDownNatural from "./UpDownNatural"
import UpDown from "./UpDown"

export default {
	components: {
		AngryNatural,
		Angry,
		DefaultNatural,
		Default,
		FlatNatural,
		FrownNatural,
		RaisedExcitedNatural,
		RaisedExcited,
		SadConcernedNatural,
		SadConcerned,
		UnibrowNatural,
		UpDownNatural,
		UpDown
	},
	props: {
		type: { type: String, required: true }
	}
}
</script>
