import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity } from "react-native";
import user_data from "../data/user_data.json"
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../features/authSlice';
import { deleteSession } from '../db';
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {

    const image = useSelector(state => state.authReducer.profilePicture)


    const email = useSelector(state => state.authReducer.user)
    const localId = useSelector(state => state.authReducer.localId)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        const deletedSession = deleteSession()
        
    }

    return (
        <>
        <View style={styles.container}>
            <View>
                <Pressable onPress={() => navigation.navigate("Seleccionar imagen")}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#DCDCDC' : '#E8E8E8',
                        },
                        styles.imageContainer,
                    ]}>
                    {
                        image
                            ?
                            <Image
                                source={{ uri: image }}
                                style={styles.profilePicture}
                                resizeMode='contain'
                            />
                            :
                            <Image
                                source={require('../../assets/img/user.png')}
                                style={styles.profilePicture}
                                resizeMode='contain'
                            />

                    }
                </Pressable>
            </View>
            <View style={styles.userDataContainer}>
                <Text style={styles.userTitle}>{user_data.name}</Text>
                <Text style={styles.userData}>{user_data.role}</Text>
                <Text style={styles.userData}>Nivel: {user_data.level}</Text>
                <Text style={styles.userData}>Dirección: {user_data.address}</Text>
                <Text style={styles.userData}>{user_data.city}</Text>
            </View>
        </View>
        {
                email
                &&
                <TouchableOpacity onPress={onLogout} ><Text style={styles.logout}>Cerrar Sesion <AntDesign name="logout" size={18} color="black" /></Text></TouchableOpacity>
            }
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20,
        gap: 20,
        alignItems: 'flex-start'
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    userDataContainer: {
        marginTop: 10,
    },
    userTitle: {
        fontFamily: 'Karla-Bold',
        fontSize: 16,
    },
    imageContainer: {
        borderRadius: 100,
    },
    userData: {
        fontFamily: 'Karla-Bold',
        fontSize: 12
    },
    logout:{
        justifyContent: "center",
        backgroundColor: "#a51c30",
        textAlign: "center",
        fontSize:20,
        borderRadius: 30,
        padding:5,
        marginLeft:80,
        marginRight:80,
        
    }
})