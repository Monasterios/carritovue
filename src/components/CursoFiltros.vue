<template>
  <div class="filtros">
    <form action="#" id="busqueda" method="post" class="formulario">
      <div>
        <label for="prices"><b>by title</b></label>
      <input style="color:black;" class="u-full-width" type="text" placeholder="title course"
             id="titulocurso">
      </div>

      <div>
      <label for="prices"><b>by instructor</b></label>
      <input style="color:black;" class="u-full-width" type="text" placeholder="instructor course"
             id="instructor">
      </div>

      <div>
      <label for="prices"><b>by price</b></label>
      <input id="prices" type="range" min="0" ref="slider" max="250" step="1" v-model="value" style="width: 100%; margin-bottom: 0;">
      <span>$ {{ value }}</span>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'CursoFiltros',
  data () {
    return {
      value: 50,
    }
  }
}
</script>

<style scoped>



</style>