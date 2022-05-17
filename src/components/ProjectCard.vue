<template>
    <v-card color="primary" elevation="8" class="mb-6">
        <v-card-title class="text-h4">{{ cardTitle }}</v-card-title>
        <v-card-subtitle class="text-h5">{{ cardSubtitle }}</v-card-subtitle>
        <v-img :aspect-ratio="2 / 1" max-width="100%" :src="cardImg" />
        <v-card-text class="text-body-1">{{ cardText }}</v-card-text>
        <v-card-actions class="flex-column mt-2">
            <v-btn
                v-for="(button, index) in buttons"
                :key="cardTitle + '-button-' + index"
                large
                block
                color="accent"
                class="mb-2 mx-0 primary--text font-weight-bold"
                elevation="4"
            >
                {{ button.name }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import sfGif from '../assets/images/gif/salaryFinance.gif'

    export default {
        props: {
            cardTitle: {
                type: String,
                default: "Card Title"
            },
            cardSubtitle: String,
            cardImg: {
                default: sfGif
            },
            cardText: String,
            buttons: Array
        }
    }
</script>

<style scoped>
    .v-card button:hover,
    .v-card button:focus {
        background-color: var(--v-secondary-base) !important;
    }
</style>
