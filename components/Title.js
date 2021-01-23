import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = () => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Counter App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        height: 70,
        padding: 10,
        marginTop: 100,
        marginBottom: 50,
    },
    title: {
        fontSize: 40
    },
});


export default Title;
