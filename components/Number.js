import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = ({ count }) => {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.number}>{count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    numberContainer: {
        alignItems: 'center',
        height: 100,
        marginBottom: 50,
    },
    number: {
        width: 130,
        height: 96,
        color: '#d60000a6',
        backgroundColor: '#000',
        fontSize: 80,
        textAlign: 'center',
    },

});


export default Title;
