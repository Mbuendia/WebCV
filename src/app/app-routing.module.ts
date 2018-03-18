import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'articles/:id',
    component: ArticleComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }