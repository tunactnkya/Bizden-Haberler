import React from "react";
import { Text, SafeAreaView, StyleSheet, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

const Pageİki = () => {
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.text}>Bizden Haberler</Text>
            <View style={styles.ınput} >
                <TextInput placeholder="Anahtar Kelime Giriniz" />
                <View style={styles.ımage} >
                    <Image source={require("./assets/ımage1.png")} />
                    <Image source={require("./assets/ımage1.png")} />
                    <Image source={require("./assets/ımage1.png")} />
                    <Image source={require("./assets/ımage1.png")} />
                    <View style={styles.bottomcontainer} >
                        <View style={styles.bottomIconWrapper} >
                            <TouchableOpacity onPress={() => { }} >
                                <Icon name="payment" size={20} color='blue' />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { }} >
                                <Icon name="home" size={20} color='blue' />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { }} >
                                <Icon name="face" size={20} color='blue' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ımage: {
        alignItems: 'center'
    },
    bottomcontainer: {
        alignItems: 'center',
        paddingVertical: 15,
        borderTopColor: '#393E46',
        borderWidth: 1
    },
    bottomIconWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignItems: 'flex-end'
    }

})

export default Pageİki;