
import React, { useState, useEffect, useContext, createContext } from 'react';
import { View, Text, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';

// CÓDIGO 1

export default function App() {
  const [numero, setNumero] = useState(0);

  return (
    <View>
      <Text>{numero}</Text>
      <Button title="+" onPress={() => setNumero(numero + 1)} />
      <Button title="-" onPress={() => setNumero(numero - 1)} />
    </View>
  );
}


CÓDIGO 2

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <View>
      <TextInput onChangeText={setNome} />
      <Text>Olá, {nome}!</Text>
    </View>
  );
}


CÓDIGO 3

export default function App() {
  const [visivel, setVisivel] = useState(false);

  return (
    <View>
      <Button title="Mostrar/Esconder" onPress={() => setVisivel(!visivel)} />
      {visivel && <Text>Você encontrou o segredo!</Text>}
    </View>
  );
}


CÓDIGO 4

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');

  const adicionar = () => {
    if (!texto) return;
    setTarefas([...tarefas, texto]);
    setTexto('');
  };

  const remover = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  return (
    <View>
      <TextInput value={texto} onChangeText={setTexto} />
      <Button title="Adicionar" onPress={adicionar} />
      <FlatList
        data={tarefas}
        keyExtractor={(_, i) => String(i)}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item}</Text>
            <Button title="Remover" onPress={() => remover(index)} />
          </View>
        )}
      />
    </View>
  );
}


CÓDIGO 5

export default function App() {
  const [jogo, setJogo] = useState({ pontos: 0, vidas: 3 });

  return (
    <View>
      <Text>Pontos: {jogo.pontos} | Vidas: {jogo.vidas}</Text>
      <Button
        title="Acertar"
        onPress={() => setJogo({ ...jogo, pontos: jogo.pontos + 1 })}
      />
      <Button
        title="Errar"
        onPress={() =>
          setJogo({ ...jogo, vidas: Math.max(0, jogo.vidas - 1) })
        }
      />
    </View>
  );
}


CÓDIGO 6

export default function App() {
  useEffect(() => {
    console.log('Componente montado');
    return () => console.log('Componente desmontado');
  }, []);

  return <Text>Olá</Text>;
}


CÓDIGO 7

