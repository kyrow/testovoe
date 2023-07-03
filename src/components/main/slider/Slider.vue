<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ref } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Import Swiper styles
export default {
	components: {
		Swiper,
		SwiperSlide,

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
	<swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }"
		:scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange" class="bannerSlider">
		<swiper-slide><img src="../../../assets/img/banner.png" class="sliderImage" alt="banner"></swiper-slide>
		<swiper-slide><img src="../../../assets/img/banner.png" class="sliderImage" alt="banner2"></swiper-slide>
		<swiper-slide><img src="../../../assets/img/banner.png" class="sliderImage" alt="banner3"></swiper-slide>
	</swiper>
</template>

<style lang="scss">
.bannerSlider {
	width: 100%;

	@media (min-width:320px) {
		height: 340px;

	}

	@media (min-width:720px) {
		height: 300px;

	}


	@media (min-width:1024px) {
		height: 280px;

	}

	.sliderImage {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.swiper-pagination-bullets {
		width: 110px !important;
		position: absolute;
		right: 30px;
		bottom: 20px !important;
		left: auto !important;

		border-radius: 10px;

		background-color: black;
		opacity: 0.7;
	}

	.swiper-pagination-bullet {
		background-color: #fff;
		border: 1px solid #fff;
	}



	.swiper-button-next {
		background-color: #000;
		opacity: 0.7;
		border-radius: 50%;
		height: 30px !important;
		width: 30px !important;

	}

	.swiper-button-next:after {
		font-size: 16px !important;
		color: #fff;
	}

	.swiper-button-prev {
		background-color: #000;
		opacity: 0.7;
		border-radius: 50%;
		height: 30px !important;
		width: 30px !important;
	}

	.swiper-button-prev:after {
		font-size: 16px !important;
		color: #fff;
	}
}
</style>