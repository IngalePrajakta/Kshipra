<template>
    <v-container class="pa-5">
        <span class="headline">Create new Package</span>
        <v-row dense>
            <v-col cols="12" xs="12" sm="6">
                <v-row dense>
                    <v-col cols="12" sm="12">
                        <v-subheader>Itenary</v-subheader>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="12">
                        <v-chip v-for="(item, index) in days" :key="index" class="mr-1">
                            <v-avatar left color="primary" class="white--text">
                                D
                            </v-avatar>
                            {{ item.title }}
                        </v-chip>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Day Heading</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <v-text-field placeholder="name"></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Select Date</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <v-text-field placeholder="29-9-2019" type="date"></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Day Description</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <v-textarea solo placeholder="Detail Description"></v-textarea>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Meals Included</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <v-select :items="items_meals" chips multiple></v-select>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Hotel</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <v-select :items="items_hotels" chips></v-select>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" xs="12" sm="6">
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            days: [ { title: 'Day 1'}, { title: 'Day 2' }],
            items_meals: [ 'Breakfast', 'Lunch', 'Dinner' ],
            items_hotels: [ 'Hotel 1', 'Hotel 2' ]
        }
    }
}
</script>