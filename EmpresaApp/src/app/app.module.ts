import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistroComponent } from './pages/registro/registro/registro.component';
import { NavComponent } from './components/nav/nav.component';
import { RolUsuarioComponent } from './components/rol-usuario/rol-usuario.component';
import { EmpresaCrearComponent } from './components/empresa-crear/empresa-crear.component';
import { EmpresaListarComponent } from './components/empresa-listar/empresa-listar.component';
import { EmpresaDetalleComponent } from './components/empresa-detalle/empresa-detalle.component';
import { EmpresaActualizarComponent } from './components/empresa-actualizar/empresa-actualizar.component';
import { EmpresaEliminarComponent } from './components/empresa-eliminar/empresa-eliminar.component';
import { UsuarioListarComponent } from './components/usuario-listar/usuario-listar.component';
import { UsuarioDetalleComponent } from './components/usuario-detalle/usuario-detalle.component';
import { UsuarioActualizarComponent } from './components/usuario-actualizar/usuario-actualizar.component';
import { UsuarioEliminarComponent } from './components/usuario-eliminar/usuario-eliminar.component';
import { UsuarioEditarComponent } from './components/usuario-editar/usuario-editar.component';
import { EmpresaEditarComponent } from './components/empresa-editar/empresa-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    NavComponent,
    RolUsuarioComponent,
    EmpresaCrearComponent,
    EmpresaListarComponent,
    EmpresaDetalleComponent,
    EmpresaActualizarComponent,
    EmpresaEliminarComponent,
    UsuarioListarComponent,
    UsuarioDetalleComponent,
    UsuarioActualizarComponent,
    UsuarioEliminarComponent,
    UsuarioEditarComponent,
    EmpresaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
