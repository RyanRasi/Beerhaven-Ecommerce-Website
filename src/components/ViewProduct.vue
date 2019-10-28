<template>
  <div class="view-product">

    <button class="btn btn-secondary mt-2" @click="viewProduct">View Product</button>

         <!-- Modal -->
    <div
      class="modal fade"
      id="viewProduct"
      tabindex="-1"
      role="dialog"
      aria-labelledby="productLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="editLabel">{{this.viewName}}</h2>
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
                  readonly
                />

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product Name"
                    v-model="this.viewName"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product Tagline"
                    v-model="this.viewTagline"
                    class="form-control form-control-sm"
                  />
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Product Manufacturer"
                        v-model="this.viewManufacturer"
                        class="form-control form-control-sm"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Country of Origin"
                        v-model="this.viewCountryoforigin"
                        class="form-control form-control-sm"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Style"
                        v-model="this.viewStyle"
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
                        v-model="this.viewBrewed"
                        class="form-control form-control-sm"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Product Introduced"
                        v-model="this.viewIntroduced"
                        class="form-control form-control-sm"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <vue-editor v-model="this.viewDescription"></vue-editor>
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
                        v-model="this.viewAbv"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Alcohol units"
                        v-model="this.viewAlcoholunits"
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
                    v-model="this.viewIngredients"
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
                          v-model="this.viewSinglebottlecost"
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
                    v-model="this.viewSinglebottlesize"
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
                          v-model="this.viewCratecost"
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
                    v-model="this.viewCratequantity"
                    class="form-control"
                  />
                </div>





              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

          </div>
        </div>
      </div>
    </div>
    <!-- product view end -->



  </div>
</template>

<script>
import { fb, db } from "../firebase";
import { firestore } from "firebase";
import { VueEditor } from "vue2-editor";

export default {
  name: "view-product",
  components: {
    VueEditor
  },
  props: {
  viewName: String,
  viewDescription: String,
  viewSinglebottlecost: String,
  viewAbv: String,
  viewAlcoholunits: String,
  viewBrewed: String,
  viewCountryoforigin: String,

  viewCratecost: String,
  viewCratequantity: String,
  viewIngredients: String,
  viewIntroduced: String,
  viewManufacturer: String,

  viewSinglebottlesize: String,
  viewStyle: String,
  viewTagline: String
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
    viewProduct() {
      $("#viewProduct").modal("show");
    },
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