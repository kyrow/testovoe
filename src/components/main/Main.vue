<script setup>
import Advertisement from './advertisement/Advertisement.vue';
import BenefitList from './benefitList/BenefitList.vue';
import Catalog from './catalog/Catalog.vue'
import NewProductSlider from './newProductSlider/NewProductSlider.vue';
import Search from './search/Search.vue'
import Slider from './slider/Slider.vue';

</script>

<template>
	<div :class="$style.container">

		<div :class="$style.infoBlock">
			<div :class="$style.infoInputs">
				<Catalog />
				<Search />
			</div>
			<div :class="$style.searchSpace">
				<div :class="$style.invisibleBlock"></div>
				<div :class="$style.sliderZone">
					<Slider />
					<BenefitList />
				</div>
			</div>

		</div>

		<div :class="$style.productSlider">
			<NewProductSlider @updateCart="$emit('updateCart')" />
		</div>

		<Advertisement />
		<div :class="$style.footer"></div>
	</div>
</template>

<style module>
.container {
	@media (min-width:320px) {
		width: 95%;
		margin: auto;
	}

	@media (min-width:1024px) {
		width: 1024px;
		margin: auto;
	}
}

.infoInputs {
	width: 100%;
	display: flex;
	justify-content: space-between;

}

.infoBlock {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: auto;
}

.searchSpace {
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
}

.sliderZone {

	@media (min-width:320px) {
		width: 100%;
		height: 440px;

	}

	@media (min-width:1024px) {
		width: 680px;
	}

	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.invisibleBlock {
	@media (min-width:320px) {
		display: none;
	}

	@media (min-width:1024px) {
		display: block;
		width: 260px;
		height: 440px;

	}
}

.productSlider {
	padding-top: 45px;
}

.footer {
	height: 50px
}
</style>
