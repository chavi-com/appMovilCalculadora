import { StyleSheet, Text, View, Image } from "react-native";

export default function Header(props) {
  return (
    <View style={myStyle.ViewHeder}>
     <Text>{props.titulo}</Text>
      <Text>{props.subtitulo}</Text>
      {/*<Image
      source={requiere(`../assets/img/${}`)}
      style={{width:"100%",height:"100%"}}
      
    />*/}
        
     
    </View>
  );
}

const myStyle = StyleSheet.create({
  ViewHeder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#52F818",
    width: "80%",
  },
});
