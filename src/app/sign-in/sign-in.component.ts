import { Component, OnInit } from '@angular/core'
import { AngularFire, AuthProviders, FirebaseListObservable } from 'angularfire2'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isAuth = false
  authColor = 'warn'
  user: any

  constructor(public af: AngularFire) {this.af.auth.subscribe(user => this.changeState(user)) }

  ngOnInit() {

  }

  login(from: string) {
    this.af.auth.login({
      provider: this.getProvider(from)
    })
  }

  logout() {
    this.af.auth.logout()
  }

  changeState(user: any = null) {
    if (user) {
      this.isAuth = true
      this.authColor = 'primary'
      this.user = this.getUserInfo(user)
      if (this.user.email) {
        const listUsers: FirebaseListObservable<any[]> = this.af.database.list('/users/')
        listUsers.push(this.user)
      }

    } else {
      this.isAuth = false
      this.authColor = 'warn'
      this.user = {}
    }
  }

  getUserInfo(user: any): any {
    if (!user) {
      return {}
    }
    const data = user.auth.providerData[0]
    return {
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    }
  }

  getProvider(from: string) {
    switch (from) {
      case 'twitter': return AuthProviders.Twitter
      case 'facebook': return AuthProviders.Facebook
      case 'github': return AuthProviders.Github
      case 'google': return AuthProviders.Google
    }
  }

}
