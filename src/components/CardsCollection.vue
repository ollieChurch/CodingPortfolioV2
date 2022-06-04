<template>
    <div class="py-6 px-5">
        <div class="d-flex flex-wrap justify-space-around">
            <project-card
                v-for="(card, index) in cards"
                :key="'card' + card.title + index"
                class="mx-2"
                :cardTitle="card.title"
                :cardImg="card.img"
                :cardText="card.text"
                :buttons="card.buttons"
            />
        </div>
    </div>
</template>

<script>
    import ProjectCard from './ProjectCard.vue'
    export default {
        props: {
            cards: Array
        },

        components: {
            ProjectCard
        }
    }
</script>