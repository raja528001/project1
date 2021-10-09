import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authguard';
import { HomepageComponent } from './homepage/homepage.component';
import { NameTagComponent } from './name-tag/name-tag.component';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
    },
    {
        path: 'namePage',
        component: NameTagComponent,
        canActivate: [AuthGuard],
    },
    {
        path: '**',
        component: HomepageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
