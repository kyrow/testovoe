<script setup></script>

<template>
	<div :class="$style.container">
		<input :class="$style.input" type="text" placeholder="Поиск">
	</div>
</template>

<style module>
.container {

	@media (min-width:320px) {
		width: 55%;
	}

	@media (min-width:720px) {
		width: 60%;
	}

	@media (min-width:1024px) {
		width: 680px;
	}

	height: 40px;

}

.input {
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	border: 1px solid #d4d4d4;
	border-radius: 10px;
	padding-left: 20px;

	color: black;
}
</style>