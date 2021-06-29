<template>
  <div class="barra">
    <div class="container">
      <div class="row">
        <div class="four columns icono icono1">
          <p>20,000 Cursos en línea <br>
            Explora los temas más recientes</p>
        </div>
        <div class="four columns icono icono2">
          <p>Instructores Expertos <br>
            Aprende con distintos estilos</p>
        </div>
        <div class="four columns icono icono3">
          <p>Acceso de por vida <br>
            Aprende a tu ritmo</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CursoAcercade'
}
</script>

<style scoped>

.barra {
  padding: 20px 0;
  background: #741d51; /* Old browsers */
  background: -moz-linear-gradient(left, #741d51 0%, #e44e52 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #741d51 0%, #e44e52 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #741d51 0%, #e44e52 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#741d51', endColorstr='#e44e52', GradientType=1); /* IE6-9 */
}

.barra p {
  margin: 0;
  color: white;
}

.icono {
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 60px;
  background-size: 30px;
  margin-bottom: 40px;
  text-align: center;
}

@media (min-width: 750px) {
  .icono {
    margin-bottom: 0;
  }
}

.icono1 {
  background-image: url(/icono1.png);
}

.icono2 {
  background-image: url(/img/icono2.png);
}

.icono3 {
  background-image: url(/img/icono3.png);
}


</style>