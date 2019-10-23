<template>
    <v-container>
  <v-form>
    <p class="subtitle-1">Create New Category</p><br>
      <v-row dense>
        <v-col cols="2">
          <v-subheader class="subtitle-2">Category Name</v-subheader>
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
          <v-subheader class="subtitle-2">Category Description</v-subheader>
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