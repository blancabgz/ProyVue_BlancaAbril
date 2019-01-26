<template>
  <div class="nota">
    <div class="mx-auto w-50">
    <h1>Proyecto Vue.js - Blanca Abril Gonzalez </h1> 
    <br>
    <br>
      <input class="form-control input-lg" id="introducir" v-model="nuevaNota" @keypress.enter="anadirNota()" @keyup="filtrarTarea()" placeholder="What do you want to remember?">
    </div>
    <div class="mx-auto w-50">
      <hr>
      <p style="text-align:left; "><font-awesome-icon icon="chart-bar" style="height:13px;"></font-awesome-icon>
      {{ pendientes }} pending tasks of a total of {{ todo.length }} |
      <a style="color:orange; cursor:pointer;" @click="borrarTodas()"><font-awesome-icon icon="times" style="height:13px;"></font-awesome-icon> Delete completed tasks</a>
      </p>
      <hr>
    </div>
    <div class="animated fadeInLeft mx-auto w-50" style="margin:0px auto; width: 70; border: 1px solid #807979; background-color:#342f2f; border-radius:5px;">
     <div  style="border: 1px solid #807979;" v-for="(todos,index) in filtrarTarea" :key="index" >
      <b-container class="bv-example-row ">
        <b-row align-v="center" >
          <b-col cols="1">
            <b-button variant="basic" style="color:green;" @click="cambiarCompletada(index,true)" v-if="!todos.completada"><font-awesome-icon :icon="['far','circle']"></font-awesome-icon></b-button>
            <b-button variant="basic" style="color:green;" @click="cambiarCompletada(index,false)" v-else><font-awesome-icon :icon="['far','check-circle']"></font-awesome-icon></b-button>
          </b-col>
          <b-col cols="10" style=" text-align:left">
            <h1 v-if="!todos.completada">{{ todos.message }}</h1>
            <h1 v-else ><Strike style="color:green">{{ todos.message }}</Strike></h1>
          </b-col>
          <b-col class="align-self-end" cols="1">
            <b-button variant="danger" @click="borrar(index)"><font-awesome-icon icon="minus-circle" ></font-awesome-icon></b-button>
          </b-col>
        </b-row>

        <b-row align-v="center">
          <b-col cols="1">
          <p style="margin-top:50%;">Priority:</p>
          </b-col>
          <div v-if="todos.prioridad == '3Baja'">
            <b-col cols="1" >
              <b-button-group size="sm">
                <b-button  variant="info" @click="cambiarValor(index,'3Baja')">Low</b-button>
                <b-button  @click="cambiarValor(index,'2Media')">Normal</b-button>
                <b-button  @click="cambiarValor(index,'1Alta')">High</b-button>
              </b-button-group>
            </b-col>
          </div>

          <div v-if="todos.prioridad == '2Media'">
            <b-col cols="1">
              <b-button-group size="sm">
                <b-button @click="cambiarValor(index,'3Baja')" >Low</b-button>
                <b-button @click="cambiarValor(index,'2Media')" variant="primary">Normal</b-button>
                <b-button @click="cambiarValor(index,'1Alta')">High</b-button>
              </b-button-group>
            </b-col>
          </div>

          <div v-if="todos.prioridad == '1Alta'">
            <b-col cols="1">
              <b-button-group size="sm">
                <b-button @click="cambiarValor(index,'3Baja')">Low</b-button>
                <b-button @click="cambiarValor(index,'2Media')">Normal</b-button>
                <b-button @click="cambiarValor(index,'1Alta')" variant="danger">High</b-button>
              </b-button-group>
            </b-col>
          </div>
          
          <b-col cols="1" style="text-align:right; padding-right:0px;">
            <font-awesome-icon icon="clock" ></font-awesome-icon>
          </b-col>
          <b-col cols="7" style="text-align:left; margin-top:2%;" > 
            <p>Added {{ todos.fecha | moment("from", "now", true) }}</p>
          </b-col>
        </b-row>
      </b-container>
  </div>
  </div>
  </div>
  
</template>

<script>
export default {
  name: 'nota',
  data:function(){
     return{
        nuevaNota : '',
        todo: []
     }
     
    },
   
    methods: {
      anadirNota : function(){
        this.todo.push({
          message: this.nuevaNota,
          prioridad: '3Baja',
          fecha: new Date,
          completada: false
        })
 
          this.nuevaNota = "";
        
        
        console.log(this.nuevaNota);
        localStorage.setItem('todasNotas',JSON.stringify(this.todo));
        
      },

      cambiarCompletada : function(indice,valor){
        this.ordenarTareas[indice].completada = valor;
        localStorage.setItem('todasNotas',JSON.stringify(this.todo));
      },

      borrar : function(indice){
        var index = this.todo.indexOf(this.filtrarTarea[indice]);
        this.$delete(this.todo, index);
        localStorage.setItem('todasNotas',JSON.stringify(this.todo));
      },

      borrarTodas : function(){
        this.todo = this.ordenarTareas.filter(function (index) {
          return index.completada == false;
      });
       localStorage.setItem('todasNotas',JSON.stringify(this.todo));
      },
      cambiarValor : function(index, valor){
        this.ordenarTareas[index].prioridad = valor;
        localStorage.setItem('todasNotas',JSON.stringify(this.todo));
      },
      
    },
    computed: {
    pendientes: function(){
      var num=0;
      for(var i=0; i<this.todo.length;i++){
        if(!this.ordenarTareas[i].completada){
          num++;
        }
      }
      return num;
    },

    ordenarTareas:function(){
      return _.orderBy(this.todo,'prioridad');
    },

    filtrarTarea : function(){
        return this.ordenarTareas.filter(nota => {
          return nota.message.toLowerCase().indexOf(this.nuevaNota.toLowerCase()) > -1
        })
    }
  },
    created: function(){
        if(localStorage.getItem('todasNotas')!=null){
          this.todo = JSON.parse(localStorage.getItem('todasNotas')) ;
        }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
