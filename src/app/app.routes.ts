import { Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const ROUTES: Routes = [
    { path: '', component: UserProfileComponent },
    { path: 'user', component: UserProfileComponent },
    { path: 'signup', component: SignUpComponent },
];

export { ROUTES };