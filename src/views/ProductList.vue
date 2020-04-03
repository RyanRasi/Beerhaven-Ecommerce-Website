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
      <div class="modal-dialog modal-full" role="document">
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
                <div class="container-fluid">
                  <div class="row">
                <div class="col-md-7" style="padding-top: 10%;">
                  <h1 style="font-family:Lucida Sans Unicode, Lucida Grande, sans-serif; letter-spacing: 6px; word-spacing: 5.2px; font-weight: 700;">{{product.product_name | uppercase}}</h1>
                  <h4>{{product.style | uppercase}} || {{product.abv}} || {{product.alcoholunits}}</h4>
                  <br>
                  <h5 style="color: #93a334;">{{product.tagline}}</h5>
                  <br>

                  <h4 style="padding-top: 20%;">Available in 330ml Bottle / 30l Keg</h4>

                </div>
                <div class="col-md-5 align-self-center">
                <img :src="product.images" alt width="100%"/>
                </div>
                </div>
                </div>

                <div class="form-group">
                  <h5 style="padding-top: 10%;">
                  {{product.description | striphtml}}
                  </h5>
                </div>
                                  <div class="col-md-6">
                                <div class="form-group">
                  <div class="d-flex">
                    <h6 style="padding-top: 20px;">Tags: </h6>
                    <p v-for="tag in product.tags" :key="tag">
                      <span class="p-1">{{tag | uppercase}}</span>
                    </p>
                  </div>
                </div>
                </div>
              </div>

              <!-- product sidebar -->
              <div class="col-md-5">
                <h4 class="display-6"></h4>
                <hr />

                <ul style="list-style-type:none; padding-top: 15%;">
                <li> <div class="row"> <div class="col-md-4"> <h3>12 X 330ml</h3> </div> <div class="col-md-4"> <h3 style="color: #93a334;">{{product.singlebottlecost | currency('£') }}</h3> </div> <div class="col-md-4"> <add-to-cart :image="getImage(this.product.images)" :productId="this.product.id" :price="this.product.singlebottlecost" :name="this.product.product_name"></add-to-cart> </div> </div> </li>
                <br><br>
                <li> <div class="row"> <div class="col-md-4"> <h3>6 X 330ml</h3> </div> <div class="col-md-4"> <h3 style="color: #93a334;">{{product.singlebottlecost | currency('£') }}</h3> </div> <div class="col-md-4"> <add-to-cart :image="getImage(product.images)" :productId="product.id" :price="product.singlebottlecost" :name="product.product_name"></add-to-cart> </div> </div> </li>
                <br><br>
                <li> <div class="row"> <div class="col-md-4"> <h3>3 X 330ml</h3> </div> <div class="col-md-4"> <h3 style="color: #93a334;">{{product.singlebottlecost | currency('£') }}</h3> </div> <div class="col-md-4"> <add-to-cart :image="getImage(product.images)" :productId="product.id" :price="product.singlebottlecost" :name="product.product_name"></add-to-cart> </div> </div> </li>
                <br><br>
                <li> <div class="row"> <div class="col-md-4"> <h3>1 X 330ml</h3> </div> <div class="col-md-4"> <h3 style="color: #93a334;">{{product.singlebottlecost | currency('£') }}</h3> </div> <div class="col-md-4"> <add-to-cart :image="getImage(product.images)" :productId="product.id" :price="product.singlebottlecost" :name="product.product_name"></add-to-cart> </div> </div> </li>
                </ul>
              </div>
            </div>

<div class="row">
  <div class="col-md-4 col-border">
    <h3>INGREDIENTS</h3>
  <h5>Ingredients: {{product.ingredients}}</h5>
  </div>
   <div class="col-md-4 col-border">
     <h3>ABOUT</h3>
     <h5>
      Country of Origin: {{product.countryoforigin}}
      <br>
      Manufacturer: {{product.manufacturer}}
      <br>
      Brewery Location: {{product.brewed}}
      <br>
      Introduced: {{product.introduced}}
     </h5>
  </div>
   <div class="col-md-4 col-border">
     <h3>UNIQUE ASPECT</h3>
     <p>This is a very delicious drink!</p>
  </div>
  </div>

<div class="row">
  <div class="col-md-4">
  <img src="" style="size:80%;" alt="Placeholder Image Goes Here!">
  </div>

   <div class="col-md-8">
     <h3 style="text-align:center;">FOOD PAIRINGS</h3>
     <p>Enjoy this beer with a BBQ on a hot summers day!</p>
  </div>
  </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
      
    </div>
    <footer-bar></footer-bar>
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

.zoom {
  position: absolute;
  margin-bottom: 40px;
  transition: transform 0.5s; /* Animation */
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(
    1.1
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

@media (min-width: 576px) {
  .modal-dialog { max-width: none; }
}

.modal-full {
    min-width: 80%;
    margin: 20px;
}

.modal-full .modal-content {
    min-height: 80vh;
}

.col-border{
  border: 1px solid #ccc;
}
</style>