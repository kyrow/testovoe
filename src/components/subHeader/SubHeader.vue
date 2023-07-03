<script setup>
import IconPhone from '../icons/IconPhone.vue';
import IconNumber from '../icons/IconNumber.vue'
import { useProduct } from '../../composables/product';
import { watch } from 'vue';
const props = defineProps({
	isUpdate: Boolean
})
const emits = defineEmits(['isUpdated'])
watch(() => props.isUpdate, (test) => {
	emits('isUpdated')
})

</script>

<template>
	<div :class="$style.container">
		<div>
			<img src="../../assets/img/logo.jpeg" :class="$style.logo" alt="">
		</div>




		<div :class="$style.information">

			<div :class="$style.contactsPhone">

				<div :class="$style.phoneBlock">
					<IconNumber :class="$style.icon" />
					<span :class="$style.phone">+7 (700) 890-31-12</span>
				</div>
				<div :class="$style.phoneBlock">
					<IconPhone :class="$style.icon" />
					<span :class="$style.phone">+7 (771) 333-50-55</span>
				</div>

			</div>

			<div :class="$style.info">
				<div :class="$style.infoBlock">
					<font-awesome-icon :class="$style.infoIcon" icon="fa-solid fa-truck" />
					<span :class="$style.infoLink">Доставка</span>
				</div>
				<div :class="$style.infoBlock">
					<font-awesome-icon :class="$style.infoIcon" icon="fa-solid fa-money-bill-1-wave" />
					<span :class="$style.infoLink">Оплата</span>
				</div>
			</div>

			<div :class="$style.cart">
				<div><font-awesome-icon icon="fa-solid fa-cart-shopping" :class="$style.cartIcon" /></div>
				<div :class="$style.cartInfo">
					<span>{{ useProduct().totalCart.value.totalCount }} шт.</span>
					<span>{{ useProduct().totalCart.value.totalPrice }} тг.</span>
				</div>

			</div>
		</div>
	</div>
</template>

<style module>
.container {
	@media (min-width:320px) {
		width: 95%;
		margin: auto;
	}

	@media (min-width:1024px) {
		width: 95%;
		width: 1024px;
		margin: auto;
	}

	background-color: #fff;
	height: 110px;

	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo {

	object-fit: cover;

	@media (min-width:320px) {
		height: 80px;
		width: 30%;
	}

	@media (min-width:320px) {
		height: 100%;
		width: 200px;
	}


}

.information {
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width:320px) {
		width: 55%;
	}

	@media (min-width:720px) {
		width: 60%;
	}

	@media (min-width:1024px) {
		width: 680px;
	}
}

/* phone-block */
.contactsPhone {

	@media (min-width:320px) {
		display: none;
	}

	@media (min-width:720px) {
		display: block;
		height: 60px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}



}

.icon {
	height: 25px;
	color: #0879c9;
}

.infoIcon {
	@media (min-width:320px) {
		height: 20px;
	}

	@media (min-width:720px) {
		height: 25px;
	}

	color: #0879c9;
	padding-right: 10px;
}

.phoneBlock {
	padding: 5px 0;
	width: 180px;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.phone {
	font-size: 18px;
}

/* info-block */

.infoBlock {
	height: 25px;

	display: flex;
	align-items: center;

}

.info {

	@media (min-width:320px) {

		flex-direction: row;
	}

	@media (min-width:720px) {
		flex-direction: column;
	}

	@media (min-width:1024px) {
		width: 245px;
		flex-direction: row;
	}


	display: flex;
	justify-content: space-between;
}

.infoLink {
	@media (min-width:320px) {
		display: none;
	}

	@media (min-width:720px) {
		display: block;
		font-size: 16px;

	}



	color: #0879c9;
	border-bottom: 1px dashed;
}

/* cart */

.cart {
	height: 40px;
	display: flex;

}

.cartIcon {
	color: #0879c9;
	height: 40px;
}

.cartInfo {
	margin-left: 10px;
	display: flex;
	flex-direction: column;
}
</style>