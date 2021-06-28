<template>
  <header id="header" class="header">
    <div class="container">
      <div class="row">
        <div class="four columns">
          <img src="img/logo.jpg" id="logo">
        </div>
        <div class="two columns u-pull-right">
          <ul>
            <li class="submenu">
              <div style="display: flex;">
                <img src="img/cart.png" id="img-carrito" height="25">
                <span v-if="this.badgeAmount !== 0" class="badge">{{ badgeAmount }}</span>
              </div>

              <CursoCarrito :list="this.shoppingCart"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <CursoHero />
  <CursoAcercade/>

  <div id="lista-cursos" class="container">
    <h1 id="encabezado" class="encabezado">Cursos En Línea </h1>
    <CursoTarjeta :listCourse="this.listCourse"/>
  </div>

  <CursoFooter/>
</template>


<script>

// store
import  { mapGetters } from 'vuex'

// @ components
import CursoCarrito from "@/components/CursoCarrito";
import CursoTarjeta from "@/components/CursoTarjeta";
import CursoHero from "@/components/CursoHero";
import CursoAcercade from "@/components/CursoAcercade";
import CursoFooter from "@/components/CursoFooter";

export default {
  components: {
    CursoFooter,
    CursoAcercade,
    CursoHero,
    CursoCarrito,
    CursoTarjeta,

  },
  computed: {
     ...mapGetters(['listCourse']),
     ...mapGetters(['shoppingCart']),
     ...mapGetters(['badgeAmount'])
  }
}

</script>

<style>

html {
  font-size: 62.5%;
}

body {
  background-color: #f5f3f3
}

h1 {
  text-align: center;
}

h2 {
  font-size: 3rem;
}

h4 {
  font-size: 16px;
  font-weight: 700;
}

header {
  padding: 20px 0 0 0;
  background: white;
  text-align: center;
}

@media (min-width: 750px) {
  header {
    text-align: left;
  }
}

.borrar-curso {
  background-color: red;
  border-radius: 50%;
  padding: 5px 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

ul {
  list-style: none;
}

#encabezado {
  margin: 30px 0;
}

.submenu {
  position: relative;
}

.submenu #carrito {
  display: none;
}

.submenu:hover #carrito {
  display: block;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  background-color: white;
  padding: 20px;
  min-height: 400px;
  min-width: 300px;
}

.vacio {
  padding: 10px;
  background-color: crimson;
  text-align: center;
  border-radius: 10px;
  color: white;
}

.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  margin-left: 10px;
  background-color: red;
  padding: 5px;
  border-radius: 50px;
  color: white;
  height: 12px;
  width: 20px;
}

</style>
