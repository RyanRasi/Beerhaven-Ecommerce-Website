import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

let cart = window.localStorage.getItem("cart");

export default new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart): [],
    },

    getters: {
        subPrice: state => {
          let totalS = 0;
          state.cart.filter((item) => {
              totalS += (item.productPrice * item.productQuantity);
          });
  
          return totalS;
        },
        totalQuantity: state => {
            let totalQ = 0;
            state.cart.filter((item) => {
                totalQ += item.productQuantity;
            });
    
            return totalQ;
          },
          totalTax: state => {
            let totalT = 0;
            state.cart.filter((item) => {
                totalT += ((item.productPrice * item.productQuantity) * 0.2);
            });
    
            return totalT;
          },
          totalPrice: state => {
            let totalP = 0;
            state.cart.filter((item) => {
                totalP += (item.productPrice * item.productQuantity) + ((item.productPrice * item.productQuantity) * 0.2);
            });
    
            return totalP;
          },
          leftTillDelivery: state => {
            var deliveryCharge = "";
            let totalPrice = 0;
              state.cart.filter((item) => {
                totalPrice += (item.productPrice * item.productQuantity) + ((item.productPrice * item.productQuantity) * 0.2);

                  if (totalPrice < 50.00) {
                      deliveryCharge = "Spend " + (50-totalPrice).toFixed(2) + "More To Get Free Delivery!";
                  } else {
                      deliveryCharge = "Delivery Is Free!"
                  }
              });
              return deliveryCharge;
          }
      },

    mutations:{
        addToCart(state, item){

            let found = state.cart.find(product => product.productId == item.productId)

            if(found){
                found.productQuantity++;
            }else{
            state.cart.push(item);
            }

            this.commit("saveData");
        },

        saveData(state){
            window.localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart(state, item){
            let index = state.cart.indexOf(item);

            state.cart.splice(index,1);

            this.commit("saveData");
        }
    }
})