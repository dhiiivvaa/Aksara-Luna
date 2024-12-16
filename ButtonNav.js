import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profil from './Profil';
import Mahasiswa from './Mahasiswa';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faUserGraduate, faBook } from '@fortawesome/free-solid-svg-icons'
import { WebView } from 'react-native-webview';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import Editdata from './Editdata';
// import Createdata from './Createdata';
import Bookshop from './Bookshop';
import Createbook from './Createbook';



function DataBookShopScreen() {
    return (
        <Bookshop />
    );
}

// function CreateScreen() {
//     return (
//         <Createbook />
//     );
// }

// function EditScreen() {
//     return (
//         <Editdata/>
//     );
// }

function HomeScreen() {
    return (
        <Profil />
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                
                <Tab.Screen name="Bookshop" component={DataBookShopScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        < FontAwesomeIcon icon={faBook} color={color} size={20} />
                    )
                }} />
                {/* <Tab.Screen name="Tambah" component={CreateScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        < FontAwesomeIcon icon={faUserGraduate} color={color} size={20} />
                    )
                }} />
                <Tab.Screen name="Edit" component={EditScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        < FontAwesomeIcon icon={faUserPen} color={color} size={20} />
                    )
                }} /> */}
                <Tab.Screen name="About Me" component={HomeScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        < FontAwesomeIcon icon={faUser} color={color} size={20} />
                    )
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}