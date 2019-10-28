<template>
  <div class="productlist" id="products">
    <Navbar></Navbar>
    <Login></Login>
    <shopping-cart></shopping-cart>
    <div class="container-fluid">
      <h1 class="text-center p-5">Our Products</h1>

      <div class="row">
        <div class="col-md-3" v-for="product in products" :key="product.id">
          <div class="card product-item mb-5">
            <carousel :perPage="1">
              <slide v-for="(image, index) in product.images" :key="index.id">
                <img
                  :src="image"
                  class="card-img-top"
                  alt="..."
                  min-width="100%"
                  max-height="100%"
                  object-fit="contain"
                />
              </slide>
            </carousel>

            <div class="card-body">
              <div class="d-flex justify-content-between">
                <table width="100%">
                  <tr>
                  <th>{{ product.product_name }}</th>
                  </tr>
                <tr>
                  <th>
                    {{ product.singlebottlecost | currency('£') }}
                    </th>
                  </tr>
                </table>
              </div>

              <add-to-cart
                :image="getImage(product.images)"
                :productId="product.id"
                :price="product.singlebottlecost"
                :name="product.product_name"
              ></add-to-cart>
              <button class="btn btn-success mt-3" @click="viewProduct(product)">View Product</button>

            </div>
          </div>
        </div>
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
            <h5 class="modal-title" id="editLabel">{{product.product_name}}</h5>
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
                  v-model="product.id"
                  readonly
                />

                <div class="form-group">
                  <h2>{{product.product_name | uppercase}}</h2>
                </div>

<img :src="product.images" alt width="80%" />

                <div class="form-group">
                  <h5>
                  {{product.tagline}}
                  </h5>
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
                  {{product.description | striphtml}}
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
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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
        getImage(images) {
      return images[0];
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
    viewProduct(product) {
      this.editMode = "edit";
      this.product = product;
      this.activeProduct = product[".key"];
      $("#product").modal("show");
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

.products {
  margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
.productlist {
  background: linear-gradient(to left, #3e5151, #decba4);
}
td, th {
  border: 1px solid #dddddd;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
.card { background-color: rgba(245, 245, 245, 0.4); }
</style>