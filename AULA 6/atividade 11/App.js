
// import React, { createContext, useContext, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';

// const TemaContext = createContext();

// const temas = {
//   claro: {
//     fundo: '#FFFFFF',
//     texto: '#111111',
//     primaria: '#6200EE',
//     campo: '#F2F2F2',
//   },
//   escuro: {
//     fundo: '#121212',
//     texto: '#FFFFFF',
//     primaria: '#BB86FC',
//     campo: '#333333',
//   },
// };

// function TemaProvider({ children }) {
//   const [modo, setModo] = useState('claro');

//   function alternarTema() {
//     setModo(modo === 'claro' ? 'escuro' : 'claro');
//   }

//   return (
//     <TemaContext.Provider
//       value={{
//         modo,
//         cores: temas[modo],
//         alternarTema,
//       }}
//     >
//       {children}
//     </TemaContext.Provider>
//   );
// }

// const AuthContext = createContext();

// function AuthProvider({ children }) {
//   const [usuario, setUsuario] = useState(null);

//   function login(email, senha) {
//     if (senha !== '123456') {
//       return false;
//     }

//     setUsuario({
//       nome: email.split('@')[0],
//       email: email,
//     });

//     return true;
//   }

//   function logout() {
//     setUsuario(null);
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         usuario,
//         logado: !!usuario,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function useAuth() {
//   return useContext(AuthContext);
// }

// function ExemploTema() {
//   const { modo, cores, alternarTema } = useContext(TemaContext);

//   return (
//     <View style={styles.secao}>
//       <Text style={[styles.titulo, { color: cores.texto }]}>
//         Exemplo 1 - useContext
//       </Text>

//       <Text style={[styles.texto, { color: cores.texto }]}>
//         Tema atual: {modo}
//       </Text>

//       <TouchableOpacity
//         style={[styles.botao, { backgroundColor: cores.primaria }]}
//         onPress={alternarTema}
//       >
//         <Text style={styles.textoBotao}>
//           Trocar tema
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function ExemploLogin() {
//   const { usuario, logado, login, logout } = useAuth();
//   const { cores } = useContext(TemaContext);

//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [erro, setErro] = useState('');

//   function entrar() {
//     if (!email.trim()) {
//       setErro('Digite seu e-mail');
//       return;
//     }

//     const sucesso = login(email, senha);

//     if (!sucesso) {
//       setErro('Senha incorreta! Use 123456');
//     } else {
//       setErro('');
//     }
//   }

//   return (
//     <View style={styles.secao}>
//       <Text style={[styles.titulo, { color: cores.texto }]}>
//         Exemplo 2 - useContext
//       </Text>

//       {logado ? (
//         <View style={styles.centro}>
//           <Text style={[styles.texto, { color: cores.texto }]}>
//             Bem-vindo, {usuario.nome}!
//           </Text>

//           <Text style={[styles.texto, { color: cores.texto }]}>
//             E-mail: {usuario.email}
//           </Text>

//           <TouchableOpacity
//             style={[styles.botao, { backgroundColor: cores.primaria }]}
//             onPress={logout}
//           >
//             <Text style={styles.textoBotao}>Sair</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <View style={styles.centro}>
//           <Text style={[styles.texto, { color: cores.texto }]}>
//             Faça seu login
//           </Text>

//           <TextInput
//             style={[
//               styles.input,
//               {
//                 backgroundColor: cores.campo,
//                 color: cores.texto,
//               },
//             ]}
//             placeholder="Digite seu e-mail"
//             placeholderTextColor="#888"
//             autoCapitalize="none"
//             keyboardType="email-address"
//             value={email}
//             onChangeText={setEmail}
//           />

//           <TextInput
//             style={[
//               styles.input,
//               {
//                 backgroundColor: cores.campo,
//                 color: cores.texto,
//               },
//             ]}
//             placeholder="Digite sua senha"
//             placeholderTextColor="#888"
//             secureTextEntry
//             value={senha}
//             onChangeText={setSenha}
//           />

//           {erro ? (
//             <Text style={styles.erro}>{erro}</Text>
//           ) : null}

//           <TouchableOpacity
//             style={[styles.botao, { backgroundColor: cores.primaria }]}
//             onPress={entrar}
//           >
//             <Text style={styles.textoBotao}>Entrar</Text>
//           </TouchableOpacity>

//           <Text style={[styles.dica, { color: cores.texto }]}>
//             Senha para teste: 123456
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// }

// function TelaPrincipal() {
//   const { cores } = useContext(TemaContext);

//   return (
//     <ScrollView
//       style={{ flex: 1, backgroundColor: cores.fundo }}
//       contentContainerStyle={styles.container}
//     >
//       <Text style={[styles.cabecalho, { color: cores.texto }]}>
//         Atividade 11
//       </Text>

//       <ExemploTema />

//       <View
//         style={[
//           styles.linha,
//           { backgroundColor: cores.primaria },
//         ]}
//       />

//       <ExemploLogin />
//     </ScrollView>
//   );
// }

// export default function App() {
//   return (
//     <TemaProvider>
//       <AuthProvider>
//         <TelaPrincipal />
//       </AuthProvider>
//     </TemaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 25,
//     gap: 25,
//   },
//   cabecalho: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   secao: {
//     width: '100%',
//     alignItems: 'center',
//     gap: 15,
//   },
//   titulo: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   texto: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   botao: {
//     padding: 14,
//     borderRadius: 10,
//     minWidth: 160,
//     alignItems: 'center',
//   },
//   textoBotao: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   centro: {
//     width: '100%',
//     alignItems: 'center',
//     gap: 12,
//   },
//   input: {
//     width: '100%',
//     borderRadius: 8,
//     padding: 14,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#999',
//   },
//   erro: {
//     color: 'red',
//     fontSize: 14,
//   },
//   dica: {
//     fontSize: 13,
//     textAlign: 'center',
//   },
//   linha: {
//     width: '100%',
//     height: 2,
//   },
// });
