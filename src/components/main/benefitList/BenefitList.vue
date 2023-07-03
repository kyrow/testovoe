<script setup>
import IconFile from '../../icons/IconFile.vue';
import BenefitItem from './BenefitItem.vue';
import IconMoney from '../../icons/IconMoney.vue'
import IconCart from '../../icons/IconCart.vue'
import IconDelivery from '../../icons/IconDelivery.vue'

</script>

<template>
	<div :class="$style.container">
		<BenefitItem>
			<IconDelivery :class="$style.icon" />
			<span>Бесплатная</span>
			<span>доставка</span>
		</BenefitItem>
		<BenefitItem>
			<IconFile :class="$style.icon" />
			<span>Гарантия</span>
			<span>качества</span>
		</BenefitItem>
		<BenefitItem>
			<IconMoney :class="$style.icon" />
			<span>Удобная</span>
			<span>оплата</span>
		</BenefitItem>
		<BenefitItem>
			<IconCart :class="$style.icon" />
			<span>Как</span>
			<span>купить ?</span>
		</BenefitItem>
	</div>
</template>

<style module>
.container {
	display: flex;
	justify-content: space-between;
}

.icon {

	@media (min-width:320px) {
		height: 20px;
	}

	@media (min-width:720px) {
		height: 30px;
	}

	padding-bottom: 10px;

	color: #0879c9;
}
</style>