import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SettingsComponent } from './settings.component'
import { ProfileComponent } from './profile/profile.component'
import { PasswordComponent } from './password/password.component'
import { GreetDirective } from './../greet.directive';
export const ROUTES: Routes = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', component: ProfileComponent },
            { path: 'password', component: PasswordComponent }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule.forRoot(),
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        SettingsComponent,
        ProfileComponent,
        PasswordComponent,
        GreetDirective
    ],
    exports:[
        NgZorroAntdModule
    ]
})
export class SettingsModule { }