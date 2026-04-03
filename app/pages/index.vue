<template>
	<div class="text-center p-2 lg:flex lg:flex-col lg:items-center">

		<div class="flex items-center justify-center flex-col">
			<img src="/assets/logo-principal.png" alt="" class="max-w-64 mt-9">
		</div>
		<div class="-mt-5">
			<h1 class="text-[#FFB800] text-6xl font-Boldonse font-bold">
				5inces
			</h1>
		</div>
		<div>
			<h3 class="text-white font-bold font-Viga mt-16 text-2xl">
				¡Bienvenido a 5inces!
			</h3>
			<p class="text-white font-Viga text-l mt-3">
				Tu nueva forma de gestionar tus <br> finanzas de manera simple y moderna
			</p>
		</div>
		<div class="mt-6 gap-2 flex flex-col lg:w-1/3 lg:mt-8">
			<nuxt-link to="/auth/login">
				<button class="py-5 text-white border-2 rounded-full w-full lg:py-3" > Login </button>
			</nuxt-link>
			<nuxt-link to="/auth/register">
				<button class="py-5 bg-[#FFB800] rounded-full w-full text-black font-bold font-Boldonse lg:py-3 " > Register </button>
			</nuxt-link>
		</div>
	</div>
</template>

<script lang="ts" setup>

</script>


<style>
body {
	background-color: black;
}
</style>