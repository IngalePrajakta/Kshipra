<template>
  <v-navigation-drawer app>
    <v-list dense>
      <v-list-item light>
        <v-list-item-avatar>
          <img src="../assets/component.png">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title >
            <h3>Kshipra Hanss</h3>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list subheader dense color="primary" dark>
      <template v-for="(item, index) in navBarItems">
        <v-subheader v-if="item.isHeader" :key="index">
          {{ item.title }}
        </v-subheader>
        <v-list-item v-else :key="index" :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default { 
    
    data: () => ({
      navBarItems: [
        { icon: 'mdi-desktop-mac', title: 'Dashboard', path: '/'},
        { isHeader: true, title: 'Packages' },
        { icon: 'mdi-bag-personal', title: 'All Packages', path: '/allpackages'},
        { icon: 'mdi-map-marker', title: 'Locations', path: '/Locations'},
        { icon: 'mdi-home-city', title: 'Hotels'},
        { icon: 'mdi-sale', title: 'Discount', path: '/discount'},
        { icon: 'mdi-view-dashboard-variant', title: 'Category', path: '/Category'},
        { icon: 'mdi-school', title: 'Schools', path: '/school'},
        { isHeader: true, title: 'Sales' },
        { icon: 'mdi-comment-question', title: 'Enquires', path: '/enquiries'},
        { icon: 'mdi-clipboard-text', title: 'Bookings', path: '/bookings'},
        { icon: 'mdi-calendar-check', title: 'Confirmations', path: '/confirmation'},
        { isHeader: true, title: 'Users' },
        { icon: 'mdi-account-multiple', title: 'Office', path: '/office'},
        { icon: 'mdi-account', title: 'Customer'},
        { icon: 'mdi-chart-bar', title: 'Reports'}
      ],
    })
  }
</script>

<style>
.v-divider {
  border-color: gray;
}
</style>
