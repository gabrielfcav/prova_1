import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    /// style da pag. principal

      /// style do header
    header:{
      flexDirection:'row',
      marginTop:120,
    },
    iconheader:{
      marginRight: 1,
    },
    title:{
      fontSize:20,
      alignSelf:'center'
    },
    

      /// style da flatlist
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item:{
      textAlign:'center',
      fontSize:22
    },
    containerbox:{
      alignSelf:'center',
      justifyContent: 'space-between',
      width: '94%',
      marginVertical: 10,
      height: 90,
      flexDirection:'row',
      borderRadius:20,
      alignContent:'space-between',
      padding:10
    },
    boxlist:{
      marginTop:0,
      width: '100%',
      marginBottom:80,
    },
    boxicons:{
      alignSelf:'center',
      margin:10
      
    },
    boxname:{
      justifyContent:'center'
    },
    boxhora:{
      justifyContent:'center'
    },

    /// style do modal
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 20,
      width: "85%",
    },
    modalTitle: {
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 10,
      alignSelf:'center'
    },
    modalInput: {
      borderWidth: 0.7,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 8,
      marginBottom: 10,
    },
    modalBotao: {
      backgroundColor: "#96F2EE",
      borderRadius: 8,
      padding: 10,
      alignItems: "center",
      marginBottom: 10,
    },
  });

  export default styles
  