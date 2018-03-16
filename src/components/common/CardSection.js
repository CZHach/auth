import React from 'react';
import { View } from 'react-native';

//functional component for a block-like section inside a Card
//Child component of Card

//doesn't need access to state,
//so we will make this a functional component
//this component contains custom styling
//Parent component(Card) passes in data from AlbumDetails
//So it goes: AlbumDetails -> Card -> CardSection
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>{props.children}</View>
    );
};

//flexDirection row tells flexbox to position items left to right
//justifyContent flex-start tells flexbox to align elements to the left
const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#fff',
        position: 'relative'

    }
};

export { CardSection };

