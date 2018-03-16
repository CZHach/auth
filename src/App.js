import React, { Component } from 'react';
import { View, YellowBox } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.disableYellowBox = true;

//main class based component
class App extends Component {

    //set default state of loggedIn to null because
    //we don't know yet
    state = { loggedIn: null };

    //life cycle method -- automatically called
    componentWillMount() {
        //initialize firebase
        firebase.initializeApp({
            apiKey: 'AIzaSyCw0ykiKiZFg-r7EVFWZN8i1dFOLj7iboY',
            authDomain: 'auth-ec763.firebaseapp.com',
            databaseURL: 'https://auth-ec763.firebaseio.com',
            projectId: 'auth-ec763',
            storageBucket: 'auth-ec763.appspot.com',
            messagingSenderId: '879911945881'
        });
        
        //Tracks the login state of the user
        //fat arrow function called whenever a user signs in or signs out
        //user argument -- an object that represents the user
        //set state based on what that object is (defined or undefined/null)
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    //helper method for logging out
    onButtonPress() {
        firebase.auth().signOut();
    }

    //helper method to render the content
    //based on loggedIn state, either render
    // a Spinner component(this.state.loggedIn = null),
    //a Button component(this.state.loggedIn = true) or
    // render the LoginForm component(this.state.loggedIn = false )
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
            return (
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        LOG OUT
                    </Button>
                </CardSection>
            );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="LOG IN" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
