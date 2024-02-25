<template>
	<div class="py-6 px-5">
		<div
			v-if="isHorizontalCards"
			class="d-flex flex-wrap justify-space-around"
		>
			<horizontal-card
				v-for="(card, index) in cards"
				:key="'card' + card.title + index"
				class="my-2"
				:cardTitle="card.title"
				:cardSubtitle="card.subtitle"
				:cardImg="card.img"
				:cardText="card.text"
				:buttons="card.buttons"
			/>
		</div>
		<div v-else class="d-flex flex-wrap justify-space-around">
			<project-card
				v-for="(card, index) in cards"
				:key="'card' + card.title + index"
				class="mx-2"
				:cardTitle="card.title"
				:cardSubtitle="card.subtitle"
				:cardImg="card.img"
				:cardText="card.text"
				:buttons="card.buttons"
			/>
		</div>
	</div>
</template>

<script>
	import HorizontalCard from './HorizontalCard.vue'
	import ProjectCard from './ProjectCard.vue'

	export default {
		props: {
			cards: Array,
			isHorizontalCards: {
				type: Boolean,
				default: false
			}
		},

		components: {
			ProjectCard,
			HorizontalCard
		}
	}
</script>
