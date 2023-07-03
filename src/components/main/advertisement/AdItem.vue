<script setup>
const props = defineProps(
	{
		title: String,
		image: String,
	}
)

</script>

<template>
	<div :class="$style.container">
		<img :src="props.image" :class="$style.image" />
		<span :class="$style.title">
			{{ props.title }}
		</span>
	</div>
</template>

<style module>
.container {
	margin-bottom: 20px;

	@media (min-width:320px) {
		width: 100%
	}

	@media (min-width:720px) {
		width: 49%
	}

	height: 210px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #d8d8d8;
	border-radius: 10px;

	position: relative;
}

.title {
	position: absolute;
	bottom: 0;
	height: 45px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #0879c9;
	z-index: 2;

	&::after {
		content: '';
		background-color: #fff;
		opacity: 0.8;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;

	}

}

.image {


	border-radius: 10px;
	object-fit: cover;
}
</style>