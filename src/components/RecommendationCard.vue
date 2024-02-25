<template>
	<div class="section-content mt-8 px-5">
		<h4>{{ name }}</h4>
		<p class="text--secondary">{{ jobTitle }}</p>
		<p>{{ text }}</p>
	</div>
</template>

<script>
	export default {
		props: {
			name: String,
			jobTitle: String,
			text: String
		}
	}
</script>
