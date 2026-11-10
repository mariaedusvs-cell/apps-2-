
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   Switch,
//   Alert,
//   ActivityIndicator,
//   ScrollView,
//   StyleSheet,
// } from 'react-native';

// function useToggle(valorInicial = false) {
//   const [valor, setValor] = useState(valorInicial);

//   const alternar = () => setValor(v => !v);

//   return [valor, alternar];
// }

// const usuarios = [
//   { id: 1, nome: 'Ana', email: 'ana@email.com' },
//   { id: 2, nome: 'Bruno', email: 'bruno@email.com' },
//   { id: 3, nome: 'Carla', email: 'carla@email.com' },
//   { id: 4, nome: 'Diego', email: 'diego@email.com' },
//   { id: 5, nome: 'Elisa', email: 'elisa@email.com' },
// ];

// const posts = Array.from({ length: 30 }, (_, i) => ({
//   id: i + 1,
//   titulo: `Post número ${i + 1}`,
//   texto: 'Conteúdo de exemplo do post.',
// }));

// function fakeFetch(url) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       let dados;
//       let status = 200;

//       if (url === '/usuarios') {
//         dados = usuarios;
//       } else if (url === '/posts') {
//         dados = posts;
//       } else {
//         dados = null;
//         status = 404;
//       }

//       resolve({
//         ok: status === 200,
//         status,
//         json: async () => dados,
//       });
//     }, 800);
//   });
// }

// function useFetch(url) {
//   const [dados, setDados] = useState(null);
//   const [carregando, setCarregando] = useState(true);
//   const [erro, setErro] = useState(null);

//   useEffect(() => {
//     let cancelado = false;

//     async function carregar() {
//       setCarregando(true);
//       setErro(null);

//       try {
//         const resposta = await fakeFetch(url);

//         if (!resposta.ok) {
//           throw new Error(`Erro ${resposta.status}`);
//         }

//         const json = await resposta.json();

//         if (!cancelado) {
//           setDados(json);
//         }
//       } catch (e) {
//         if (!cancelado) {
//           setErro(e.message);
//         }
//       } finally {
//         if (!cancelado) {
//           setCarregando(false);
//         }
//       }
//     }

//     carregar();

//     return () => {
//       cancelado = true;
//     };
//   }, [url]);

//   return { dados, carregando, erro };
// }

// function useForm(valoresIniciais, validar) {
//   const [valores, setValores] = useState(valoresIniciais);
//   const [erros, setErros] = useState({});

//   function alterar(campo, valor) {
//     setValores(ant => ({
//       ...ant,
//       [campo]: valor,
//     }));
//   }

//   function enviar(aoEnviar) {
//     const novosErros = validar(valores);

//     setErros(novosErros);

//     if (Object.keys(novosErros).length === 0) {
//       aoEnviar(valores);
//     }
//   }

//   function limpar() {
//     setValores(valoresIniciais);
//     setErros({});
//   }

//   return { valores, erros, alterar, enviar, limpar };
// }

// function ExemploToggle() {
//   const [notificacoes, alternarNotificacoes] = useToggle(true);
//   const [modoAviao, alternarModoAviao] = useToggle();

//   return (
//     <View style={styles.secao}>
//       <Text style={styles.titulo}>Exemplo 1 - useToggle</Text>

//       <View style={styles.linha}>
//         <Text style={styles.texto}>
//           Notificações: {notificacoes ? 'ON' : 'OFF'}
//         </Text>

//         <Switch
//           value={notificacoes}
//           onValueChange={alternarNotificacoes}
//         />
//       </View>

//       <View style={styles.linha}>
//         <Text style={styles.texto}>
//           Modo avião: {modoAviao ? 'ON' : 'OFF'}
//         </Text>

//         <Switch
//           value={modoAviao}
//           onValueChange={alternarModoAviao}
//         />
//       </View>
//     </View>
//   );
// }

// function Posts() {
//   const { dados, carregando, erro } = useFetch('/posts');

//   if (carregando) {
//     return <ActivityIndicator size="large" />;
//   }

//   if (erro) {
//     return <Text style={styles.erro}>{erro}</Text>;
//   }

//   return (
//     <Text style={styles.texto}>
//       {dados.length} posts carregados
//     </Text>
//   );
// }

// function Usuarios() {
//   const { dados, carregando, erro } = useFetch('/usuarios');

