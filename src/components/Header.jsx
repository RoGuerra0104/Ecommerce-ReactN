import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { fontSize } from '../global/fontSize';

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.headerContainer}>
            {
                navigation.canGoBack() ?
                    <TouchableOpacity onPress={navigation.goBack} style={styles.backArrow}>
                        <Ionicons name="arrow-back-circle-outline" size={40} color="white" />
                    </TouchableOpacity>
                    : null
            }
            <Text style={styles.headerTitle}>{title}</Text>

            <TouchableOpacity onPress={navigation.popToTop} style={styles.homeImport}>
                <AntDesign name="home" size={40} color="white" />
            </TouchableOpacity>
            
            {/* <TouchableOpacity onPress={()=>navigation.navigate("Perfil")} style={styles.homeImport}>
            <AntDesign name="user" size={30} color={"white"} />
            </TouchableOpacity> */}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingTop: 15,
    },
    headerTitle: {
        color: '#fff',
        fontFamily: "Karla-Bold",
        fontSize: fontSize.header,

    },
    backArrow: {
        paddingTop: 10
    },
    homeImport: {
        paddingHorizontal: 10,
        flexDirection: "row-reverse"
    }
})