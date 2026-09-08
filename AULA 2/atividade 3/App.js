// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio1() {
//   return (
//     <View style={styles.container}>
//       {/* Seu código aqui */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#3498db',
//     width: '100%',
//   },
// });

// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio2() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, { backgroundColor: 'red' }]} />
//       <View style={[styles.box, { backgroundColor: 'green' }]} />
//       <View style={[styles.box, { backgroundColor: 'blue' }]} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   box: {
//     width: 100,
//     height: 100,
//   },
// });

// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio3() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.box} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 150,
//     height: 150,
//     backgroundColor: 'red',
//   },
// });

// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio4() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, { backgroundColor: 'red' }]} />
//       <View style={[styles.box, { backgroundColor: 'green' }]} />
//       <View style={[styles.box, { backgroundColor: 'blue' }]} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   box: {
//     width: 80,
//     height: 80,
//   },
// });

// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio5() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, { height: 50, backgroundColor: 'purple' }]} />
//       <View style={[styles.box, { height: 100, backgroundColor: 'orange' }]} />
//       <View style={[styles.box, { height: 75, backgroundColor: 'teal' }]} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },
//   box: {
//     width: 100,
//   },
// });
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio6() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, { backgroundColor: 'red' }]} />
//       <View style={[styles.box, { backgroundColor: 'blue' }]} />
//       <View style={[styles.box, { backgroundColor: 'red' }]} />
//       <View style={[styles.box, { backgroundColor: 'blue' }]} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   box: {
//     width: 60,
//     height: 60,
//     marginBottom: 5,
//   },
// });
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio7() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.item}><Text>Item 1</Text></View>
//       <View style={styles.item}><Text>Item 2</Text></View>
//       <View style={styles.item}><Text>Item 3</Text></View>
//       <View style={styles.item}><Text>Item 4</Text></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     width: '100%',
//   },
//   item: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio8() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.avatar} />
//       <Text style={styles.name}>Nome do Usuário</Text>
//       <Text style={styles.bio}>Esta é a bio do usuário do perfil.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: 20,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#34495e',
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   bio: {
//     color: '#7f8c8d',
//     textAlign: 'center',
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio9() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.card}><Text>Card 1</Text></View>
//       <View style={styles.card}><Text>Card 2</Text></View>
//       <View style={styles.card}><Text>Card 3</Text></View>
//       <View style={styles.card}><Text>Card 4</Text></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   card: {
//     width: '50%',
//     height: 100,
//     padding: 8,
//     borderWidth: 1,
//     borderColor: '#fff',
//     backgroundColor: '#bdc3c7',
//   },
// });

// import React from 'react';
// import { View, Text, ScrollView, StyleSheet } from 'react-native';

