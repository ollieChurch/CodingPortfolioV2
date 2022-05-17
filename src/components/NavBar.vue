<template>
    <div>
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

            <v-navigation-drawer v-model="drawer" absolute temporary right color="secondary" :width="300">
                <v-toolbar color="accent" prominent class="d-flex justify-center">
                    <p class="text-h4 primary--text align-self-center">Where to?</p>
                </v-toolbar>
                <v-list>
                    <v-list-item
                        v-for="(item, index) in navItems"
                        :key="item.name + index"
                        :to="item.link"
                        link
                    >
                        <v-list-item-icon left>
                            <v-icon class="primary--text" large>mdi-{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="text-h6 primary--text">{{ item.name }}</v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </div>
</template>

<script>
    export default {
        data: function() {
            return {
                drawer: false,
                navItems: [
                    {
                        name: "Articles",
                        link: "#",
                        icon: "typewriter"
                    },
                    {
                        name: "GitHub",
                        link: "#",
                        icon: "github"
                    },
                    {
                        name: "LinkedIn",
                        link: "#",
                        icon: "linkedin"
                    },
                    {
                        name: "CV",
                        link: "#",
                        icon: "clipboard-arrow-down-outline"
                    },
                    {
                        name: "Contact",
                        link: "#",
                        icon: "email-fast"
                    },
                ]
            }
        },

        methods: {
            toggleDrawer: function () {
                this.drawer = !this.drawer
            }
        }
    }

</script>

<style scoped>
    .v-app-bar {
        height: min-content !important; 
        padding: .5em;
    }

    .v-navigation-drawer--absolute {
        position: fixed;
    }

    .logo {
        margin-bottom: -8px;
    }    
</style>