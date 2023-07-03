<script setup>
import { ref } from 'vue'
import Header from './components/header/Header.vue'
import SubHeader from './components/subHeader/SubHeader.vue';
import Main from './components/main/Main.vue'
const isUpdate = ref(false)
const updateCart = (bool) => {
	isUpdate.value = bool
}
</script>

<template>
	<Header />
	<SubHeader :isUpdate="isUpdate" @isUpdated="() => updateCart(false)" />
	<Main @updateCart="() => updateCart(true)" />
</template>

<style scoped></style>
