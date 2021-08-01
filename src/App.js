import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils'
import {  createUserProfileCocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }

  }

  unsubscibeFromAuth = null 


  componentDidMount() {
    this.unsubscibeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
  
      
      const userRef = await createUserProfileCocument(userAuth) 

      console.log(userRef)
      
        userRef.onSnapshot(snapShot => {
          this.setState({ 
            currentUser: {
              id: snapShot.id, 
              ...snapShot.data()
        }
      }
      // },
      // () => {
     
      //   console.log(this.state)
    
      // }
      )
    })
     
    }

    this.setState({currentUser: userAuth})
  })
    
  }

  componentWillUnmount() {
    this.unsubscibeFromAuth()
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
