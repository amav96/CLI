<template>
    <nav>
        <v-toolbar app>
            <v-toolbar-side-icon  @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">

                <router-link to="/" >
                <span class="font-weight-light"> Home</span>
                </router-link>
                

            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="cerrarSesion">
            <span class="mr-2">Cerrar sesion</span>
            <v-icon>logout</v-icon>
            </v-btn>
    </v-toolbar>

    <v-navigation-drawer class="blue lighten-3" v-model="drawer" app>

            <v-layout column align-center mt-5>
                <v-flex>
                    <v-avatar
                    color="grey lighten-4"
                    >
                    <img :src="usuario.foto" alt="avatar">
                    </v-avatar>
                </v-flex>

                <v-flex>
                    <p class="mt-3 white--text" >{{usuario.nombre}}</p>
                </v-flex>

            </v-layout>

            <v-divider></v-divider>

        <v-list>
            <v-list-tile v-for="(item,index) in items" :key="index" :to="item.to">
                <v-list-tile-action>
                    <v-icon class="white--text">
                        {{item.icon}}
                    </v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title class="white--text">{{item.title}}</v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>


        </v-list>
    </v-navigation-drawer>
   
    </nav>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    data(){
        return {
            drawer : false,
            items : [
                {title:'Dashboard', icon:'dashboard',to:'home'},
                {title:'Account', icon:'account_box',to:'ingreso'},
                {title:'Admin', icon:'gavel',to:'admin'},
                {title:'Chat', icon:'chat',to:'chat'},
            ]
        }
    },
     methods:{
    ...mapActions(['cerrarSesion'])
    },
    computed:{
    ...mapState(['usuario'])
    }
}
</script>