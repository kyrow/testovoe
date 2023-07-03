<script setup>
import ProductCard from './ProductCard.vue'
import { useProduct } from '../../../composables/product';
const { products } = useProduct();


</script>

<template>
	<div :class="$style.container">

		<div :class="$style.cardContainer">

			<ProductCard v-for="product in products" :product="product" @updateCart="$emit('updateCart')" />

		</div>
	</div>
</template>

<style module>
.container {
	padding-top: 30px;
	display: flex;
	flex-direction: column;

	justify-content: space-between;
	align-items: center;
}

.cardContainer {
	height: auto;
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
</style>