import React from "react";
import ButtonSearch from "../component/ButtonSearch";

const SidebarMenu =()=>{
return (
    <nav class="sidebar">
    <div class="menu-content">
      <ul class="menu-items">
        <div class="menu-title">Menu de Busqueda</div>
        <ButtonSearch />
        <li class="item">
          <a href="#">Peliculas</a>
        </li>
        <li class="item">
          <a href="#">Series</a>
        </li>
        <li class="item">
          <a href="#">Your second link</a>
        </li>
        <li class="item">
          <a href="#">Your third link</a>
        </li>
      </ul>
    </div>
  </nav>
    
)

}
export default SidebarMenu