<template>
    <v-container>
  <v-form>
    <p class="subtitle-1">Create Customer</p><br>
      <v-row dense>
        <v-col cols="2">
          <v-subheader class="subtitle-2">Customer Name</v-subheader>
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
          <v-subheader class="subtitle-2">Customer Email</v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field dense
            label="name@gmail.com"
            required>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="2">
          <v-subheader class="subtitle-2">Contact Number</v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field dense
            label="+91 9xxxxxxxx"
            required>
          </v-text-field>
        </v-col>
      </v-row>
            <v-btn class="float-right" color="primary">submit</v-btn>
  </v-form>
</v-container>
</template>