import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { environment } from './../environments/environment.prod';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatListModule, MatGridListModule, MatCardModule, MatTabsModule, MatButtonModule, MatNativeDateModule, MatIconModule, MatDialogModule, MatProgressBarModule} from '@angular/material';
import { MomentModule } from 'angular2-moment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';
import { ProjectsComponent } from './projects/projects.component';
import { FirebasecvListComponent } from './firebase/firebasecv-list.component';
import { TimelineComponent } from './timeline/timeline.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ArticleComponent,
    ProjectsComponent,
    DialogComponent,
    FirebasecvListComponent,
    TimelineComponent
  ],

  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MomentModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    MatProgressBarModule,
    HttpModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ArticleService, FirebasecvListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
