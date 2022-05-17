<template>
    <v-app-bar app color="accent">
        <div>
            <div class="text-h3 primary--text logo font-weight-medium">Ollie</div>
        </div>
        <v-spacer />
        <div>
            <v-btn x-large elevation="0" color="accent" class="primary--text font-weight-bold pr-0" @click.prevent="toggleDrawer">
                <v-icon x-large>mdi-menu</v-icon>
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script></script>

<style scoped>
    .v-app-bar {
        height: min-content !important;
        padding: .5em;
    }

    .logo {
        margin-bottom: -8px;
    }    
</style>