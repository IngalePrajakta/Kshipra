import Vue from 'vue'
import Router from 'vue-router'
import dashboardadmin from '@/views/dashboardadmin.vue'
import allpackages from '@/views/allpackages.vue'
import createnewpackage_page1 from '@/views/createnewpackage_page1.vue'
import createnewpackage_page2 from '@/views/createnewpackage_page2.vue'
import locations from '@/views/locations.vue'
import createnewlocation from '@/views/createnewlocation.vue'
import discount from  '@/views/discount.vue'
import createnewdiscount from '@/views/createnewdiscount.vue'
import Category from '@/views/Category.vue'
import createnewcategory from '@/views/createnewcategory.vue'
import school from '@/views/school.vue'
import createnewschool from '@/views/createnewschool.vue'
import enquiries from '@/views/enquiries.vue'
import createnewenquiries from '@/views/createnewenquiries.vue'
import bookings from '@/views/bookings.vue'
import createnewbookings from '@/views/createnewbookings.vue'
import createnewuser from '@/views/createnewuser.vue'
import office from '@/views/office.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboardadmin',
      component: dashboardadmin
    },
    {
      path: '/allpackages',
      name: 'allpackages',
      component: allpackages
    },
    {
      path: '/createnewpackage_page1',
      name: 'createnewpackage_page1',
      component: createnewpackage_page1
    },
    {
      path: '/createnewpackage_page2',
      name: 'createnewpackage_page2',
      component: createnewpackage_page2
    },
    {
      path: '/locations',
      name: 'locations',
      component: locations 
    },
    {
      path: '/createnewlocation',
      name: 'createnewlocation',
      component: createnewlocation
    },
    {
      path: '/discount',
      name: 'discount',
      component: discount 
    },
    {
      path: '/createnewdiscount',
      name: 'createnewdiscount',
      component: createnewdiscount 
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category 
    },
    {
      path: '/createnewcategory',
      name: 'createnewcategory',
      component: createnewcategory 
    },
    {
      path: '/school',
      name: 'school',
      component: school 
    },
    {
      path: '/createnewschool',
      name: 'createnewschool',
      component: createnewschool 
    },
    {
      path: '/enquiries',
      name: 'enquiries',
      component: enquiries 
    },
    {
      path: '/enquiries',
      name: 'enquiries',
      component: enquiries 
    },
    {
      path: '/createnewenquiries',
      name: 'createnewenquiries',
      component: createnewenquiries 
    },
    {
      path: '/bookings',
      name: 'bookings',
      component: bookings 
    },
    {
      path: '/createnewbookings',
      name: 'createnewbookings',
      component: createnewbookings 
    },
    {
      path: '/office',
      name: 'office',
      component: office 
    },
    {
      path: '/createnewuser',
      name: 'createnewuser',
      component: createnewuser 
    },
  

  ]
})
