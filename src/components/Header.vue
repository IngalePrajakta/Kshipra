<template>
    <v-app-bar app color="warning">
        <v-text-field class="mt-5 ml-5" placeholder="Search for something..."></v-text-field>
        <v-spacer></v-spacer>
        <v-divider vertical></v-divider>
        <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" color="warning" x-large depressed class="black--text">
                    <v-icon x-large left class="mr-5">mdi-account-circle</v-icon>
                    {{ user }}
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" @click="">
                    <v-icon left class="mr-5">{{ item.icon }}</v-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
export default {
    data ( ) {
        return {
            user: 'Admin',
            items: [
                { icon: 'mdi-account-circle', title: 'Profile' },
                { icon: 'mdi-logout-variant', title: 'Logout' }
            ]
        }
    }
}
</script>