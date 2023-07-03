<script setup></script>

<template>
	<div :class="$style.container">
		<slot />
	</div>
</template>

<style module>
.container {

	@media (min-width:320px) {
		height: 80px;
		width: 20%;
		font-size: 10px;
	}

	@media (min-width:720px) {
		width: 155px;
		height: 120px;
		font-size: 18px;
	}


	border: 1px solid #D4D4D4;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>