//   if (carregando) {
//     return <ActivityIndicator size="large" />;
//   }

//   if (erro) {
//     return <Text style={styles.erro}>{erro}</Text>;
//   }

//   return (
//     <View style={styles.lista}>
//       {dados.map(usuario => (
//         <Text key={usuario.id} style={styles.texto}>
//           {usuario.nome}
//         </Text>
//       ))}
//     </View>
//   );
// }

// function Inexistente() {
//   const { carregando, erro } = useFetch('/nada');

//   if (carregando) {
//     return <ActivityIndicator size="large" />;
//   }

//   return <Text style={styles.erro}>{erro}</Text>;
// }

// function ExemploFetch() {
//   return (
//     <View style={styles.secao}>
//       <Text style={styles.titulo}>Exemplo 2 - useFetch</Text>

//       <Text style={styles.subtitulo}>Posts</Text>
//       <Posts />

//       <Text style={styles.subtitulo}>Usuários</Text>
//       <Usuarios />

//       <Text style={styles.subtitulo}>Endereço errado</Text>
//       <Inexistente />
//     </View>
//   );
// }

// function validarLogin(v) {
//   const e = {};

//   if (!v.email.includes('@')) {
//     e.email = 'E-mail inválido';
//   }

//   if (v.senha.length < 6) {
//     e.senha = 'Mínimo de 6 caracteres';
//   }

//   return e;
// }

// function fazerLogin(v) {
//   Alert.alert('Sucesso', `Bem-vindo, ${v.email}`);
// }

// const valoresIniciais = {
//   email: '',
//   senha: '',
// };

// function ExemploForm() {
//   const { valores, erros, alterar, enviar, limpar } =
//     useForm(valoresIniciais, validarLogin);

//   return (
//     <View style={styles.secao}>
//       <Text style={styles.titulo}>Exemplo 3 - useForm</Text>

//       <Text style={styles.subtitulo}>Formulário de login</Text>

//       <TextInput
//         style={styles.campo}
//         placeholder="E-mail"
//         autoCapitalize="none"
//         keyboardType="email-address"
//         value={valores.email}
//         onChangeText={t => alterar('email', t)}
//       />

//       {erros.email ? (
//         <Text style={styles.erro}>{erros.email}</Text>
//       ) : null}

//       <TextInput
//         style={styles.campo}
//         placeholder="Senha"
//         secureTextEntry
//         value={valores.senha}
//         onChangeText={t => alterar('senha', t)}
//       />

//       {erros.senha ? (
//         <Text style={styles.erro}>{erros.senha}</Text>
//       ) : null}

//       <View style={styles.botoes}>
//         <Button
//           title="Entrar"
//           onPress={() => enviar(fazerLogin)}
//         />

//         <Button
//           title="Limpar"
//           color="#999"
//           onPress={limpar}
//         />
//       </View>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <ScrollView
//       style={styles.fundo}
//       contentContainerStyle={styles.container}
//       keyboardShouldPersistTaps="handled"
//     >
//       <Text style={styles.cabecalho}>
//         Atividade 12
//       </Text>

//       <Text style={styles.descricao}>
//         Hooks personalizados no React Native
//       </Text>

//       <ExemploToggle />

//       <View style={styles.divisor} />

//       <ExemploFetch />

//       <View style={styles.divisor} />

//       <ExemploForm />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   fundo: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     paddingTop: 55,
//     paddingBottom: 40,
//     alignItems: 'center',
//     gap: 20,
//   },
//   cabecalho: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#222222',
//   },
//   descricao: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#666666',
//   },
//   secao: {
//     width: '100%',
//     alignItems: 'center',
//     gap: 12,
//   },
//   titulo: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#222222',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   subtitulo: {
//     fontSize: 19,
//     fontWeight: 'bold',
//     color: '#444444',
//     marginTop: 8,
//   },
//   texto: {
//     fontSize: 18,
//     color: '#333333',
//     textAlign: 'center',
//   },
//   linha: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   lista: {
//     alignItems: 'center',
//     gap: 6,
//   },
//   divisor: {
//     height: 2,
//     backgroundColor: '#DDDDDD',
//     width: '100%',
//     marginVertical: 12,
//   },
//   campo: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#999999',
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//   },
//   erro: {
//     color: 'red',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   botoes: {
//     width: '100%',
//     gap: 12,
//     marginTop: 10,
//   },
// });
