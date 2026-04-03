<template>
  <div>
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

</style>