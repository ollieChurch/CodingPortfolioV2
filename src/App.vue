<template>
    <v-app>
        <nav-bar />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
    import NavBar from './components/NavBar.vue'

    export default {
        components: {
            NavBar
        }
    }
</script>

<style>
    .debug { outline: 2px red solid; }

    .v-toolbar__content { padding: 10px; }
    .v-toolbar__content .v-btn__content { justify-content: right;}

    .bg-color-primary { background-color: var(--v-primary-base); }
    .bg-color-secondary { background-color: var(--v-secondary-base); }
    .bg-color-accent { background-color: var(--v-accent-base); }
    .bg-color-none { background-color: unset; }

    .theme--light.v-list-item--active::before {
        opacity: 0;
    }

    .v-btn:not(.v-btn--round).v-size--x-large {
        height: min-content;
        padding: 0.5em;
        font-size: 2rem;
    }

    .v-card__text, .v-card__title {
        word-break: normal !important;  
    }

	.section-content {
		max-width: 700px;
		margin: 0 auto;
	}
</style>
