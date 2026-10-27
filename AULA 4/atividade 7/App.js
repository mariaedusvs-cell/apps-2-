
// exemplo 1
// App.js
// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function TelaInicial({ navigation }) {
//   return (
//     <View style={estilos.tela}>
//       <Text style={estilos.titulo}>Tela Inicial</Text>

//       <TouchableOpacity
//         style={estilos.botao}
//         onPress={() => navigation.navigate('Detalhes')}
//         activeOpacity={0.8}
//       >
//         <Text style={estilos.textoBotao}>
//           Ir para Detalhes
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaDetalhes({ navigation }) {
//   return (
//     <View style={estilos.tela}>
//       <Text style={estilos.titulo}>Tela de Detalhes</Text>

//       <TouchableOpacity
//         style={estilos.botao}
//         onPress={() => navigation.goBack()}
//         activeOpacity={0.8}
//       >
//         <Text style={estilos.textoBotao}>
//           Voltar
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Inicio"
//         screenOptions={{
//           headerStyle: { backgroundColor: '#007AFF' },
//           headerTintColor: '#FFFFFF',
//           headerTitleStyle: { fontWeight: 'bold' },
//         }}
//       >
//         <Stack.Screen
//           name="Inicio"
//           component={TelaInicial}
//           options={{ title: 'Home' }}
//         />

//         <Stack.Screen
//           name="Detalhes"
//           component={TelaDetalhes}
//           options={{ title: 'Detalhes' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const estilos = StyleSheet.create({
//   tela: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F2F5F9',
//     padding: 20,
//   },

//   titulo: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 25,
//     color: '#222222',
//   },

//   botao: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 14,
//     paddingHorizontal: 24,
//     borderRadius: 10,
//     minWidth: 190,
//     alignItems: 'center',
//   },

//   textoBotao: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// exemplo 2


// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const produtos = [
//   {
//     id: '1',
//     nome: 'Notebook',
//     preco: 3500,
//     descricao: 'Notebook 16GB RAM, SSD 512GB',
//   },
//   {
//     id: '2',
//     nome: 'Smartphone',
//     preco: 2200,
//     descricao: 'Tela 6.5", 128GB, 5G',
//   },
//   {
//     id: '3',
//     nome: 'Fone Bluetooth',
//     preco: 350,
//     descricao: 'Cancelamento de ruído ativo',
//   },
// ];

// function TelaLista({ navigation }) {
//   return (
//     <View style={estilos.container}>
//       <Text style={estilos.titulo}>Nossos Produtos</Text>

//       <FlatList
//         data={produtos}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={estilos.item}
//             onPress={() =>
//               navigation.navigate('Produto', {
//                 nome: item.nome,
//                 preco: item.preco,
//                 descricao: item.descricao,
//               })
//             }
//           >
//             <Text style={estilos.nomeItem}>{item.nome}</Text>

//             <Text style={estilos.preco}>
//               R$ {item.preco.toFixed(2).replace('.', ',')}
//             </Text>

//             <Text style={estilos.dica}>
//               Toque para ver os detalhes
//             </Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// function TelaProduto({ route, navigation }) {
//   const { nome, preco, descricao } = route.params;

//   return (
//     <View style={estilos.tela}>
//       <Text style={estilos.titulo}>{nome}</Text>

//       <Text style={estilos.preco}>
//         R$ {preco.toFixed(2).replace('.', ',')}
//       </Text>

//       <Text style={estilos.descricao}>{descricao}</Text>

//       <TouchableOpacity
//         style={estilos.botao}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={estilos.textoBotao}>
//           Voltar à lista
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Lista"
//         screenOptions={{
//           headerStyle: { backgroundColor: '#007AFF' },
//           headerTintColor: '#FFFFFF',
//           headerTitleStyle: { fontWeight: 'bold' },
//         }}
//       >
//         <Stack.Screen
//           name="Lista"
//           component={TelaLista}
//           options={{ title: 'Produtos' }}
//         />

//         <Stack.Screen
//           name="Produto"
//           component={TelaProduto}
//           options={{ title: 'Detalhes do produto' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const estilos = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 10,
//     backgroundColor: '#F5F5F5',
//   },

//   item: {
//     padding: 16,
//     marginHorizontal: 15,
//     marginVertical: 6,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#DDDDDD',
//   },

//   nomeItem: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#222222',
//   },

//   preco: {
//     fontSize: 22,
//     color: '#28A745',
//     marginVertical: 10,
//     fontWeight: 'bold',
//   },

//   dica: {
//     fontSize: 13,
//     color: '#666666',
//   },

//   tela: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#F5F5F5',
//   },

//   titulo: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#222222',
//   },

//   descricao: {
//     fontSize: 16,
//     color: '#666666',
//     textAlign: 'center',
//     marginBottom: 25,
//   },

//   botao: {
//     backgroundColor: '#007AFF',
//     padding: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//   },

//   textoBotao: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// exemplo 3


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

// const Tab = createBottomTabNavigator();

// function TelaHome() {
//   return (
//     <View style={estilos.tela}>
//       <Ionicons
//         name="home"
//         size={60}
//         color="#007AFF"
//       />

//       <Text style={estilos.titulo}>Home</Text>
//       <Text style={estilos.descricao}>
//         Bem-vindo à tela inicial!
//       </Text>
//     </View>
//   );
// }

// function TelaBusca() {
//   return (
//     <View style={estilos.tela}>
//       <Ionicons
//         name="search"
//         size={60}
//         color="#007AFF"
//       />

//       <Text style={estilos.titulo}>Busca</Text>
//       <Text style={estilos.descricao}>
//         Pesquise o que você procura.
//       </Text>
//     </View>
//   );
// }

// function TelaPerfil() {
//   return (
//     <View style={estilos.tela}>
//       <Ionicons
//         name="person-circle"
//         size={70}
//         color="#007AFF"
//       />

//       <Text style={estilos.titulo}>Perfil</Text>
//       <Text style={estilos.descricao}>
//         Esta é a sua área de perfil.
//       </Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerTitleAlign: 'center',

//           headerStyle: {
//             backgroundColor: '#007AFF',
//           },

//           headerTintColor: '#FFFFFF',

//           tabBarActiveTintColor: '#007AFF',
//           tabBarInactiveTintColor: '#999999',

//           tabBarStyle: {
//             height: 65,
//             paddingBottom: 8,
//             paddingTop: 5,
//           },

//           tabBarIcon: ({ color, size, focused }) => {
//             let nomeIcone;

//             if (route.name === 'Home') {
//               nomeIcone = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Busca') {
//               nomeIcone = focused ? 'search' : 'search-outline';
//             } else {
//               nomeIcone = focused ? 'person' : 'person-outline';
//             }

//             return (
//               <Ionicons
//                 name={nomeIcone}
//                 size={size}
//                 color={color}
//               />
//             );
//           },
//         })}
//       >
//         <Tab.Screen
//           name="Home"
//           component={TelaHome}
//           options={{ tabBarLabel: 'Início' }}
//         />

//         <Tab.Screen
//           name="Busca"
//           component={TelaBusca}
//           options={{ tabBarLabel: 'Busca' }}
//         />

//         <Tab.Screen
//           name="Perfil"
//           component={TelaPerfil}
//           options={{ tabBarLabel: 'Perfil' }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const estilos = StyleSheet.create({
//   tela: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5F7FA',
//     padding: 20,
//   },

//   titulo: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginTop: 12,
//     color: '#222222',
//   },

//   descricao: {
//     fontSize: 16,
//     color: '#666666',
//     marginTop: 8,
//     textAlign: 'center',
//   },
// });

// exemplo 4


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function TelaHome() {
//   return (
//     <View style={estilos.tela}>
//       <Text style={estilos.icone}>🏠</Text>
//       <Text style={estilos.titulo}>Página Inicial</Text>
//       <Text style={estilos.descricao}>
//         Bem-vindo ao nosso aplicativo!
//       </Text>
//       <Text style={estilos.instrucao}>
//         Abra o menu lateral para navegar.
//       </Text>
//     </View>
//   );
// }

// function TelaConfiguracoes() {
//   return (
//     <View style={estilos.tela}>
//       <Text style={estilos.icone}>⚙️</Text>
//       <Text style={estilos.titulo}>Configurações</Text>
//       <Text style={estilos.descricao}>
//         Personalize as opções do aplicativo.
//       </Text>
//     </View>
//   );
// }

// function TelaSobre() {
//   return (
//     <View style={estilos.tela}>
//       <Text style={estilos.icone}>ℹ️</Text>
//       <Text style={estilos.titulo}>Sobre o App</Text>
//       <Text style={estilos.descricao}>
//         Aplicativo desenvolvido com React Native.
//       </Text>
//       <Text style={estilos.versao}>Versão 1.0.0</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#007AFF',
//           },
//           headerTintColor: '#FFFFFF',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//           drawerActiveTintColor: '#007AFF',
//           drawerActiveBackgroundColor: '#E6F2FF',
//           drawerInactiveTintColor: '#444444',
//           drawerLabelStyle: {
//             fontSize: 16,
//           },
//           drawerStyle: {
//             backgroundColor: '#FFFFFF',
//             width: 280,
//           },
//         }}
//       >
//         <Drawer.Screen
//           name="Home"
//           component={TelaHome}
//           options={{ title: 'Início' }}
//         />

//         <Drawer.Screen
//           name="Config"
//           component={TelaConfiguracoes}
//           options={{ title: 'Configurações' }}
//         />

//         <Drawer.Screen
//           name="Sobre"
//           component={TelaSobre}
//           options={{ title: 'Sobre o App' }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// const estilos = StyleSheet.create({
//   tela: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 24,
//     backgroundColor: '#F5F7FA',
//   },

//   icone: {
//     fontSize: 55,
//     marginBottom: 15,
//   },

//   titulo: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#222222',
//     marginBottom: 12,
//     textAlign: 'center',
//   },

//   descricao: {
//     fontSize: 16,
//     color: '#555555',
//     textAlign: 'center',
//     marginBottom: 12,
//   },

//   instrucao: {
//     fontSize: 14,
//     color: '#777777',
//     marginTop: 10,
//     textAlign: 'center',
//   },

//   versao: {
//     fontSize: 14,
//     color: '#888888',
//     marginTop: 10,
//   },
// });

// exemplo 5


// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function TelaHome({ navigation }) {
//   return (
//     <View style={estilos.tela}>
//       <Ionicons name="home" size={60} color="#007AFF" />

//       <Text style={estilos.titulo}>Home</Text>

//       <Text style={estilos.descricao}>
//         Bem-vindo à página inicial!
//       </Text>

//       <TouchableOpacity
//         style={estilos.botao}
//         onPress={() => navigation.navigate('Notificacoes')}
//         activeOpacity={0.8}
//       >
//         <Text style={estilos.textoBotao}>
//           Ver Notificações
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaNotificacoes({ navigation }) {
//   return (
//     <View style={estilos.tela}>
//       <Ionicons
//         name="notifications"
//         size={60}
//         color="#007AFF"
//       />

//       <Text style={estilos.titulo}>Notificações</Text>

//       <Text style={estilos.descricao}>
//         Você tem 3 novas mensagens.
//       </Text>

//       <TouchableOpacity
//         style={estilos.botao}
//         onPress={() => navigation.goBack()}
//         activeOpacity={0.8}
//       >
//         <Text style={estilos.textoBotao}>
//           Voltar para Home
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaPerfil() {
//   return (
//     <View style={estilos.tela}>
//       <Ionicons
//         name="person-circle"
//         size={75}
//         color="#007AFF"
//       />

//       <Text style={estilos.titulo}>Perfil</Text>

//       <Text style={estilos.descricao}>
//         Bem-vindo à sua área de perfil!
//       </Text>
//     </View>
//   );
// }

// function HomeStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#007AFF' },
//         headerTintColor: '#FFFFFF',
//         headerTitleStyle: { fontWeight: 'bold' },
//       }}
//     >
//       <Stack.Screen
//         name="HomeScreen"
//         component={TelaHome}
//         options={{ title: 'Início' }}
//       />

//       <Stack.Screen
//         name="Notificacoes"
//         component={TelaNotificacoes}
//         options={{ title: 'Notificações' }}
//       />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerShown: false,

//           tabBarActiveTintColor: '#007AFF',
//           tabBarInactiveTintColor: '#999999',

//           tabBarStyle: {
//             height: 65,
//             paddingTop: 5,
//             paddingBottom: 8,
//           },

//           tabBarIcon: ({ color, size, focused }) => {
//             let nomeIcone;

//             if (route.name === 'HomeTab') {
//               nomeIcone = focused ? 'home' : 'home-outline';
//             } else {
//               nomeIcone = focused ? 'person' : 'person-outline';
//             }

//             return (
//               <Ionicons
//                 name={nomeIcone}
//                 size={size}
//                 color={color}
//               />
//             );
//           },
//         })}
//       >
//         <Tab.Screen
//           name="HomeTab"
//           component={HomeStack}
//           options={{ tabBarLabel: 'Home' }}
//         />

//         <Tab.Screen
//           name="PerfilTab"
//           component={TelaPerfil}
//           options={{
//             tabBarLabel: 'Perfil',
//             headerShown: true,
//             title: 'Meu Perfil',
//             headerStyle: { backgroundColor: '#007AFF' },
//             headerTintColor: '#FFFFFF',
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const estilos = StyleSheet.create({
//   tela: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5F7FA',
//     padding: 20,
//   },

//   titulo: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#222222',
//     marginTop: 12,
//     marginBottom: 12,
//   },

//   descricao: {
//     fontSize: 16,
//     color: '#666666',
//     textAlign: 'center',
//     marginBottom: 12,
//   },

//   botao: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 14,
//     paddingHorizontal: 22,
//     borderRadius: 8,
//     marginTop: 10,
//   },

//   textoBotao: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
