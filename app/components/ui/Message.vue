<template>
	<div>
		<h3 class="text-white font-bold font-Viga mt-16 text-2xl">
			{{ title }}
		</h3>
		<p class="text-white font-Viga text-l mt-3 whitespace-pre-line">
			{{ description }}
		</p>
	</div>


</template>

<script setup>

defineProps({
	title: String,
	description: String
})


</script>

<style></style>