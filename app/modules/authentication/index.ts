import "angular";
import "jquery";

import {config as routesConfig} from "./configs/routes";
import {LoginPageComponent} from "./components/loginPage/LoginPageComponent";
import {RegisterPageComponent} from "./components/registerPage/RegisterPageComponent";
import {LoginModel} from "./models/LoginModel";
import {RegisterModel} from "./models/RegisterModel";
import {AuthenticationService} from "./services/AuthenticationService";
import "angular-formly";
import "angular-formly-templates-bootstrap";
import {IAuthenticationLocationCheckService} from "./services/AuthenticationLocationCheckService";
import {AuthenticationLocationCheckService} from "./services/AuthenticationLocationCheckService";

angular.module("app.authentication", ["formly", "formlyBootstrap", "ngRoute"])
    .directive("loginPage", () => new LoginPageComponent())
    .directive("registerPage", () => new RegisterPageComponent())
    .service("ILoginModel", LoginModel)
    .service("IRegisterModel", RegisterModel)
    .service("IAuthenticationService", AuthenticationService)
    .service("IAuthenticationLocationCheckService", AuthenticationLocationCheckService)
    .config(routesConfig)
    .run(bootstrapped);

bootstrapped.$inject = ["IAuthenticationLocationCheckService"];
function bootstrapped(authenticationLocationCheckService: IAuthenticationLocationCheckService): void {
    authenticationLocationCheckService.startListening();
}
