<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { useElementSize, templateRef, useDebounceFn } from '@vueuse/core'
import {
	getSegmentsNumber,
	getStrokeDashLength,
	getViewBoxWidth,
	getWavePath,
} from './calculations'

export default defineComponent({
	name: 'WaveSkeleton',
	setup() {
		const pathEl = templateRef('pathEl')
		const divEl = templateRef('divEl')
		const { width, height } = useElementSize(divEl)

		// Rounded size of the div element
		// to limit triggering updatePath method with tiny changes
		const size = computed<[number, number]>(() => [
			Math.round(width.value),
			Math.round(height.value),
		])

		// BINDS:
		// attribute "d" of the path element
		const path = ref('')
		// width of attribute "viewBox" of the svg element
		const viewBoxWidth = ref(212)
		// bound to css: length of the visible stroke dash
		const strokeDashLength = ref(300)

		const updatePath = useDebounceFn(() => {
			const [w, h] = size.value
			if (w <= 0 || h <= 0 || !pathEl.value) return

			viewBoxWidth.value = getViewBoxWidth(w, h, 30)
			strokeDashLength.value = getStrokeDashLength(viewBoxWidth)

			const nSegments = getSegmentsNumber(viewBoxWidth)
			path.value = getWavePath(nSegments)
		}, 200)

		watch(size, updatePath)

		return {
			path,
			viewBoxWidth,
			strokeDashLength,
		}
	},
})
</script>

<template>
	<div ref="divEl" class="wave-skeleton">
		<svg :viewBox="`5 15 ${viewBoxWidth} 30`">
			<path ref="pathEl" :d="path"></path>
		</svg>
	</div>
</template>

<style lang="scss">
.wave-skeleton {
	overflow: hidden;
	svg {
		width: 100%;
		height: 100%;
		margin: 0;
		overflow: hidden;
		animation: wave-skeleton-fade 800ms infinite alternate;
	}

	path {
		fill: none;
		stroke: #828282;
		stroke-width: 5.2px;
		stroke-linecap: round;
		stroke-dasharray: 0 16 v-bind(strokeDashLength) 16;
		animation: wave-skeleton-wave 2400ms linear infinite;
	}
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