// export default function Exercicio10() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Header Fixo</Text>
//       </View>
//       <ScrollView style={styles.content}>
//         <Text style={styles.item}>Conteúdo 1</Text>
//         <Text style={styles.item}>Conteúdo 2</Text>
//         <Text style={styles.item}>Conteúdo 3</Text>
//         <Text style={styles.item}>Conteúdo 4</Text>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 60,
//     backgroundColor: '#2c3e50',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   content: {
//     flex: 1,
//     padding: 10,
//   },
//   item: {
//     marginVertical: 20,
//     fontSize: 16,
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio11() {
//   return (
//     <View style={styles.navbar}>
//       <Text>Home</Text>
//       <Text>Busca</Text>
//       <Text>Perfil</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   navbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     padding: 15,
//     backgroundColor: '#ecf0f1',
//     position: 'absolute',
//     bottom: 0,
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio12() {
//   return (
//     <View style={styles.card}>
//       <View style={styles.imagePlaceholder} />
//       <Text style={styles.title}>Nome do Produto</Text>
//       <Text style={styles.price}>R$ 99,90</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     width: 200,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     flexDirection: 'column',
//   },
//   imagePlaceholder: {
//     width: '100%',
//     height: 120,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 14,
//     color: 'green',
//     marginTop: 4,
//   },
// });

// import React from 'react';
// import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

// export default function Exercicio13() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.logo} />
//       <TextInput style={styles.input} placeholder="Email" />
//       <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Entrar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#3498db',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     width: '100%',
//     height: 40,
//     backgroundColor: '#2ecc71',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function Exercicio14() {
//   return (
//     <View style={styles.grid}>
//       {[...Array(9)].map((_, i) => (
//         <View key={i} style={styles.square} />
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   grid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     width: '100%',
//   },
//   square: {
//     width: '33.33%',
//     aspectRatio: 1,
//     backgroundColor: '#95a5a6',
//     borderWidth: 0.5,
//     borderColor: '#fff',
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// export default function Exercicio15() {
//   return (
//     <View style={styles.post}>
//       <View style={styles.header}>
//         <View style={styles.avatar} />
//         <Text style={styles.username}>Nome de Usuário</Text>
//       </View>
//       <Text style={styles.caption}>Este é o texto da publicação!</Text>
//       <View style={styles.postImage} />
//       <View style={styles.actions}>
//         <TouchableOpacity><Text>Curtir</Text></TouchableOpacity>
//         <TouchableOpacity><Text>Comentar</Text></TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   post: {
//     padding: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#7f8c8d',
//     marginRight: 10,
//   },
//   username: {
//     fontWeight: 'bold',
//   },
//   caption: {
//     marginBottom: 8,
//   },
//   postImage: {
//     width: '100%',
//     height: 200,
//     backgroundColor: '#bdc3c7',
//   },
//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 10,
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio16() {
//   return (
//     <View style={styles.item}>
//       <View style={styles.photo} />
//       <View style={styles.info}>
//         <Text style={styles.name}>Nome do Item</Text>
//       </View>
//       <Text style={styles.price}>R$ 49,90</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   photo: {
//     width: 50,
//     height: 50,
//     borderRadius: 8,
//     backgroundColor: '#e74c3c',
//   },
//   info: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   name: {
//     fontSize: 16,
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio17() {
//   return (
//     <View style={styles.dashboard}>
//       <View style={styles.card}><Text>Métrica 1</Text></View>
//       <View style={styles.card}><Text>Métrica 2</Text></View>
//       <View style={styles.card}><Text>Métrica 3</Text></View>
//       <View style={styles.card}><Text>Métrica 4</Text></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   dashboard: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   card: {
//     width: '50%',
//     height: '50%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     backgroundColor: '#ecf0f1',
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio18() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.received}>
//         <Text style={styles.sender}>João</Text>
//         <Text>Olá! Tudo bem?</Text>
//         <Text style={styles.time}>10:00</Text>
//       </View>
//       <View style={styles.sent}>
//         <Text>Tudo ótimo! E com você?</Text>
//         <Text style={styles.time}>10:01</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   received: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#e5e5ea',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 8,
//   },
//   sent: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#25D366',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 8,
//   },
//   sender: {
//     fontSize: 10,
//     color: '#555',
//     fontWeight: 'bold',
//   },
//   time: {
//     fontSize: 9,
//     color: '#888',
//     alignSelf: 'flex-end',
//     marginTop: 4,
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Exercicio19() {
//   return (
//     <View style={styles.timeline}>
//       <View style={styles.centralLine} />
//       <View style={[styles.event, { alignSelf: 'flex-start' }]}>
//         <View style={styles.dotLeft} />
//         <Text>Evento Esquerda</Text>
//       </View>
//       <View style={[styles.event, { alignSelf: 'flex-end' }]}>
//         <View style={styles.dotRight} />
//         <Text>Evento Direita</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   timeline: {
//     flex: 1,
//     position: 'relative',
//     paddingVertical: 20,
//   },
//   centralLine: {
//     position: 'absolute',
//     left: '50%',
//     top: 0,
//     bottom: 0,
//     width: 2,
//     backgroundColor: '#34495e',
//   },
//   event: {
//     width: '45%',
//     padding: 10,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 5,
//     marginVertical: 10,
//   },
//   dotLeft: {
//     position: 'absolute',
//     right: -15,
//     top: 15,
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#e74c3c',
//   },
//   dotRight: {
//     position: 'absolute',
//     left: -15,
//     top: 15,
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#e74c3c',
//   },
// });

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Exercicio20() {
  return (
    <View style={styles.form}>
      <View style={styles.row}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    width: 80,
    textAlign: 'right',
    marginRight: 10,
    fontSize: 14,
  },
  input: {
    flex: 1,
    height: 38,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});