<script setup>
import { ref } from 'vue';
import Menu from '../menu/Menu.vue'

const toggleCompanyMenu = ref(false)
const toggleMoreMenu = ref(false)
const togglePhoneMenu = ref(false)
const burgerMenu = ref(false)

const toggleBurgerMenu = () => {
	burgerMenu.value = !burgerMenu.value
}

const activeCompanyMenu = () => {
	toggleCompanyMenu.value = !toggleCompanyMenu.value
}
const activeMoreMenu = () => {
	toggleMoreMenu.value = !toggleMoreMenu.value
}
const activePhoneMenu = () => {
	togglePhoneMenu.value = !togglePhoneMenu.value
}


</script>

<template>
	<header>
		<div :class="$style.container">


			<div :class="$style.burgerBlock">
				<font-awesome-icon :class="$style.menuBar" icon="fa-solid fa-bars" @click="toggleBurgerMenu" />
				<div :class="burgerMenu ? [$style.burgerMenuActive] : [$style.burgerMenu]">
					<ul :class="$style.burgerMenuNav">
						<li>О компании</li>
						<li>Новости</li>
						<li>Акции</li>
						<li>Вакансии</li>
						<li>Контакты</li>
						<li>Еще</li>
					</ul>
				</div>
			</div>



			<div :class="$style.phoneBlock">
				<span>+7 (700) 890-31-12</span>
				<font-awesome-icon icon="fa-solid fa-chevron-down" :class="$style.arrow" @click="activePhoneMenu" />
				<Menu v-if="togglePhoneMenu">+7 (700) 890-31-12</Menu>
			</div>

			<ul :class="$style.navigation">
				<li :class="$style.navEleventActive" @click="activeCompanyMenu">О компании
					<font-awesome-icon :class="$style.arrow" icon="fa-solid fa-chevron-down" />
					<Menu v-if="toggleCompanyMenu">
						Тут что-то о компании
					</Menu>
				</li>
				<li :class="$style.navElevent">Новости</li>
				<li :class="$style.navElevent">Акции</li>
				<li :class="$style.navElevent">Вакансии</li>
				<li :class="$style.navElevent">Контакты</li>
				<li :class="$style.navEleventActive" @click="activeMoreMenu">Еще
					<font-awesome-icon :class="$style.arrow" icon="fa-solid fa-chevron-down" />
					<Menu v-if="toggleMoreMenu">
						Тут еще что-то
					</Menu>
				</li>
			</ul>

			<div :class="$style.links">
				<div :class="$style.linkBlock">
					<font-awesome-icon :class="$style.icon" icon="fa-solid fa-envelope" />
					<span :class="$style.linkName">Напишите нам</span>
				</div>
				<div :class="$style.linkBlock">
					<font-awesome-icon :class="$style.icon" icon="fa-solid fa-user" />
					<span :class="$style.linkName">Личный кабинет</span>
				</div>
			</div>

		</div>
	</header>
</template>

<style module lang="scss">
header {
	height: 50px;
	border-bottom: 1px solid #DBDBDB;

}

.container {

	@media (min-width:320px) {
		background-color: #fff;
		height: 100%;
		width: 95%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (min-width:1024px) {
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 1024px;
		margin: auto;
	}
}

.burgerBlock {
	@media (min-width:320px) {
		display: relative;
	}

	@media (min-width:720px) {
		display: none;
	}
}

.burgerMenu {

	@media (min-width:320px) {
		background-color: #fff;
		position: absolute;
		top: 40px;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 10;
		transform: translateX(-120%);
		transition: all 0.5s;

	}

	@media (win-width:720px) {
		display: none;
	}
}

.burgerMenuActive {
	background-color: #fff;
	position: absolute;
	top: 40px;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 10;
	transform: translateX(0);
	transition: all 1s;
}

.burgerMenuNav {
	list-style: none;
	height: 30%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.menuBar {
	position: absolute;
	top: 15px;
	color: #0879c9;
	cursor: pointer;
}

.phoneBlock {
	position: relative;
	padding-left: 15px;

	@media (min-width:720px) {
		display: none;
	}

	span {
		padding-left: 10px;
	}
}

.navigation {
	@media (min-width:320px) {
		display: none;
	}

	@media (min-width:720px) {
		display: flex;
		justify-content: space-between;
		padding: 0;
		list-style: none;
		width: 60%;
	}

	@media (min-width:1024px) {
		display: flex;
		justify-content: space-between;
		padding: 0;
		list-style: none;
		width: 50%;
	}

}

.links {
	@media (min-width:320px) {
		color: #0879c9;
		width: 20%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (min-width:720px) {

		color: #0879c9;
		height: 100%;
		width: 30%;
		display: flex;
		justify-content: space-between;
		align-items: center;

	}
}

.icon {
	cursor: pointer;
	margin-right: 5px;
	height: 20px;
}

.linkBlock {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.linkName {
	@media (min-width:320px) {
		display: none;
	}

	@media (min-width:720px) {
		display: block;
		border-bottom: 1px dashed;

	}
}

.navElevent {
	color: #0879c9;
	cursor: pointer;
}

.navEleventActive {
	position: relative;
	color: #0879c9;
	cursor: pointer;
}

.arrow {
	padding-left: 5px;
	color: #DBDBDB;
	cursor: pointer;
}
</style>