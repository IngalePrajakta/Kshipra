<template>
  <v-container>
    <v-data-table :headers="headers" :items="packages" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Discount</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <div class="flex-grow-1"></div>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <router-link to="/createnewdiscount">
                <v-btn color="primary" dark class="mb-2">Create new Discount</v-btn>
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
                      <v-text-field v-model="editedItem.Discount_id" label="Discount_id"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.Discount_name" label="Discount Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.Code" label="Discount Code"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.Type" label="Type"></v-text-field>
                    </v-col>
                     <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.Amount" label="Amount/Percentage"></v-text-field>
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
          { text: 'Discount_id', align: 'left', value: 'Discount_id' },
          { text: 'Discount Name', value: 'Discount_name' },
          { text: 'Discount Code', value: 'Code' },
          { text: 'Type', value: 'Type'},
          { text: 'Amount/Percentage', value: 'Amount'},
          { text: 'Actions', value: 'action', sortable: false },
        ],
        packages: [],
        editedIndex: -1,
        editedItem: {
          srno: '',
          Discount_id: '',
          Discount_name: '',
          Code: 0,
          Type: '',
          Amount: 0,
        },
        defaultItem: {
          srno: '',
          Discount_id: '',
          Discount_name: '',
          Code: 0,
          Type: '',
          Amount: 0,
        },
      }
    },

    computed: {
      formTitle () {
        //return this.editedIndex === -1 ? 'New Item' : 'Edit Package'
        return 'Edit Discount'
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
            Discount_id: 'Discount_id',
            Discount_name: 'Discount Name',
            Code: 'Code',
            Type: 'Type',
            Amount: 'Amount/Percentage'
          },
          {
            srno: '002',
            Discount_id: 'Discount_id',
            Discount_name: 'Discount Name',
            Code: 'Code',
            Type: 'Type',
            Amount: 'Amount/Percentage'
            
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