import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }
  
   getUserDetails() {
    if(localStorage.getItem('userData')){

      return localStorage.getItem('userData')

    }else{
      return null
    }
    
  }

  setDataInLocalStorage(variableName: string, data : string)  {
      localStorage.setItem(variableName, data);
  }

  getToken() {
      return localStorage.getItem('token');
  }

  clearStorage() {
      localStorage.clear();
  }

  /*  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private url = ' http://localhost:8080/api/auth';

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router
    ){
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers' : '*'
        })
    };

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username, password) {
        return this.http.post<any>(this.url + '/signin', { username, password }, this.httpOptions)
            .pipe(map(data => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                const user =  new User(data.accessToken, data.username);
                console.log(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
       // this.currentUserSubject.unsubscribe();
        this.currentUserSubject.next(null);
    }

    register(username, email, password) {
        return this.http.post<any>(this.url + '/signup', { username, email, password }, this.httpOptions).subscribe( 
            data => {
                console.log("User is registered succesfully!");
                setTimeout(() => {
                    alert("User is registered succesfully!");
                    this.router.navigate(['/signin']);
                  },
                    1000);
            },
            err => {
                return console.log(err);
            }
        )
    }; */
}