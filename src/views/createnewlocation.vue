<template>
    <v-container>
  <v-form>
    <p class="subtitle-1">Create New Location</p><br>
      <v-row dense>
        <v-col cols="2">
          <v-subheader class="subtitle-2">Location Name</v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Enter Name here"
            required>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="2">
          <v-subheader class="subtitle-2">Select Country</v-subheader>
        </v-col>
        <v-col cols="4">
          <v-select
            chips
            :items="items"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="2">
          <v-subheader class="subtitle-2">Location Description</v-subheader>
        </v-col>
        <v-col cols="8">
           <v-textarea solo
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
      select: null,
      items: [
        'India',
        'Item 2',
        'Item 3',
        'Item 4',
      ],

    })
  }

</script>