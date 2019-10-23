<template>
    <v-container>
  <v-form>
    <p class="subtitle-1">Create New Discount</p><br>
      <v-row dense>
        <v-col cols="2">
          <v-subheader class="subtitle-2">Discount Name</v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field dense
            label="Enter Name here"
            required>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="2">
          <v-subheader class="subtitle-2">Discount Code</v-subheader>
        </v-col>
        <v-col cols="4">
         <v-text-field dense
            required>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="2">
          <v-subheader class="subtitle-2">Discount Type</v-subheader>
        </v-col>
        <v-col cols="8">
           <v-combobox dense
            v-model="select"
            :items="items"
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
        <v-col cols="2">
          <v-subheader class="subtitle-2">Discount Amount</v-subheader>
        </v-col>
        <v-col cols="8">
           <v-text-field dense
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="2">
          <v-subheader class="subtitle-2">Discount Percentage</v-subheader>
        </v-col>
        <v-col cols="8">
           <v-text-field dense
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="2">
          <v-subheader class="subtitle-2">Discount Description</v-subheader>
        </v-col>
        <v-col cols="8">
           <v-textarea solo dense
            label="Detail Description"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-btn class="float-right" color="primary">submit</v-btn>
  </v-form>
      </v-container>
</template>

<script>

  export default {

    data: () => ({
      name: '',
      select: [ ],
        items: [
          'Flat',
          'Discount',
        ],
    })
  }

</script>