import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {{height:200, backgroundColor:'#161616'}}>
                    <View style={styles.headerView}>
                        <Text style={styles.groupsText}>Groups</Text>
                        <Image source={require('../../assets/images/dark/Add_Action.png')}
                        />
                    </View>
                    <View style={styles.headerContactsView}>
                        <Text style={styles.headerContacts}>Contact</Text>
                    </View>
                    <View style={styles.searchBox}>
                        <Image source={require('../../assets/image/dark/Search.png')}/>
                        style={{marginLeft: 7, marginRight: 7}}
                        <TextInput>
                        returnKeyType="search"
                        keyboardAppearance="dark"
                        onChangeText={{text} => {}}
                        </TextInput>
                    </View>
                </View>
                <View style = {{height:80, backgroundColor: '#000000',flexDirection: 'row'}}>
                    <Image source = {require('../../assets/images/dark/Userpic.png')}/>
                    <View>
                        <text>stash 1</text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
    headerView: {
        height:44,
        marginTop:44,
        marginLeft:16,
        marginRight:16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    groupsText: {
        frontFamily: 'SFProText-Regular',
        fontSize: 17,
        color: '#0A84FF',
        letterSpacing: -0.41,
        lineHeight: 22,
    },
    headerContactsView: {
        height: 41,
        marginTop: 12,
        marginLeft: 16,
        alightItems: 'flex-start',
        justifyContent: 'center',
    },
    headerContacts: {
        frontFamily: 'SFProDisplay-Bold',
        fontSize: 34,
        color: '#FFFFFF',
        letterSpacing: -0.41,
        lineHeight: 41,
    },
    searchBox: {
        marginTop: 12,
        height: 37,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 10,
        backgroundColor: '#2C2C2E',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    inputText
})