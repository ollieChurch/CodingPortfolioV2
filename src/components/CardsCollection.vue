<template>
    <div class="py-2 px-5">
        <v-container>
            <project-card
                v-for="(card, index) in cards"
                :key="'card' + card.title + index"
                :cardTitle="card.title"
                :cardImg="card.img"
                :cardText="card.text"
                :buttons="card.buttons"
            />
        </v-container>
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
