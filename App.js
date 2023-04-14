import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import { FontAwesome, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { Modala } from './modal';



export default function App() {
  const [remedios, setRemedios] = useState([
    
  ])

  const [visivel, setVisivel] = useState(false);
  const [nomeRemedio, setNomeRemedio] = useState("");
  const [horario, setHorario] = useState("");


  const removedor = (key) =>{
    const filterRemedios = remedios.filter(item => item.key != key)
    setRemedios(filterRemedios); 
  }
  const color = (key) => {
    setRemedios(remedios.map((item) => {
      if (item.key === key) {
        item.colored = !item.colored;
      }
      return item;
    }));
  };

  const adicionarRemedio = () => {
    if (nomeRemedio && horario) {
      setRemedios([
        ...remedios,
        {
          nome: nomeRemedio,
          hora: horario,
          colored: false,
          key: remedios.length + 1,
        },
      ]);
      setVisivel(false);
      setNomeRemedio('');
      setHorario('');
      
    }
  };
  
  
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 60 }}>
      
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Agenda de Remédios</Text>
      <TouchableOpacity onPress={() => setVisivel(true)}>
        <Ionicons name="medkit" size={40} color="red" />
      </TouchableOpacity>
    </View>
    
    <View style={{ backgroundColor: '#F2F2F2', borderRadius: 10, padding: 20 }}>
      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.key}
        data={remedios}
        renderItem={({item}) => (
        
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 10,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'black',
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: item.colored ? 'green' : 'cyan'
          }}>
            
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.hora}</Text>
          </View>

          <View>
            <Text style={{ fontSize: 18 }}>{item.nome}</Text>
          </View>
          
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => removedor(item.key)}>
              <FontAwesome name="trash-o" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => color(item.key) }>
              <AntDesign name="check" size={25} color="black" />
            </TouchableOpacity>
          </View>

            

          </View>
          
        )}
        />
        
      </View>

      <Modal
        visible={visivel}
        transparent={true}
      >
        <Modala
        setVisivel={setVisivel}
        setNomeRemedio={setNomeRemedio}
        setHorario={setHorario}
        adicionarRemedio={adicionarRemedio}
        />
      </Modal>
      
      <StatusBar style="auto" />
    </View>
  );
}


