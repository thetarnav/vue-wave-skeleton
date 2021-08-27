<script lang="ts">
import { defineComponent, h, onMounted, ref, watchEffect } from 'vue'
import { useElementSize, templateRef, useElementBounding } from '@vueuse/core'

function buildWave(path: Element, segments: number) {
	const h = 60
	const m = 0.512286623256592433
	const a = h / 4
	const y = h / 2

	const addSegment = (left: number, multiply = 1): Array<string | number> => {
		const segment = ['s', -(1 - a) * m, a * multiply, a, a * multiply]
		left > 0 && segment.push(...addSegment(left - 1, multiply * -1))
		return segment
	}

	const pathData = [
		'M 0',
		y + a / 2,
		'c',
		a * m,
		0,
		-(1 - a) * m,
		-a,
		a,
		-a,
		...addSegment(segments),
	].join(' ')

	path.setAttribute('d', pathData)
}
/*
buildWave(paths[0], 60, 20);
buildWave(paths[1], 60, 20);
buildWave(paths[2], 60, 20);
buildWave(paths[3], 60, 14);
*/

export default defineComponent({
	name: 'WaveSkeleton',
	setup() {
		const path = templateRef('path')
		const el = templateRef('el')
		const { width, height } = useElementSize(el)

		watchEffect(() => {
			width.value
			height.value
			if (width.value > 0 && height.value > 0 && path.value)
				buildWave(path.value, 20)
		})
	},
})
</script>

<template>
	<div ref="el" class="wave-skeleton">
		<svg viewBox="5 15 212 30">
			<path ref="path"></path>
		</svg>
	</div>
</template>

<style lang="scss">
.wave-skeleton {
	height: clamp(20px, 6vmin, 40px);
	margin: 0;
	overflow: hidden;
	animation: wave-skeleton-fade 800ms infinite alternate;

	path {
		fill: none;
		stroke: #828282;
		stroke-width: 5.2px;
		stroke-linecap: round;
		stroke-dasharray: 0 16 300 16;
		animation: wave-skeleton-wave 2400ms linear infinite;
	}

	// svg:last-of-type .wave {
	// 	stroke-dasharray: 0 16 170 16;
	// }
}

@keyframes wave-skeleton-wave {
	0% {
		stroke-dashoffset: 0;
		transform: translate3d(0, 0, 0);
	}
	100% {
		stroke-dashoffset: -133;
		transform: translate3d(-90px, 0, 0);
	}
}

@keyframes wave-skeleton-fade {
	0% {
		opacity: 0.5;
	}
	100% {
		opacity: 1;
	}
}
</style>
