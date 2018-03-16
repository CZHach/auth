import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
//functional component for a button
//Touchable components are just buttons. 

console.ignoredYellowBox = ['Remote debugger'];


const Button = ({ onPress, children }) => {
    //destructure buttonStyle from styles
    const { buttonStyle, textStyle } = styles;
    console.log('in Button - navigateToUrl: ', onPress);
    //TouchableOpacity is a button that changes the opacity when pressed
    //displayAlbumTitle is the function declared in the parent (AlbumDetails)
    //that we run in the onPress handler of Button
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>    
        </TouchableOpacity>
    );
};

//flex 1 means to expand to fill the container
//alignSelf stretch tell element to stretch to fill limits of the container
const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '300',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#12aaeb',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0c90c8',
        marginLeft: 5,
        marginRight: 5
    }
};

export { Button };

