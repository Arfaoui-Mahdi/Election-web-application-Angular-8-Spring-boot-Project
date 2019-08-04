# Election-web-application-Angular-8-Spring-boot-Project


---------------------Exectution-------------------------

the src.zip and the src folder are the same, i only upload them in case the src folder in corrupted.

steps : 
- u should before all instal npm and the ng CLI 
- after that , generate a new project using "ng new [project-name]
- in the specific folder u'l find a sub folder called src , replace it with the one here
- make sure u are in the project folder and in the prompt type 'ng serve'
-open http://localhost:4200/ and it will open.


ps: the dist folder is the builded version of the project , open on a server and it will work.



---------------------Explanations-----------------------

i've made this V1 responsive front end for our reactive/responsive application that includes only the form page register in which someone could register,
a login form so for an already registred person would authentificate (these last two will be connected in the future with back-end interface, for now 
i only made a test for one logged in person with specific cordiantes that are shown in the login page).
i made also some other pages to explain some functionalities.

so let's begin what functionalities this front-end has.

1-in the register form , a person should fill all the fields and that's done with the property of reactive form in angular 8 (Validators.required)

2-the password and the confirm password should be the same , nad that's been tested with "MustMatch('password', 'confirmPassword')" provided by ng framework.

3-if you look carefuly , you'll find out that there is some pages would only shown if logged in and that's was implemented with the "canActivate" injected function by adding a service 
and injected with the Depedency injection method in the "RouteGuardService" service using the other service "AuthCodeService" (which make sure to give acces only to authentified persons) and finally 
add it as a proprety in "app-routing.modules.app" (which is the file who is responsible of redirecting pages), and that's we could prevent uninlogged person to enter some private pages by changing the url.

4-we talked about "AuthCodeService" but we didn't specify it. AuthCodeService is a service, and a service in an ng app could be injected in any other component by using the depedency injection technique (which presented 
in modern ng versions), it makes sure that the relative password of a specific loggin username correspands to a specific member and give him the acces , we used this function in the html file "header.component.html" which contains some links(it's used on any link actually), u'll see
in the link balie smth looks like "*ngIf="authCodeService.isUserLoggedIn()"" (*ngif is anf if function in ng , authCodeService is the injected object of AuthCodeService,and isUserLoggedIn() is a method inside AuthCodeService).

5-the application is running on "http://localhost:4200/" (you gonna run it on this link if u excute it with 'ng serve'), you'll notice if you enter a wrong adress for exemple http://localhost:4200/lndfqsdmqlsdk u'll be directed to login page. and that's been made by using "this.router.navigate(['login']);" in the RouteGuardService. 

6-we don't yet have a back-end so i've made use of the "Session Storage" (u'll find it by inspecting the web element and browse to "application") to store the username logged in value and use in a method "isUserLoggedIn()" in the AuthCodeService to use it in point "3" , and to remove it with "logout()" method in the same service when the user click the logout link so like 
that no one could see private information (in our case i've made a commponent"page" called datapage which won't be acceced by link only if you logged in) only if he is an authentified member.


-------------this is the V1 of the front-end and still a lot to add but i hope i made a base to start from.-------------
