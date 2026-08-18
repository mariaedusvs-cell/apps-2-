

// atividade 1
// import { Text, View } from 'react-native';
// export default function App() {
// return (
// <View>
// <Text>Olá, mundo!</Text>
// </View>
// );
// }

// atividade 2 
// import { View, Text } from 'react-native';
// export default function App() {
// return (
// <View style={{ padding: 20 }}>
// <Text style={{ fontSize: 24 }}>
// Bem-vindo!
// </Text>
// </View>
// );
// }

// atividade 3 

// import { View, Text,StyleSheet } from 'react-native';
// export default App ()
// {
//   return (
// <View style={styles.box}>
// <Text>Oi gente!</Text>
// <Image source={logo} />
// </View>
//   );
// }

// atividade 4 
// import { StyleSheet, Text } from 'react-native';

// export default function App() {
//   return (
//     <Text style={styles.titulo}>Título</Text>
//   );
// }

// const styles = StyleSheet.create({
//   titulo: {
//     fontSize: 22,
//     color: 'tomato',
//   },
// });
// atividade 5

// import { Image } from 'react-native';

// export default function App() {
//   return (
//     <Image
//       source={{ uri: 'https://picsum.photos/200' }}
//       style={{ width: 100, height: 100 }}
//     />
//   );
// }

// atividade 6

// import { Button, TouchableOpacity, Text } from 'react-native';

// export default function App() {
//   return (
//     <>
//       <Button
//         title="Clique"
//         onPress={() => alert('Oi!')}
//       />

//       <TouchableOpacity
//         onPress={() => alert('Toquei!')}
//       >
//         <Text>Botão personalizado</Text>
//       </TouchableOpacity>
//     </>
//   );
// }

// atividade 7
// import { useState } from 'react';
// import { TextInput } from 'react-native';

// export default function App() {
//   const [nome, setNome] = useState('');

//   return (
//     <TextInput
//       value={nome}
//       onChangeText={setNome}
//       placeholder="Digite seu nome"
//     />
//   );
// }
//  atividae 8 
// import { ScrollView, Text } from 'react-native';

// export default function App() {
//   return (
//     <ScrollView>
//       <Text>Item 1</Text>
//       <Text>Item 2</Text>
//       <Text>Item 3</Text>
//       {/* ...e muitos outros */}
//       <Text>Item 4</Text>
//       <Text>Item 5</Text>
//       <Text>Item 6</Text>
//       <Text>Item 7</Text>
//       <Text>Item 8</Text>
//       <Text>Item 9</Text>
//       <Text>Item 10</Text>
//     </ScrollView>
//   );
// }
// atividade 9

import { Text } from 'react-native';

function Saudacao({ nome }) {
  return <Text>Olá, {nome}!</Text>;
}

export default function App() {
  return (
    <>
      <Saudacao nome="Ana" />
      <Saudacao nome="Beto" />
    </>
  );
}