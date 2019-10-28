<template>
  <div class="products">
    <div class="container-fluid">
      <h3 class="d-inline">Product List</h3>

      <button @click="addNew" class="btn btn-primary float-right">Add Product</button>

      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>
                <div class="zoom">
                  <img :src="product.images" alt width="40px" />
                </div>
              </td>
              <td>{{product.product_name}}</td>
              <td>{{product.singlebottlecost | currency('£')}}</td>
              <td>
                <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
                <span>&nbsp;</span>
                <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="product"
      tabindex="-1"
      role="dialog"
      aria-labelledby="productLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- main product -->
              <div class="col-md-7">
                <input
                  class="form-control form-control-sm"
                  type="text"
                  placeholder="Product ID"
                  v-model="product.id"
                  readonly
                />

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product Name"
                    v-model="product.product_name"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product Tagline"
                    v-model="product.tagline"
                    class="form-control form-control-sm"
                  />
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Product Manufacturer"
                        v-model="product.manufacturer"
                        class="form-control form-control-sm"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Country of Origin"
                        v-model="product.countryoforigin"
                        class="form-control form-control-sm"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Style"
                        v-model="product.style"
                        class="form-control form-control-sm"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Product Brewed"
                        v-model="product.brewed"
                        class="form-control form-control-sm"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Product Introduced"
                        v-model="product.introduced"
                        class="form-control form-control-sm"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <vue-editor v-model="product.description"></vue-editor>
                </div>
              </div>
              <!-- product sidebar -->
              <div class="col-md-5">
                <h4 class="display-6">Product Details</h4>
                <hr />

                <h6 class="display-6">Alcohol volume and units</h6>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="ABV"
                        v-model="product.abv"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Alcohol units"
                        v-model="product.alcoholunits"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <h6 class="display-6">Ingredients</h6>

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Ingredients"
                    v-model="product.ingredients"
                    class="form-control form-control-sm"
                  />
                </div>

                <h6 class="display-6">Single bottle</h6>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Single bottle available"
                        v-model="product.singlebottle"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">£</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Single bottle product price"
                          v-model="product.singlebottlecost"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Single bottle size"
                    v-model="product.singlebottlesize"
                    class="form-control"
                  />
                </div>

                <h6 class="display-6">Crate/Multipack</h6>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Multipack bottles available"
                        v-model="product.crate"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">£</span>
                        </div>

                        <input
                          type="text"
                          placeholder="Multipack bottles product price"
                          v-model="product.cratecost"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Crate quantity"
                    v-model="product.cratequantity"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    @keyup.188="addTag"
                    placeholder="Product tags"
                    v-model="tag"
                    class="form-control"
                  />
                  <div class="d-flex">
                    <p v-for="tag in product.tags" :key="tag">
                      <span class="p-1">{{tag}}</span>
                    </p>
                  </div>
                </div>

                <div class="form-group">
                  <label for="product_image">Product Images</label>
                  <input type="file" @change="uploadImage" class="form-control" />
                </div>

                <div class="form-group d-flex">
                  <div class="p-1" v-for="image in product.images" :key="image">
                    <div class="img-wrapp">
                      <img :src="image" alt width="80px" />
                      <span class="delete-img" @click="deleteImage(image,index)">X</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              @click="addProduct()"
              type="button"
              class="btn btn-primary"
              v-if="editMode == 'new'"
            >Save changes</button>
            <button
              @click="updateProduct()"
              type="button"
              class="btn btn-primary"
              v-if="editMode == 'edit'"
            >Apply changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
import { firestore } from "firebase";
import { VueEditor } from "vue2-editor";

export default {
  name: "Products",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },

  data() {
    return {
      products: [],
      product: {
        product_name: null,
        description: null,
        singlebottlecost: null,
        tags: [],
        images: [],
        abv: null,
        alcoholunits: null,
        brewed: null,
        countryoforigin: null,
        crate: null,
        cratecost: null,
        cratequantity: null,
        descritpion: null,
        ingredients: null,
        introduced: null,
        manufacturer: null,
        singlebottle: null,
        singlebottlesize: null,
        style: null,
        tagline: null
      },
      activeProduct: null,
      editMode: null,
      tag: null
    };
  },
  firestore() {
    return {
      products: db.collection("products")
    };
  },
  methods: {
    addTag() {
      this.product.tags.push(this.tag);
      this.tag = "";
    },
    deleteImage(img, index) {
      let image = fb.storage().refFromURL(img);
      this.product.images.splice(index, 1);
      image
        .delete()
        .then(function() {
          console.log("Image Deleted");
        })
        .catch(function(error) {
          // Uh-oh, an error occurred!
          console.log("An error has occurred");
        });
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        // Create a root reference
        //
        //
        //
        var storageRef = fb
          .storage()
          .ref("products/" + file.name + "_" + Math.random());

        let uploadTask = storageRef.put(file);

        console.log(e.target.files[0]);

        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on completion
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.product.images.push(downloadURL);
              console.log("File available at", downloadURL);
            });
          }
        );
      }
    },
    reset() {
      this.product = {
        product_name: null,
        description: null,
        singlebottlecost: null,
        tags: [],
        images: [],
        abv: null,
        alcoholunits: null,
        brewed: null,
        countryoforigin: null,
        crate: null,
        cratecost: null,
        cratequantity: null,
        ingredients: null,
        introduced: null,
        manufacturer: null,
        singlebottle: null,
        singlebottlesize: null,
        style: null,
        tagline: null
      };
    },
    addNew() {
      this.editMode = "new";
      this.reset();
      $("#product").modal("show");
    },

    updateProduct() {
      this.$firestore.products.doc(this.product.id).update(this.product);
      Toast.fire({
        type: "success",
        title: "Updated Product successfully"
      });

      $("#product").modal("hide");
    },
    editProduct(product) {
      this.editMode = "edit";
      this.product = product;
      this.activeProduct = product[".key"];
      $("#product").modal("show");
    },
    deleteProduct(doc) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$firestore.products.doc(doc.id).delete();

          Toast.fire({
            type: "success",
            title: "Deleted Product successfully"
          });
        }
      });
    },
    readData() {},
    addProduct() {
      this.$firestore.products.add(this.product);

      Toast.fire({
        type: "success",
        title: "Product created successfully"
      });

      $("#product").modal("hide");
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-wrapp {
  position: relative;
}
.img-wrapp span.delete-img {
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrapp span.delete-img:hover {
  cursor: pointer;
}

.zoom {
  position: absolute;
  margin-bottom: 40px;
  transition: transform 0.2s; /* Animation */
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(
    3.5
  ); /* (350% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>