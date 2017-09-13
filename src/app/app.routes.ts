import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
export const appRoutes:Routes = [
	{
		path: '',
		redirectTo: 'settings',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		loadChildren: './dashboard/dashboard.module#DashboardModule'
	},
	{
		path: 'settings',
		loadChildren: './settings/settings.module#SettingsModule'
	},
	{ 
		path: '**', // fallback router must in the last
		component: AppComponent
	}
];