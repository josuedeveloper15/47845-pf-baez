import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IconsModule } from './pages/icons/icons.module';
import { FormsModule as FormsPageModule } from './pages/forms/forms.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [DashboardComponent, ToolbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    IconsModule,
    FormsPageModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    TranslateModule,
    SharedModule,
    HomeModule,
    MatListModule,
    RouterModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
