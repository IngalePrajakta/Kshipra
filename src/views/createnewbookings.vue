<template>
    <v-container>
  <v-form>
    <p class="subtitle-1">Confirm Booking</p><br>
      <v-row dense>
        <v-col cols="2">
          <v-subheader class="subtitle-2">Mode of Payment</v-subheader>
        </v-col>
        <v-col cols="4">
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
          <v-subheader class="subtitle-2">Special Instruction</v-subheader>
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
          'cheque',
        ],
    })
  }

</script>
      