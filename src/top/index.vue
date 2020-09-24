<template>
	<component :is="type" :color="color">
		<template slot="FacialHair">
			<slot name="FacialHair" />
		</template>
		<template slot="Accessories">
			<slot name="Accessories" />
		</template>
	</component>
</template>

<script>
import Eyepatch from "./Eyepatch"
import Hat from "./Hat"
import Hijab from "./Hijab"
import LongHairBigHair from "./LongHairBigHair"
import LongHairBob from "./LongHairBob"
import LongHairBun from "./LongHairBun"
import LongHairCurly from "./LongHairCurly"
import LongHairCurvy from "./LongHairCurvy"
import LongHairDreads from "./LongHairDreads"
import LongHairFrida from "./LongHairFrida"
import LongHairFroBand from "./LongHairFroBand"
import LongHairFro from "./LongHairFro"
import LongHairMiaWallace from "./LongHairMiaWallace"
import LongHairNotTooLong from "./LongHairNotTooLong"
import LongHairShavedSides from "./LongHairShavedSides"
import LongHairStraight2 from "./LongHairStraight2"
import LongHairStraightStrand from "./LongHairStraightStrand"
import LongHairStraight from "./LongHairStraight"
import NoHair from "./NoHair"
import ShortHairDreads01 from "./ShortHairDreads01"
import ShortHairDreads02 from "./ShortHairDreads02"
import ShortHairFrizzle from "./ShortHairFrizzle"
import ShortHairShaggyMullet from "./ShortHairShaggyMullet"
import ShortHairShaggy from "./ShortHairShaggy"
import ShortHairShortCurly from "./ShortHairShortCurly"
import ShortHairShortFlat from "./ShortHairShortFlat"
import ShortHairShortRound from "./ShortHairShortRound"
import ShortHairShortWaved from "./ShortHairShortWaved"
import ShortHairSides from "./ShortHairSides"
import ShortHairTheCaesarSidePart from "./ShortHairTheCaesarSidePart"
import ShortHairTheCaesar from "./ShortHairTheCaesar"
import Turban from "./Turban"
import WinterHat1 from "./WinterHat1"
import WinterHat2 from "./WinterHat2"
import WinterHat3 from "./WinterHat3"
import WinterHat4 from "./WinterHat4"

export default {
	components: {
		Eyepatch,
		Hat,
		Hijab,
		LongHairBigHair,
		LongHairBob,
		LongHairBun,
		LongHairCurly,
		LongHairCurvy,
		LongHairDreads,
		LongHairFrida,
		LongHairFroBand,
		LongHairFro,
		LongHairMiaWallace,
		LongHairNotTooLong,
		LongHairShavedSides,
		LongHairStraight2,
		LongHairStraightStrand,
		LongHairStraight,
		NoHair,
		ShortHairDreads01,
		ShortHairDreads02,
		ShortHairFrizzle,
		ShortHairShaggyMullet,
		ShortHairShaggy,
		ShortHairShortCurly,
		ShortHairShortFlat,
		ShortHairShortRound,
		ShortHairShortWaved,
		ShortHairSides,
		ShortHairTheCaesarSidePart,
		ShortHairTheCaesar,
		Turban,
		WinterHat1,
		WinterHat2,
		WinterHat3,
		WinterHat4
	},
	props: {
		type: { type: String, required: true },
		color: { type: String }
	}
}
</script>
