<template>
  <v-container>
    <v-data-table :headers="headers" :items="packages" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>All Packages</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <div class="flex-grow-1"></div>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <router-link to="/createnewpackage_page1">
                <v-btn color="primary" dark class="mb-2">Create new package</v-btn>
              </router-link>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.srno" label="Sr No."></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.category" label="Category"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.package_name" label="Package Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.package_cost" label="Package Cost"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.location" label="Location"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.total_enquires" label="Total Enquires"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <span @click="editItem(item)">
          <v-icon small>
            mdi-pencil
          </v-icon>
          <span class="mr-2">
            Edit
          </span>
        </span>
        <span @click="deleteItem(item)">
          <v-icon small>
            mdi-delete
          </v-icon>
          <span>
            Delete
          </span>
        </span>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        headers: [
          { text: 'Sr No.', align: 'left', value: 'srno' },
          { text: 'Category', align: 'left', value: 'category' },
          { text: 'Package Name', value: 'package_name' },
          { text: 'Package Cost', value: 'package_cost' },
          { text: 'Location', value: 'location' },
          { text: 'Total Enquires', value: 'total_enquires' },
          { text: 'Actions', value: 'action', sortable: false },
        ],
        packages: [],
        editedIndex: -1,
        editedItem: {
          srno: '',
          category: '',
          package_name: '',
          package_cost: 0,
          location: '',
          total_enquires: 0,
        },
        defaultItem: {
          srno: '',
          category: '',
          package_name: '',
          package_cost: 0,
          location: '',
          total_enquires: 0,
        },
      }
    },

    computed: {
      formTitle () {
        //return this.editedIndex === -1 ? 'New Item' : 'Edit Package'
        return 'Edit Package'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.packages = [
          {
            srno: '001',
            category: 'Category 0',
            package_name: 'Package_name_1',
            package_cost: 7000000,
            location: 'Location 0',
            total_enquires: 7000000,
          },
          {
            srno: '002',
            category: 'Category 1',
            package_name: 'Package_name_2',
            package_cost: 7000000,
            location: 'Location 2',
            total_enquires: 7000000,
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.packages.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.packages.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.packages.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.packages[this.editedIndex], this.editedItem)
        } else {
          this.packages.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style>
thead {
  background: #1A237E;
}

thead tr th span {
  color: white;
}

/*td:nth-child(4)::before {
  content: "₹ ";
}*/
</style>