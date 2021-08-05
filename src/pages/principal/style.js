import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: "#152349",
        paddingTop: 20,
    },
    Tasks:{
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    deleteTask:{
        justifyContent: "center",
        paddingLeft: 15,
    },
    DescriptionTask:{
        width: "75%",
        alignContent: "flex-start",
        backgroundColor: "#fff",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight:15,
        color: "#000"
    },
    buttonNewTask:{
        width:60,
        height:60,
        position: "absolute",
        bottom:30,
        borderRadius: 50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#fff",
        alignSelf: "flex-end",
        
    },
    iconButton:{
        color: "#000",
        fontSize:30,
        fontWeight: "bold",

    }
});

export default styles;