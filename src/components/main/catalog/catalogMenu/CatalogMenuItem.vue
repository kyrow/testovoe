<script setup>
</script>

<template>
	<div :class="$style.container">
		<slot />
		<font-awesome-icon :class="$style.arrow" icon="fa-solid fa-chevron-down" />
	</div>
</template>

<style module>
.container {

	height: 45px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width:320px) {
		font-size: 10px;
	}

	@media (min-width:720px) {
		font-size: 14px;
	}
}

.container:hover {
	color: #0879c9;
}

.arrow {
	transform: rotate(270deg);
	color: #DBDBDB;
}

.arrow:hover {
	color: #0879c9;
}
</style>