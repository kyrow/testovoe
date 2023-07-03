<script setup>
import { computed } from 'vue';
import CatalogMenuItem from './CatalogMenuItem.vue';

const props = defineProps({
	isOpen: Boolean,
	default: false
})

</script>

<template>
	<div :class="[$style.menu, props.isOpen ? $style.active : '']">
		<ul :class="$style.searchList">
			<li :class="$style.listItem">
				<CatalogMenuItem>Овощи, фрукты, зелень, грибы</CatalogMenuItem>
			</li>
			<li :class="$style.listItem">
				<CatalogMenuItem>Молочные продукты, сыр, яйца</CatalogMenuItem>
			</li>
			<li :class="$style.listItem">
				<CatalogMenuItem>Мясо и птица</CatalogMenuItem>
			</li>
			<li :class="$style.listItem">
				<CatalogMenuItem>Рыба, икра, морепродукты</CatalogMenuItem>
			</li>
			<li :class="$style.listItem">
				<CatalogMenuItem>Крупы, макароны, бакалея</CatalogMenuItem>
			</li>
			<li :class="$style.listItem">
				<CatalogMenuItem>Консервация, соусы, приправы</CatalogMenuItem>
			</li>
			<li :class="$style.listItem">
				<CatalogMenuItem>Напитки, чай, кофе</CatalogMenuItem>
			</li>
			<li :class="$style.listItem">
				<CatalogMenuItem>Хлеб, кондитерские изделия</CatalogMenuItem>
			</li>
			<li :class="$style.listItem">
				<CatalogMenuItem>Заморозка и готовые блюда</CatalogMenuItem>
			</li>
			<li :class="$style.listBottom">
				<div :class="$style.listBottomElement">
					<div :class="$style.listBottomElementTop"></div>
					<div :class="$style.listBottomElementMid"></div>
					<div :class="$style.listBottomElementBot"></div>
				</div>
			</li>
		</ul>
	</div>
</template>

<style module>
.menu {
	width: 100%;

	display: flex;
	justify-content: space-between;

	position: absolute;
	top: 48px;
	left: -1px;

	z-index: -10;

	transition: all 0.5s;
	transform: translateY(-100%);
	opacity: 0;

	&.active {

		top: 40px;
		left: 0;
		transform: translateY(0);
		z-index: 5;
		opacity: 1;
	}
}





.searchList {
	list-style: none;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	z-index: 5;
	margin: 0;
	padding: 0;
}

.listItem {
	border-bottom: 1px solid #DBDBDB;
	border-left: 1px solid #DBDBDB;
	border-right: 1px solid #DBDBDB;
	padding: 0 15px;
	background-color: #fff;
}

.listItem:hover {
	background-color: #DBDBDB;
}

.listBottom {
	background-color: #fff;
	display: flex;
	height: 45px;
	justify-content: center;
	align-items: center;
	border-left: 1px solid #DBDBDB;
	border-right: 1px solid #DBDBDB;
	border-bottom: 1px solid #DBDBDB;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;

}

.listBottomElement {

	box-sizing: border-box;
	width: 100%;
	height: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;


}

.listBottomElementTop {
	width: 30px;
	border-bottom: 2px solid #DBDBDB;
}

.listBottomElementMid {
	width: 20px;
	border-bottom: 2px solid #DBDBDB;
}

.listBottomElementBot {
	width: 10px;
	border-bottom: 2px solid #DBDBDB;
}
</style>

