<script setup lang="ts">
import WaveSkeleton from '@/wave-skeleton.vue'
</script>

<template>
	<div class="layout">
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
	height: 60px;
	width: 200px;
}
</style>
