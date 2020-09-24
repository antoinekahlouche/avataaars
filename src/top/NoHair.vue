<template>
	<g id="Top" stroke-width="1" fill-rule="evenodd">
		<defs>
			<rect :id="path1" x="0" y="0" width="264" height="280" />
			<filter :id="filter1" x="-0.8%" y="-2.0%" width="101.5%" height="108.0%" filter-units="objectBoundingBox">
				<feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
				<feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0" type="matrix" in="shadowOffsetOuter1" result="shadowMatrixOuter1" />
				<feMerge>
					<feMergeNode in="shadowMatrixOuter1" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>
		<mask :id="mask1" fill="white">
			<use :xlink:href="selector(path1)" />
		</mask>
		<g id="Mask" />
		<g id="NoHair" :mask="url(mask1)">
			<g transform="translate(-1.000000, 0.000000)">
				<slot name="FacialHair" />
				<slot name="Accessories" />
			</g>
		</g>
	</g>
</template>

<script>
import { selector, uid, url } from "../helpers.js"

export default {
	data: () => ({
		path1: uid("react-path-"),
		mask1: uid("react-mask-"),
		filter1: uid("react-filter-"),
		selector,
		url
	})
}
</script>
