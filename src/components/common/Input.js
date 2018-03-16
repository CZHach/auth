import React from 'react';
import { TextInput, View, Text } from 'react-native';

console.ignoredYellowBox = ['Remote debugger'];

//functional component for user input
//pass in label, value, and onChangeText, placeholder, 
//secureTextEntry as props from the parent component
const Input = ({ 
    label, value, onChangeText, placeholder, 
    placeholderTextColor, secureTextEntry, underlineColorAndroid
 }) => {
    //destructure styles
    const { inputStyle, labelStyle, containerStyle } = styles;

        return (
            <View style={containerStyle}>
                {/* Both Text and TextInput are children of View
                    They have different flex styling values.
                    flex is how we allocate or proportion available space
                    for each sibling. So TextInput gets 2/3 of the space
                    and Text gets 1/3 of the space.
                */}
                <Text style={labelStyle}>{label}</Text>
                {/* send these props to the react-native TextInput component
                underlineColorAndroid: 'transparent' removes the bottom
                line in android form fields  */}
                <TextInput
                underlineColorAndroid={underlineColorAndroid}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                autoCorrect={false}
                style={inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        );
    };

const styles = {
    inputStyle: {
        color: '#000',
        backgroundColor: '#eef2f4',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        textAlign: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 0,
        flex: 0
    },
    // containerStyle gets a flex of 1 to fill up all available space
    containerStyle: {
        height: 40,
        flex: 1,  
        flexDirection: 'row',
        alignItems: 'center'

    }
};

export { Input };
