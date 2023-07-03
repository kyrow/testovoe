<script setup>
import AdItem from './AdItem.vue';

const adList = [
	{
		title: "Томатный кетчуп Heinz",
		image: "/img/heinz.png"
	},
	{
		title: "Майонез классический Провансаль",
		image: "/img/mayo.png"
	},
	{
		title: "Газированная вода Tassay",
		image: "/img/tassay.png"
	},
	{
		title: "Фанта Ананас",
		image: "/img/fanta.png"
	},
]
</script>

<template>
	<div :class="$style.container">
		<AdItem v-for="item in adList" :title="item.title" :image="item.image">
		</AdItem>
	</div>
</template>

<style module>
.container {

	width: 100%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
</style>