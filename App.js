import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Header from './components/Header';
import { styles } from './assets/styles/MyStyles';

export default function App() {
  // hooks para estados con useState
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  let mostrar = () => {
    alert(`El valor es ${valor1}`)
  }
  let sumar = function () {
    setResultado(parseFloat(valor1) + parseFloat(valor2))
  }

  let calcular = (oper) => {
    let mresult = 0
    switch (oper) {
      case '+':
        mresult = parseFloat(valor1) + parseFloat(valor2)
        break;
      case '-':
        mresult = parseFloat(valor1) - parseFloat(valor2)
        break;

      case '*':
        mresult = parseFloat(valor1) * parseFloat(valor2)
        break;
      case '/':
        mresult = parseFloat(valor1) / parseFloat(valor2)
        break;

    }
    setResultado(mresult)
  }

  let limpiar = () => {
    setValor1('');
    setValor2('');
    setResultado(0);
  }
  return (
    <View style={[styles.container, styles.alignView]}>

      <Header src="fondo.jpg" ></Header>

      <View style={[styles.viewChild, styles.alignView, { marginTop: 10 }]}>

        <Image
          source={{ uri: 'https://i.pinimg.com/736x/1e/1d/81/1e1d81bc90bb7a1047672672ff033858.jpg' }}
          style={{ width: 100, height: 100 }}
        />
        <Text>valor 1</Text>
        <TextInput
          placeholder='Ingrese valor 1'
          style={{ borderWidth: 1, borderStyle: 'solid', padding: 5, textAlign: 'center' }}
          onChangeText={valor1 => setValor1(valor1)}
          value={valor1}
        />
        <Text>valor 2</Text>
        <TextInput
          placeholder='Ingrese valor 2'
          style={{ borderWidth: 1, borderStyle: 'solid', padding: 5, textAlign: 'center' }}
          onChangeText={valor2 => setValor2(valor2)}
          value={valor2}
        />
        <Text>Resultado</Text>
        <Text>{resultado}</Text>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', padding: 5, borderRadius: 5, width: 40, height: 40, textAlign: 'center',floatLeft:10 }}
          onPress={() => calcular('+')}
        >
          <Text style={{ color: 'white0', fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        <TouchableOpacity
          style={{ backgroundColor: 'red', padding: 5, borderRadius: 5, width: 40, height: 40, textAlign: 'center' }}
          onPress={() => calcular('-')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: 'green', padding: 5, borderRadius: 5, width: 40, height: 40, textAlign: 'center' }}
          onPress={() => calcular('*')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: 'blue', padding: 5, borderRadius: 5, width: 40, height: 40, textAlign: 'center'  }}
          onPress={() => calcular('/')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: 'red', padding: 5, borderRadius: 5, width: 40, height: 40, textAlign: 'center' }}
          onPress={limpiar}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>C</Text>
        </TouchableOpacity>

        </View>


      </View>
    </View>
  );
}

