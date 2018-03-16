import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//functional/presentational component (no state needed)

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            {/* if we pass in a size use that, otherwise use large */}
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
