import { StyleSheet } from "react-native";

import { StyleSheet } from "react-native";

const myStyle= StyleSheet.create({
    viewHeader:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        width:'80%'       
       
        
    }

})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      //flexDirection:'row'
    },
    viewChild:{
      flex:5, 
      backgroundColor:'yellowgreen',
      width:'80%',
    
     
    },
    alignView:{
      justifyContent:'center',
      alignItems:'center'
    }
  
  });

  export{styles,myStyle}
  