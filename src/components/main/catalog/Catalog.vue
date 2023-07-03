<script setup>
import { ref } from 'vue';
import CatalogMenu from './catalogMenu/CatalogMenu.vue'
import IconCatalog from '../../icons/IconCatalog.vue';

const menuActive = ref(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? false : true)



const toggleMenu = () => { menuActive.value = !menuActive.value }

</script>

<template>
	<div :class="[$style.container, menuActive ? $style.active : '']">
		<div :class="$style.menuSpace">
			<IconCatalog />
			<span>КАТАЛОГ ТОВАРОВ</span>
			<font-awesome-icon :class="$style.arrow" icon="fa-solid fa-chevron-down" @click="toggleMenu" />
		</div>
		<CatalogMenu :isOpen="menuActive" />
	</div>
</template>

<style module lang="scss">
.container {
	height: 40px;

	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	position: relative;
	background-color: #fff;
	overflow: hidden;

	&.active {
		overflow: visible;
	}

	@media (min-width:320px) {
		width: 40%;
		background-color: #0879c9;

	}

	@media (min-width:720px) {
		width: 260px;
		margin: 0;
	}

}

.arrow {
	cursor: pointer;
	color: #DBDBDB;
}

.menuSpace {
	max-width: 260px;
	height: 100%;
	padding: 0 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	z-index: 9;
	background-color: #0879c9;

	span {
		@media (min-width:320px) {
			font-size: 10px;
			color: #fff;
		}
	}
}
</style>

