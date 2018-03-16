import firebase from 'firebase';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

console.disableYellowBox = true;
//class based component for a login form
class LoginForm extends Component {
    //add state to component
    //setting state (this.setState) causes the component to rerender
    //text input component(Input) is not responsible for knowing what the user text is
    //whenever the user enters text, that text is saved to state triggering a re-render
    //when it rerenders, the value of the text input is set from state(which we just saved)
    //initially, set all state items to empty and loading to false
    //the loading state signifies the current loading state.  
    //if loading state is true, then show the spinner, if false, then show the login button.
    state = { email: '', password: '', error: '', loading: false };
    //authenticate user
    
    onButtonPress() {
        //destructure this.state into email and password
        const { email, password } = this.state;
        
        //reset state of 'error' to a empty string
        //to clear error message if button pressed again
        //and to set loading to true so that the loading symbol appears
        this.setState({ error: '', loading: true }); 

        //1) if signInWithEmailAndPassword fails, try createUserWithEmailAndPassword
        //2) if createUserWithEmailAndPassword fails, then show an error
        //use bind when passing a function off to a promise that is going to be invoked
        //sometime in the future and we don't know the context that it will be called with
        //we have to bind the context to (this)
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)  
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        //set the error message that firebase returned and stop the spinner
        this.setState({
            error: 'Login Failed', loading: false
        });
    }

    //helper method called when a user successfully logs in
    onLoginSuccess() {
        //when a user logs in successfully, 
        //clear out state and set loading to false
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    //helper method to render the button or the spinner
    renderButton() {
        //if loading is true, then return the Spinner component
        //otherwise, return the button
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        //use bind when passing a function off that is going to be invoked
        //sometime in the futre and we don't know the context that it will be called with
        //we have to bind the context to (this)
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                LOG IN
            </Button>
        );
    }

    render() {
        return (
            <Card>
                {/* email input */}
                <CardSection>
                    {/* pass in the text value in state and the
                     fat arrow function into the Input component */}
                     {/* send these props to our Input component  */}
                     {/* pass email(the text the user just entered in this field) 
                    as the argument for the fat arrow function */}
                    <Input
                        placeholder="EMAIL"
                        placeholderTextColor="#999"
                        underlineColorAndroid='transparent'
                        label=""
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                {/* password input */}
                {/* pass password(the text the user just entered in this field) 
                as the argument for the fat arrow function */}

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="PASSWORD"
                        placeholderTextColor="#999"
                        underlineColorAndroid='transparent'
                        label=""
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {/* call helper render method */}
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red' 
    }
};

export default LoginForm;
