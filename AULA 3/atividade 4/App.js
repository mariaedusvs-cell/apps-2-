// App.js
// Props Básicas
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Saudacao = (props) => {
//   return (
//     <View style={estilos.caixa}>
//       <Text style={estilos.texto}>Olá, {props.nome}!</Text>
//       <Text>Idade: {props.idade}</Text>
//     </View>
//   );
// };

// export default function App() {
//   return (
//     <View style={estilos.container}>
//       <Saudacao nome="Maria" idade={25} />
//       <Saudacao nome="João" idade={30} />
//       <Saudacao nome="Ana" idade={22} />
//     </View>
//   );
// }

// const estilos = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   caixa: { marginBottom: 16, padding: 12, backgroundColor: '#eee', borderRadius: 6 },
//   texto: { fontSize: 18, fontWeight: 'bold' },
// });

// Desestruturação de Props
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const CartaoProduto = ({ nome, preco, disponivel }) => {
//   return (
//     <View style={estilos.cartao}>
//       <Text style={estilos.nome}>{nome}</Text>
//       <Text>R$ {preco.toFixed(2)}</Text>
//       <Text>{disponivel ? ' Em estoque' : ' Esgotado'}</Text>
//     </View>
//   );
// };

// export default function App() {
//   return (
//     <View style={estilos.container}>
//       <CartaoProduto nome="Teclado" preco={149.9} disponivel={true} />
//       <CartaoProduto nome="Mouse" preco={79.5} disponivel={false} />
//     </View>
//   );
// }

// const estilos = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   cartao: { padding: 16, marginBottom: 12, backgroundColor: '#f5f5f5', borderRadius: 8 },
//   nome: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
// });

// Props com Valores Padrão
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const Botao = ({ titulo = 'Clique aqui', cor = '#007AFF', onPress }) => {
//   return (
//     <TouchableOpacity
//       style={[estilos.botao, { backgroundColor: cor }]}
//       onPress={onPress}
//     >
//       <Text style={estilos.textoBotao}>{titulo}</Text>
//     </TouchableOpacity>
//   );
// };

// export default function App() {
//   return (
//     <View style={estilos.container}>
//       <Botao onPress={() => alert('Padrão!')} />
//       <Botao titulo="Salvar" cor="#28a745" onPress={() => alert('Salvo!')} />
//       <Botao titulo="Excluir" cor="#dc3545" onPress={() => alert('Excluído!')} />
//     </View>
//   );
// }

// const estilos = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
//   botao: { paddingVertical: 12, paddingHorizontal: 24, borderRadius: 6 },
//   textoBotao: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
// });

// Props children
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Painel = ({ titulo, children }) => {
//   return (
//     <View style={estilos.painel}>
//       <Text style={estilos.titulo}>{titulo}</Text>
//       <View style={estilos.conteudo}>{children}</View>
//     </View>
//   );
// };

// export default function App() {
//   return (
//     <View style={estilos.container}>
//       <Painel titulo="Informações do Usuário">
//         <Text>Nome: Carlos</Text>
//         <Text>Email: carlos@email.com</Text>
//         <Text>Cidade: São Paulo</Text>
//       </Painel>

//       <Painel titulo="Estatísticas">
//         <Text>Posts: 42</Text>
//         <Text>Seguidores: 1200</Text>
//       </Painel>
//     </View>
//   );
// }

// const estilos = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   painel: { marginBottom: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 },
//   titulo: { fontSize: 16, fontWeight: 'bold', padding: 10, backgroundColor: '#f0f0f0' },
//   conteudo: { padding: 10 },
// });

// Funções como Props (Callbacks)

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const Contador = ({ valor, onIncrementar, onDecrementar }) => {
//   return (
//     <View style={estilos.linha}>
//       <TouchableOpacity onPress={onDecrementar} style={estilos.botao}>
//         <Text style={estilos.textoBotao}>-</Text>
//       </TouchableOpacity>

//       <Text style={estilos.valor}>{valor}</Text>

//       <TouchableOpacity onPress={onIncrementar} style={estilos.botao}>
//         <Text style={estilos.textoBotao}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default function App() {
//   const [quantidade, setQuantidade] = useState(0);

//   return (
//     <View style={estilos.container}>
//       <Text style={estilos.titulo}>Quantidade de itens:</Text>

//       <Contador
//         valor={quantidade}
//         onIncrementar={() => setQuantidade(quantidade + 1)}
//         onDecrementar={() => setQuantidade(Math.max(0, quantidade - 1))}
//       />
//     </View>
//   );
// }

// const estilos = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   titulo: { fontSize: 18, marginBottom: 12 },
//   linha: { flexDirection: 'row', alignItems: 'center', gap: 16 },
//   botao: { backgroundColor: '#007AFF', width: 44, height: 44,
//     borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
//   textoBotao: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
//   valor: { fontSize: 28, fontWeight: 'bold', minWidth: 40, textAlign: 'center' },
// });

// Listas com Props (FlatList)
// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// const ItemAluno = ({ nome, nota }) => {
//   const aprovado = nota >= 7;

//   return (
//     <View style={[estilos.item,
//       { backgroundColor: aprovado ? '#d4edda' : '#f8d7da' }]}>
//       <Text style={estilos.nome}>{nome}</Text>
//       <Text>Nota: {nota} — {aprovado ? 'Aprovado' : 'Reprovado'}</Text>
//     </View>
//   );
// };

// export default function App() {
//   const alunos = [
//     { id: '1', nome: 'Lucas', nota: 8.5 },
//     { id: '2', nome: 'Camila', nota: 5.0 },
//     { id: '3', nome: 'Pedro', nota: 9.2 },
//     { id: '4', nome: 'Julia', nota: 6.8 },
//   ];

//   return (
//     <View style={estilos.container}>
//       <Text style={estilos.titulo}>Boletim da Turma</Text>

//       <FlatList
//         data={alunos}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) =>
//           <ItemAluno nome={item.nome} nota={item.nota} />}
//       />
//     </View>
//   );
// }

// const estilos = StyleSheet.create({
//   container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
//   titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
//   item: { padding: 12, marginBottom: 8, borderRadius: 6 },
//   nome: { fontSize: 16, fontWeight: 'bold' },
// });