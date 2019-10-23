<template>
    <v-container class="pa-5">
        <span class="headline">Create new Package</span>
        <v-row dense>
            <v-col cols="12" xs="12" sm="6">
                <v-row>
                    <v-col cols="12" sm="5">
                        <v-subheader>Select Category</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <v-select :items="items_category" chips></v-select>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Package Name</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <v-text-field placeholder="Enter name here"></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Package Description</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <v-textarea solo placeholder="Detail Description"></v-textarea>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Number of Days</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-text-field solo type="number" min="0"></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Select Countries</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <v-select :items="items_countries" chips multiple></v-select>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" xs="12" sm="6">
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Contact Address</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <v-text-field placeholder="Street Address Line 1"></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" offset-sm="5" sm="7">
                        <v-text-field placeholder="Street Address Line 2"></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Contact Email</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <v-text-field placeholder="name@email.com"></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Contact Number</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <v-text-field placeholder="+91-9xxxxxxxxx"></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" sm="5">
                        <v-subheader>Per Person Cost</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-select solo chip :items="items_currency"></v-select>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-text-field placeholder="Per person cost"></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" offset-sm="5" sm="7">
                        <v-text-field placeholder="Additional person cost"></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-btn x-large color="primary" class="float-right" to="/createnewpackage_page2">Next</v-btn>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            items_category: ['Premium', 'Free' ],
            items_countries: [ 'Malaysia', 'Singapore' ],
            items_currency: [ 'USD', 'Rupees']
        }
    }
}
</script>