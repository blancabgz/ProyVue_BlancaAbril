<template>
  <div id="app" >
    <div id="nav" class="mx-auto w-50 " >
      <nav class="navbar navbar-expand-lg" >
      <div class="collapse navbar-collapse justify-content-center">
          <li class="nav-item active" style="margin-right:20px;">
            <router-link to="/" style="color:orange;">Notes</router-link> |
          </li>
          <li class="nav-item active">
             <router-link to="/weather" style="color:orange;">Weather</router-link>
          </li>
       </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  
}

#app hr{ background-color: grey;}
</style>

