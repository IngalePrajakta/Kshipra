<template>
    <v-container>
  <v-form>
    <p class="subtitle-1">Convert to Booking</p><br>
      <v-row dense>
        <v-col cols="12" sm="6" dense>
            <v-row dense>
                <v-col cols="12" sm="4" dense>
                    <v-subheader class="subtitle-2">Customer Name</v-subheader>
                </v-col>
                <v-col cols="12" sm="8">
                    <v-text-field dense
                        label="Enter Name here"
                        required>
                    </v-text-field>
                </v-col>
            </v-row>
            
            <v-row dense>
                <v-col cols="12" sm="4" dense>
                    <v-subheader class="subtitle-2">Contact Email</v-subheader>
                </v-col>
                <v-col cols="12" sm="8" dense>
                    <v-text-field dense
                        label="name@email.com"
                        required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row dense> 
                <v-col cols="12" sm="4" dense>
                    <v-subheader class="subtitle-2">Contact Number</v-subheader>
                </v-col>
                <v-col cols="12" sm="8" dense>
                    <v-text-field dense
                        label="+91-9xxxxxxxxx"
                        required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row dense> 
                <v-col cols="12" sm="4" dense>
                    <v-subheader class="subtitle-2">Resident Location</v-subheader>
                </v-col>
                <v-col cols="12" sm="8" dense>
                    <v-text-field dense
                        label="Area"
                        required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row dense> 
                <v-col cols="12" sm="4" dense>
                    <v-subheader class="subtitle-2">Category</v-subheader>
                </v-col>
                <v-col cols="12" sm="8" dense>
                    <v-text-field dense
                        label="Area"
                        required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row dense>
                <v-col cols="12" sm="2" dense>
                    <v-subheader class="subtitle-2">Number of People</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" dense>
                <v-combobox dense
                    multiple
                    min="0"
                    chips
                    type="number"
                    >
                        <template v-slot:selection="data">
                            <v-chip
                            :key="JSON.stringify(data.item)"
                            v-bind="data.attrs"
                            :input-value="data.selected"
                            :disabled="data.disabled"
                            @click:close="data.parent.selectItem(data.item)"
                            >
                            <v-avatar
                                class="accent white--text"
                                left
                                v-text="data.item.slice(0, 1).toUpperCase()"
                            ></v-avatar>
                            {{ data.item }}
                            </v-chip>
                        </template>
                    </v-combobox>
                </v-col>

                <v-col cols="12" sm="2" dense>
                    <v-subheader class="subtitle-2">Number of Days</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" dense>
                <v-combobox dense
                    type="number"
                    min="0"
                    multiple
                    chips
                    >
                        <template v-slot:selection="data">
                            <v-chip
                            :key="JSON.stringify(data.item)"
                            v-bind="data.attrs"
                            :input-value="data.selected"
                            :disabled="data.disabled"
                            @click:close="data.parent.selectItem(data.item)"
                            >
                            <v-avatar
                                class="accent white--text"
                                left
                                v-text="data.item.slice(0, 1).toUpperCase()"
                            ></v-avatar>
                            {{ data.item }}
                            </v-chip>
                        </template>
                    </v-combobox>
                </v-col>
             </v-row>

             <v-row dense> 
                 <v-col cols="12" sm="2" dense>
                    <v-subheader class="subtitle-2">select Countries</v-subheader>
                </v-col>
                <v-col cols="12" sm="8" dense>
                <v-combobox dense
                    v-model="select"
                    :items="items1"
                    multiple
                    chips
                    >
                        <template v-slot:selection="data">
                            <v-chip
                            :key="JSON.stringify(data.item)"
                            v-bind="data.attrs"
                            :input-value="data.selected"
                            :disabled="data.disabled"
                            @click:close="data.parent.selectItem(data.item)"
                            >
                            <v-avatar
                                class="accent white--text"
                                left
                                v-text="data.item.slice(0, 1).toUpperCase()"
                            ></v-avatar>
                            {{ data.item }}
                            </v-chip>
                        </template>
                    </v-combobox>
                </v-col>
             </v-row>

             <v-row dense>
                 <v-col cols="12" sm="2" dense>
                    <v-subheader class="subtitle-2">Booked package</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" dense>
                <v-combobox dense
                    v-model="select"
                    :items="items2"
                    chips
                    >
                        <template v-slot:selection="data">
                            <v-chip
                            :key="JSON.stringify(data.item)"
                            v-bind="data.attrs"
                            :input-value="data.selected"
                            :disabled="data.disabled"
                            @click:close="data.parent.selectItem(data.item)"
                            >
                            <v-avatar
                                class="accent white--text"
                                left
                                v-text="data.item.slice(0, 1).toUpperCase()"
                            ></v-avatar>
                            {{ data.item }}
                            </v-chip>
                        </template>
                    </v-combobox>
                </v-col>
             </v-row>


 
        </v-col>
        


        <v-col cols="12" sm="6" dense class="pl-5">
            <v-row dense>
                <v-col cols="12" sm="4" dense>
                    <v-subheader class="subtitle-2">Budget</v-subheader>
                </v-col>
                <v-col cols="12" sm="8" dense>
                    <v-text-field dense
                        label="Budget"
                        required>
                    </v-text-field>
                </v-col>
            </v-row>

            <v-row dense>
                <v-col cols="12" sm="12" dense>
                    <v-subheader class="subtitle-2">Customer Expectation</v-subheader>
                </v-col>
            </v-row>
            <v-row dense>
                <v-col cols="12" sm="12">
                    <v-textarea solo height="290"
                        label="Detail Description"
                    ></v-textarea>
                </v-col>
            </v-row>

        </v-col>
    </v-row>
          <v-btn class="float-right" color="primary">submit</v-btn>
    </v-form>
    </v-container>
</template>

    <script>

  export default {

    data: () => ({
        items1:
        [
            'India',
            'Singapore',
            'Maleshiya',

        ],
        items2:
        [
            'package name',
            'item 2',
            'item 3',
        ],
    })
  }

</script>
