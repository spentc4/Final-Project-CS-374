import { render } from "@testing-library/react";
import { Component } from "react";
import { View, Text } from 'react-native';

class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Contact" 
            component={Contact} 
            options={{tabBarLabel: 'Contact'}}
            />
        </Tab.Navigator>
        );
        }
}

export default ContactScreen;