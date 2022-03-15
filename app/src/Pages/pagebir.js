import React from "react";
import { Text, SafeAreaView, StyleSheet, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';




const Pagebir = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.text}>Hoşgeldiniz!</Text>
            <View style={styles.ınput} >
                <TextInput placeholder="Anahtar Kelime Giriniz" />
            </View>
            <View style={styles.icon} >
                <Icon name="arrow-forward-ios" size={20} color='gray' />
                <View style={styles.textheader} >
                    <Text style={{ fontSize: 16, fontWeight: '800', margin: 10, }} >Bizden Haberler</Text>
                </View>
            </View>
            <View style={styles.ımage} >
                <Image source={require("./assets/ımage1.png")} />
                <View style={styles.button} >
                    <View style={{ flexDirection: 'row', padding: 5, margin: 5, justifyContent: 'center' }} >
                        <Icon name="event-note" size={20} />
                        <Button title="Biz Letter" onPress={() => navigation.navigate('Pageİki')} />
                    </View>
                    <View style={{ flexDirection: 'row', padding: 5, margin: 5, justifyContent: 'center' }} >
                        <Icon name="menu-book" size={20} />
                        <Button title="Mezun Arama" onPress={() => navigation.navigate()} />
                    </View>
                    <View style={{ flexDirection: 'row', padding: 5, margin: 5, justifyContent: 'center' }} >
                        <Icon name="shopping-bag" size={20} />
                        <Button title="TAC Business" onPress={() => navigation.navigate()} />
                    </View>
                    <View style={{ flexDirection: 'row', margin: 5, padding: 5, justifyContent: 'center', marginBottom: 75 }} >
                        <Icon name="exposure-plus-1" size={20} />
                        <Button title="Haber Ekle" onPress={() => navigation.navigate()} />
                    </View>
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
    container: {
        flex: 1,
        alignItems: 'center'

    },
    text: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    ınput: {
        borderRadius: 15,
        backgroundColor: '#DDDFE3',
        padding: 5,
        margin: 20,
        marginTop: 20
    },
    ımage: {
        alignItems: 'center'
    },
    icon: {
        paddingHorizontal: 5,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignContent: 'center',
        marginEnd: 15
    },
    textheader: {
        marginBottom: 5,
        marginEnd: 200
    },
    button: {
        margin: 15,
        padding: 10,
        paddingHorizontal: 10,
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

export default Pagebir;