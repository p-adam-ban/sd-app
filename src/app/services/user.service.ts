import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UserData } from '../models/user-data';

// import { USERS } from '../data/mock-data';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private usersUrl = 'api/users'; 


  constructor(
    private http: HttpClient
  ) { }


  // getUsers(): Observable<UserData[]> {
  //   return of(USERS);
  // }
  // getUser(id: number): Observable<UserData> {
  //   return of(USERS.find(user => user.id === id));
  // }




  addUser (user: UserData): Observable<UserData> {
    return this.http.post<UserData>(this.usersUrl, user, httpOptions).pipe(
      catchError(this.handleError<UserData>('addUser'))
    );
  }


  getUsers (): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.usersUrl)    
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }
  getUser(id: number): Observable<UserData> {
    console.log("user ", id)
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<UserData>(url).pipe(
      tap(_ => console.log("fetched user id=${id}")),
      catchError(this.handleError<UserData>(`getUser id=${id}`))
    );  
  }

  updateUser (user: UserData): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions).pipe(
      tap(_ => console.log("user updte")),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser (user: UserData | number): Observable<UserData> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;
  
    return this.http.delete<UserData>(url, httpOptions).pipe(
      catchError(this.handleError<UserData>('deleteUser'))
    );
  }


  searchUsers(term: string): Observable<UserData[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<UserData[]>(`${this.usersUrl}/?name=${term}`).pipe(
      catchError(this.handleError<UserData[]>('searchUsers', []))
    );
  }




  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("error",error); 
      return of(result as T);
    };
  }
}