export default function App() {
  const [segundos, setSegundos] = useState(0);
  const [rodando, setRodando] = useState(true);

  useEffect(() => {
    if (!rodando) return;
    const timer = setInterval(() => setSegundos((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [rodando]);

  return (
    <View>
      <Text>{segundos}s</Text>
      <Button
        title={rodando ? 'Pausar' : 'Retomar'}
        onPress={() => setRodando(!rodando)}
      />
    </View>
  );
}


CÓDIGO 8

export default function App() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((r) => r.json())
      .then(setDados)
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) return <ActivityIndicator />;
  if (erro) return <Text>Erro: {erro}</Text>;

  return (
    <FlatList
      data={dados}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
}


CÓDIGO 9

export default function App() {
  const [texto, setTexto] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const t = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?q=${encodeURIComponent(texto)}`)
        .then((r) => r.json())
        .then(setResultados);
    }, 500);

    return () => clearTimeout(t);
  }, [texto]);

  return (
    <View>
      <TextInput value={texto} onChangeText={setTexto} />
      <FlatList
        data={resultados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}


CÓDIGO 10

export default function App() {
  const [valor, setValor] = useState(0);
  const [titulo, setTitulo] = useState('Valor: 0');

  useEffect(() => {
    console.log('Novo valor:', valor);
    setTitulo(`Valor: ${valor}`);
  }, [valor]);

  return (
    <>
      <Text>{titulo}</Text>
      <Button title="+1" onPress={() => setValor(valor + 1)} />
    </>
  );
}


CÓDIGO 10 - REFATORADO

export default function App() {
  const [valor, setValor] = useState(0);
  const titulo = `Valor: ${valor}`;

  return (
    <>
      <Text>{titulo}</Text>
      <Button title="+1" onPress={() => setValor(valor + 1)} />
    </>
  );
}


CÓDIGO 11

const UsuarioContext = createContext();

function Perfil() {
  const { nome, idade } = useContext(UsuarioContext);
  return <Text>{nome}, {idade} anos</Text>;
}

export default function App() {
  return (
    <UsuarioContext.Provider value={{ nome: 'Ana', idade: 25 }}>
      <Perfil />
    </UsuarioContext.Provider>
  );
}


CÓDIGO 12

const TemaContext = createContext();

function Header() {
  const { texto } = useContext(TemaContext);
  return <Text style={{ color: texto }}>Meu App</Text>;
}

function Corpo() {
  const { fundo, texto, alternarTema } = useContext(TemaContext);

  return (
    <View style={{ backgroundColor: fundo }}>
      <Text style={{ color: texto }}>Corpo</Text>
      <Button title="Alternar" onPress={alternarTema} />
    </View>
  );
}

export default function App() {
  const [tema, setTema] = useState('claro');
  const alternarTema = () =>
    setTema((t) => (t === 'claro' ? 'escuro' : 'claro'));
  const fundo = tema === 'claro' ? '#fff' : '#000';
  const texto = tema === 'claro' ? '#000' : '#fff';

  return (
    <TemaContext.Provider value={{ fundo, texto, alternarTema }}>
      <Header />
      <Corpo />
    </TemaContext.Provider>
  );
}


CÓDIGO 13

const CarrinhoContext = createContext();

const produtos = [
  { id: 1, nome: 'Maçã', preco: 2 },
  { id: 2, nome: 'Pão', preco: 5 },
];

function ListaProdutos() {
  const { adicionar } = useContext(CarrinhoContext);

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View>
          <Text>{item.nome} - R$ {item.preco}</Text>
          <Button title="Adicionar" onPress={() => adicionar(item)} />
        </View>
      )}
    />
  );
}

function Carrinho() {
  const { itens, remover, total } = useContext(CarrinhoContext);

  return (
    <View>
      {itens.map((item, i) => (
        <View key={i}>
          <Text>{item.nome}</Text>
          <Button title="Remover" onPress={() => remover(i)} />
        </View>
      ))}
      <Text>Total: R$ {total}</Text>
    </View>
  );
}

export default function App() {
  const [itens, setItens] = useState([]);
  const adicionar = (item) => setItens([...itens, item]);
  const remover = (index) =>
    setItens(itens.filter((_, i) => i !== index));
  const total = itens.reduce((s, i) => s + i.preco, 0);

  return (
    <CarrinhoContext.Provider value={{ itens, adicionar, remover, total }}>
      <ListaProdutos />
      <Carrinho />
    </CarrinhoContext.Provider>
  );
}


CÓDIGO 14

const AuthContext = createContext();

function Login() {
  const { login } = useContext(AuthContext);
  const [nome, setNome] = useState('');

  return (
    <View>
      <TextInput value={nome} onChangeText={setNome} />
      <Button title="Entrar" onPress={() => login(nome)} />
    </View>
  );
}

function Home() {
  const { usuario, logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Bem-vindo, {usuario.nome}</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
}

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const login = (nome) => setUsuario({ nome });
  const logout = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {usuario ? <Home /> : <Login />}
    </AuthContext.Provider>
  );
}


CÓDIGO 15

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const login = (nome) => setUsuario({ nome });
  const logout = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider');
  return ctx;
}

function LoginScreen() {
  const { login } = useAuth();
  const [nome, setNome] = useState('');

  return (
    <View>
      <TextInput value={nome} onChangeText={setNome} />
      <Button title="Entrar" onPress={() => login(nome)} />
    </View>
  );
}

function HomeScreen() {
  const { usuario, logout } = useAuth();

  return (
    <View>
      <Text>Bem-vindo, {usuario.nome}</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
}

function Rotas() {
  const { usuario } = useAuth();
  return usuario ? <HomeScreen /> : <LoginScreen />;
}

export default function App() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}
