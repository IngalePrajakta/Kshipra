<template>
    <v-container class="pa-5">
      <v-row class="mt-5 mx-5">
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" v-for="(item, index) in items" :key="index">
          <v-card class="pa-5">
            <span class="headline">{{ item.title }}</span>
            <v-chip color="red lighten-4" class="float-right" v-if="item.agent">
              {{ item.agent }}
              <v-avatar right color="red">
                {{ item.value }}
              </v-avatar>
            </v-chip>
            <span class="mt-5 d-block">
              <v-btn x-large color="primary" :to="item.path">
                {{ item.button }}
              </v-btn>
              <span class="float-right orange--text display-2">
                {{ item.quantity }}
              </span>
            </span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {title: 'BOOKINGS', agent: '', value: '', button: 'Convert to Bookings', quantity: '105'},
        {title: 'ENQUIRES', agent: '', value: '', button: 'Create Enquiry', quantity: '300'},
        {title: 'CONFIRMATIONS', agent: '', value: '', button: 'Confirm Booking', quantity: '647'},
        {title: 'PACKAGES', agent: '', value: '', button: 'View Assigned Package', quantity: '025', path: '/createnewpackage'}
      ]
    }
  }
}
</script>
