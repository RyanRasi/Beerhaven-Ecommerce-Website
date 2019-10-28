<template>
  <div class="admin">

<div class="page-wrapper default-theme sidebar-bg bg1 toggled">
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">Admin Dashboard</a>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src=".//.//../../public/img/admin/userEmptyProfile.png" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">First
                            <strong>Last</strong>
                        </span>
                        <span class="user-role">{{email}}</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                             <span>Menu</span>
                        </li>
                        <li>
                          <router-link to="/admin/overview">
                            <i class="fa fa-chart-line"></i>
                             <span>Overview</span>
                          </router-link>
                        </li>

                        <li>
                          <router-link to="/admin/orders">
                            <i class="fa fa-shopping-cart"></i>
                             <span>Orders</span>
                            </router-link>
                        </li>

                        <li>
                          <router-link to="/admin/products">
                            <i class="fa fa-globe"></i>
                             <span>Products</span>
                            </router-link>
                        </li>


                        <li class="header-menu">
                             <span>Extra</span>
                        </li>
                        <li>
                            <router-link to="/admin/profile">
                                <i class="fa fa-user"></i>
                                <span>Profile</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#" @click="logout()">
                                <i class="fa fa-power-off"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>
            <!-- sidebar-footer  -->


        </nav>
        <!-- page-content  -->
        <main class="page-content pt-2">
            <div id="overlay" class="overlay"></div>
            <div class="container-fluid p-5">
                <div class="row">
                    <div class="form-group col-md-12">
                        <h2>Pro Sidebar</h2>
                        <p>This is a responsive sidebar template with dropdown menu based on bootstrap framework.</p>
<router-view/>
                    </div>
                </div>

            </div>
        </main>
        <!-- page-content" -->
    </div>

  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {fb} from "../firebase";

export default {
  name: "admin",
  data(){
    return {
        name: null,
        email: null,
    }
  },
  components: {
    HelloWorld
  },
  methods:{
      logout(){
          fb.auth().signOut()
          .then(() => {
            this.$router.replace('/');
          })
          .catch((error) => {
              console.log(error);
          });
      }
      
  },
  created() {
      var user = fb.auth().currentUser;
      this.name = user.uid;
      this.email = user.email;

  }
  };
</script>
