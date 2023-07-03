<script setup></script>
<template>
	<div class="menu">
		<slot />
	</div>
</template>

<style scoped>
.menu {
	z-index: 5;
	padding: 15px;
	position: absolute;
	top: 35px;
	left: 0;
	background-color: #fff;
	border: 2px solid #d8d8d8;
	border-top: none;

}
</style>