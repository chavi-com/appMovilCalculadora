import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Header from "./components/Header";

export default function App() {
  //Hooks para estados con useState
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setresultado] = useState("");

  let mostrar = () => {
    alert(`el valor uno es ${valor1}`);
  };

  let sumar = function () {
    setresultado(parseFloat(valor1) + parseFloat(valor2));
  };

  const limpiar = () => {
    setValor1("");
    setValor2("");
  };
  return (
    <View style={[styles.container, styles.alingView]}>
      <Header titulo="Banner" subtitulo="principal"></Header>
      <View style={[styles.viewChild, styles.alingView, { marginTop: 10 }]}>
        <Image
          source={{uri : "https://play-lh.googleusercontent.com/F_m9cr5bCZol4q8833jhgFIPlXwI6t969yv-Z2wOwn8_fq5exR7JVsPVq0f0potstHE"}}
          style={{width:100, height:100}}
        
        
        />
        <Text>Valor 1</Text>
        <TextInput
          placeholder="Ingrese valor 1"
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            padding: 5,
            textAlign: "center",
            borderRadius: 40,
          }}
          onChangeText={(valor1) => setValor1(valor1)}
          value={valor1}
        ></TextInput>
        <Text>Valor 2</Text>
        <TextInput
          placeholder="Ingrese valor 2"
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            padding: 5,
            textAlign: "center",
            borderRadius: 40,
          }}
          onChangeText={(valor2) => setValor2(valor2)}
          value={valor2}
        ></TextInput>
        <Text>resultado</Text>
        <Text>{resultado}</Text>
        <Text>{"\n"}</Text>
        <Button title="sumar" onPress={sumar}></Button>
        <Text>{"\n"}</Text>
       {/* <Button title="mostrar" onPress={mostrar}></Button>*/}
        <Text>{"\n"}</Text>
        <Button title="limpiar" onPress={limpiar}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center",
  },
  viewChild: {
    flex: 5,
    backgroundColor: "#049483",
    width: "80%",
  },
  alingView: {
    justifyContent: "center",
    alignItems: "center",
  },
});



