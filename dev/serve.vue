<script setup lang="ts">
import WaveSkeleton from '@/wave-skeleton.vue'
</script>

<template>
	<div class="layout">
		<WaveSkeleton />
		<WaveSkeleton />
		<WaveSkeleton />
		<WaveSkeleton />
		<WaveSkeleton />
		<WaveSkeleton />
		<WaveSkeleton />
	</div>
</template>

<style lang="scss">
html,
body,
#app {
	height: 100vh;
	margin: 0;
	width: 100vw;
}

#app {
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	background: #f2f2f2;
}

.layout {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.wave-skeleton {
	// background: rgba($color: #000000, $alpha: 0.1);
	// margin: 5px 0;
	&:nth-child(1) {
		width: 380px;
		height: 30px;
	}
	&:nth-child(2) {
		width: 240px;
		height: 30px;
	}
	&:nth-child(3) {
		width: 160px;
		height: 30px;
	}

	&:nth-child(4) {
		width: 200px;
		height: 50px;
	}
	&:nth-child(5) {
		width: 380px;
		height: 50px;
	}

	&:nth-child(6) {
		width: 200px;
		height: 24px;
	}
	&:nth-child(7) {
		width: 380px;
		height: 24px;
	}
}
</style>
