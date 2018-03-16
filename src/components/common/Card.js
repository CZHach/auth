import React from 'react';
import { View } from 'react-native';

//functional component for a container screen element
//Child component of AlbumDetails

//reusable custom component with custom styling
//access passed data from AlbumDetails with props.children
const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );  
};

const styles = {
    containerStyle: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#fff',
        borderBottomWidth: 0,
/*         shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2, */
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };
