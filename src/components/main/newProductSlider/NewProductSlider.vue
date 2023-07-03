<script>
import ProductSlide from './ProductSlide.vue'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper styles
export default {
	components: {
		Swiper,
		SwiperSlide,
		ProductSlide
	},
	setup() {
		const onSwiper = (swiper) => {

		};
		const onSlideChange = () => {

		};
		return {
			onSwiper,
			onSlideChange,
			modules: [Navigation, Pagination, Scrollbar, A11y],

		};
	},
};
</script>

<template>
	<swiper :modules="modules" :slides-per-view="1" :space-between="50" :pagination="{ clickable: true }"
		:scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange" class="productSlider">
		<swiper-slide>
			<span class="SliderTitle">Новинки</span>
			<ProductSlide @updateCart="$emit('updateCart')" />
		</swiper-slide>
		<swiper-slide>
			<span class="SliderTitle">Популярное</span>
			<ProductSlide @updateCart="$emit('updateCart')" />
		</swiper-slide>
		<swiper-slide>
			<span class="SliderTitle">Еще что-то</span>
			<ProductSlide @updateCart="$emit('updateCart')" />
		</swiper-slide>
	</swiper>
</template>

<style lang="scss">
.SliderTitle {
	text-align: center;
	width: 100%;
}

.productSlider {
	height: auto;

	.swiper-pagination {
		top: 0;
		right: 20px;
		left: auto !important;
		width: auto;
	}
}
</style>