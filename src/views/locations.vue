<template>
  <v-container>
    <v-data-table :headers="headers" :items="packages" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Location</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <div class="flex-grow-1"></div>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <router-link to="/createnewlocation">
                <v-btn color="primary" dark class="mb-2">Create new location</v-btn>
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
                      <v-text-field v-model="editedItem.Location_id" label="Location_id"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.Location_name" label="Location Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.details" label="Details"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.country" label="Country"></v-text-field>
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
          { text: 'Location_id', align: 'left', value: 'Location_id' },
          { text: 'Location_name', value: 'Location_name' },
          { text: 'details', value: 'details' },
          { text: 'country', value: 'country' },
          { text: 'Actions', value: 'action', sortable: false },
        ],
        packages: [],
        editedIndex: -1,
        editedItem: {
          srno: '',
          Location_id: '',
          Location_name: '',
          details: 0,
          country: '',
          action: 0,
        },
        defaultItem: {
          srno: '',
          Location_id: '',
          Location_name: '',
          details: 0,
          country: '',
          action: 0,
        },
      }
    },

    computed: {
      formTitle () {
        //return this.editedIndex === -1 ? 'New Item' : 'Edit Package'
        return 'Edit Location'
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
            Location_id: 'Location ID',
            Location_name: 'Location Name',
            details: 'Details',
            country: 'Country Name'
          },
          {
            srno: '002',
            Location_id: 'Location ID',
            Location_name: 'Location_Name',
            details: 'Details',
            country: 'Country Name'
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

</style>