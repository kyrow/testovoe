<script setup>
import IconCompare from '../../icons/IconCompare.vue';
import IconFollow from '../../icons/IconFollow.vue'
import { ref } from 'vue';
import { useProduct } from '../../../composables/product';


const props = defineProps(
	{
		product: Object
	}
)

const emits = defineEmits(['updateCart'])

const isOpen = ref(true)
const productCounter = ref(0)
const openStash = (id, qty) => {
	if (productCounter.value > 0) {
		isOpen.value = false
		useProduct().addCart(id, qty)
		emits('updateCart')
	}
}
const closeStash = () => { isOpen.value = true }

const countPlus = () => {
	productCounter.value++
}

const countMinus = () => {
	if (productCounter.value > 0) {
		productCounter.value--
	}
}

</script>

<template>
	<div :class="$style.container">
		<img :src="props.product.image" :class="$style.image" />
		<span :class="$style.new">Новинка</span>
		<div :class="$style.productInfo">
			<span>{{ props.product.title }}</span>
			<span>{{ props.product.price }} тг./шт</span>
		</div>

		<div :class="$style.productAction">
			<div :class="$style.productActionSwitch" v-if="isOpen">
				<div :class="$style.countContainer">
					<button @click="countMinus">-</button>
					<span>{{ productCounter }}</span>
					<button @click="countPlus">+</button>
				</div>
				<button :class="$style.button" @click="openStash(props.product.id, productCounter)">Купить</button>
			</div>

			<div v-else :class="$style.stash">
				<font-awesome-icon icon="fa-solid fa-cart-shopping" />
				<span>В корзине: {{ productCounter }} </span>
				<font-awesome-icon icon="fa-solid fa-xmark" @click="closeStash" />
			</div>
		</div>

		<div :class="$style.IconContainer">
			<div>
				<IconCompare />
				<span :class="$style.IconText">Сравнить</span>
			</div>
			<div>
				<IconFollow />
				<span :class="$style.IconText">В избранное</span>
			</div>
		</div>

	</div>
</template>

<style module lang="scss">
.container {
	@media (min-width:320px) {
		width: 49%;
		margin-bottom: 10px;
	}

	@media (min-width:720px) {
		width: 33%;
	}

	@media (min-width:1024px) {
		width: 254px;
	}

	position: relative;
	height: 450px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border: 1px solid #d8d8d8;
}

.productInfo {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px;
	height: 80px;
}

.image {
	height: 200px;
	width: 180px;
	object-fit: fill;
}

.productAction {
	width: 100%;
}

.productActionSwitch {

	display: flex;
	justify-content: space-around;
	height: 40px;

}

.new {
	padding: 5px 10px;
	background-color: #0879c9;
	color: #fff;
	position: absolute;
	top: 10px;
	left: 10px;
	border-radius: 10px 0 10px 0;
}

.stash {
	background-color: #d8d8d8;
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.countContainer {
	height: 100%;
	width: 100px;
	display: flex;
	align-items: center;



	button {
		min-width: 30px;
		height: 100%;
		border: none;
		font-size: 18px;
		background-color: #d8d8d8;
		color: #0879c9;
		font-size: 18px;
		cursor: pointer;
	}

	span {
		width: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}

.button {
	width: 100px;
	height: 40px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #0879c9;
	cursor: pointer;
}

.IconContainer {
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding-bottom: 10px;
}

.IconText {
	padding-left: 10px;
	border-bottom: 1px dashed #d8d8d8;
	cursor: pointer;
}
</style>
