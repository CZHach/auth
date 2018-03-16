//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//function component for a Header 
//props are used in parent to child component communication
//in this case, props contains the headerText which we set and passed from App.js
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    headerStyle: {
        fontSize: 20
    }
  };
//make components available
export { Header };
