<script setup lang="ts">
import WaveSkeleton from '@/wave-skeleton.vue'
</script>

<template>
	<div class="layout">
		<div class="header">
			<WaveSkeleton class="title" />
			<WaveSkeleton class="title smaller" />
		</div>
		<div class="content">
			<WaveSkeleton />
			<WaveSkeleton />
			<WaveSkeleton class="smaller" />
			<WaveSkeleton class="note" />
		</div>
		<div class="content">
			<WaveSkeleton />
			<WaveSkeleton class="smaller" />
		</div>
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

.content {
	margin-top: 20px;
}

.wave-skeleton {
	width: 260px;
	height: 30px;

	&.title {
		width: 280px;
		height: 50px;
	}

	&.note {
		width: 220px;
		height: 24px;
		margin-top: 20px;
		margin-left: 20px;
	}

	&.smaller {
		width: 130px;
	}
}
</style>
