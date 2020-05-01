import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistroComponent } from './pages/registro/registro/registro.component';
import { LoginComponent } from './pages/login/login/login.component';
import { EmpresaDetalleComponent } from './components/empresa-detalle/empresa-detalle.component';
import { EmpresaCrearComponent } from './components/empresa-crear/empresa-crear.component';
import { EmpresaEditarComponent } from './components/empresa-editar/empresa-editar.component';
import { UsuarioListarComponent } from './components/usuario-listar/usuario-listar.component';
import { EmpresaListarComponent } from './components/empresa-listar/empresa-listar.component';
import { UsuarioDetalleComponent } from './components/usuario-detalle/usuario-detalle.component';


const ROUTES: Routes = 
[
  { path:'home', component: HomeComponent, canActivate:[ AuthGuard ]},
  { path:'registro', component: RegistroComponent},
  { path:'login', component: LoginComponent},  
  { path:'empresaCrear', component: EmpresaCrearComponent, canActivate:[AuthGuard]},
  { path:'empresaDetalle/:id', component: EmpresaDetalleComponent, canActivate:[AuthGuard]},
  { path:'empresaListar', component:EmpresaListarComponent, canActivate:[AuthGuard] },
  { path:'empresaEditar/:id', component: EmpresaEditarComponent, canActivate:[AuthGuard] },
  { path:'usuarioListar', component: UsuarioListarComponent, canActivate:[AuthGuard] },
  { path:'usuarioDetalle/:id', component:UsuarioDetalleComponent, canActivate:[AuthGuard] },
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const APP_ROUTING = RouterModule.forRoot(ROUTES,{  useHash: true });
