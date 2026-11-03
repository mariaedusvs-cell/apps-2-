
import React, { useState, useEffect, useContext, createContext, useRef } from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity, Switch, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';

const API = 'https://dummyjson.com';
const TemaContext = createContext();
const AuthContext = createContext(null);
const FavoritosContext = createContext();

const cores = {
  claro: { fundo: '#FFFFFF', texto: '#111111', primaria: '#6200EE' },
  escuro: { fundo: '#121212', texto: '#EEEEEE', primaria: '#BB86FC' },
};

function TemaProvider({ children }) {
  const [modo, setModo] = useState('claro');
  const alternarTema = () => setModo(m => m === 'claro' ? 'escuro' : 'claro');
  return (
    <TemaContext.Provider value={{ modo, cores: cores[modo], alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const login = email => setUsuario({ nome: 'Ana', email });
  const logout = () => setUsuario(null);
  return (
    <AuthContext.Provider value={{ usuario, logado: !!usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth fora do AuthProvider');
  return ctx;
}

function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);
  const alternarFavorito = id => setFavoritos(ant =>
    ant.includes(id) ? ant.filter(x => x !== id) : [...ant, id]
  );
  return (
    <FavoritosContext.Provider value={{ favoritos, alternarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

function useFavoritos() {
  return useContext(FavoritosContext);
}

function useToggle(inicial = false) {
  const [valor, setValor] = useState(inicial);
  const alternar = () => setValor(v => !v);
  return [valor, alternar];
}

function useFetch(url) {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let cancelado = false;
    setCarregando(true);
    setErro(null);

    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error(`Erro ${r.status}`);
        return r.json();
      })
      .then(json => {
        if (!cancelado) setDados(json);
      })
      .catch(e => {
        if (!cancelado) setErro(e.message);
      })
      .finally(() => {
        if (!cancelado) setCarregando(false);
      });

    return () => { cancelado = true; };
  }, [url]);

  return { dados, carregando, erro };
}

function useForm(iniciais, validar) {
  const [valores, setValores] = useState(iniciais);
  const [erros, setErros] = useState({});

  const alterar = (campo, valor) =>
    setValores(v => ({ ...v, [campo]: valor }));

  function enviar(aoEnviar) {
    const novos = validar(valores);
    setErros(novos);
    if (Object.keys(novos).length === 0) aoEnviar(valores);
  }

  return { valores, erros, alterar, enviar };
}

function Campo(props) {
  return <TextInput {...props} style={styles.campo} />;
}

function Linha({ children }) {
  return <View style={styles.linha}>{children}</View>;
}

function Mensagem({ children }) {
  return <Text style={styles.texto}>{children}</Text>;
}

// CÓDIGO 1 - CONTADOR

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{contador}</Text>
      <Button title="+1" onPress={() => setContador(contador + 1)} />
      <Button title="-1" onPress={() => setContador(contador - 1)} />
      <Button title="Zerar" onPress={() => setContador(0)} />
    </View>
  );
}

// CÓDIGO 2 - TEXTINPUT

function Saudacao() {
  const [nome, setNome] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text>{nome ? `Olá, ${nome}!` : 'Digite algo acima'}</Text>
    </View>
  );
}

// CÓDIGO 3 - ATUALIZAÇÃO FUNCIONAL

function AtualizacaoFuncional() {
  const [contador, setContador] = useState(0);

  function somarTres() {
    setContador(anterior => anterior + 1);
    setContador(anterior => anterior + 1);
    setContador(anterior => anterior + 1);
  }

  return (
    <View>
      <Mensagem>{contador}</Mensagem>
      <Button title="Somar 3" onPress={somarTres} />
    </View>
  );
}

// CÓDIGO 4 - ESTADO COM OBJETOS

function EstadoObjeto() {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    idade: 0,
  });

  function atualizar(campo, valor) {
    setUsuario(ant => ({ ...ant, [campo]: valor }));
  }

  return (
    <View>
      <Campo placeholder="Nome" value={usuario.nome}
        onChangeText={v => atualizar('nome', v)} />
      <Campo placeholder="Email" value={usuario.email}
        onChangeText={v => atualizar('email', v)} />
      <Campo placeholder="Idade" keyboardType="numeric"
        value={String(usuario.idade)}
        onChangeText={v => atualizar('idade', Number(v) || 0)} />
      <Mensagem>{usuario.nome} {usuario.email} {usuario.idade}</Mensagem>
    </View>
  );
}

// CÓDIGO 5 - ESTADO COM ARRAYS

function EstadoArray() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');

  const adicionar = texto =>
    setTarefas(ant => [
      ...ant,
      { id: Date.now().toString(), texto, feita: false },
    ]);

  const remover = id =>
    setTarefas(ant => ant.filter(t => t.id !== id));

  const alternar = id =>
    setTarefas(ant => ant.map(t =>
      t.id === id ? { ...t, feita: !t.feita } : t
    ));

  return (
    <View>
      <Campo placeholder="Tarefa" value={texto} onChangeText={setTexto} />
      <Button title="Adicionar" onPress={() => {
        if (texto.trim()) {
          adicionar(texto);
          setTexto('');
        }
      }} />
      {tarefas.map(t => (
        <Linha key={t.id}>
          <TouchableOpacity onPress={() => alternar(t.id)}>
            <Mensagem>{t.feita ? '✓ ' : '○ '}{t.texto}</Mensagem>
          </TouchableOpacity>
          <Button title="Remover" onPress={() => remover(t.id)} />
        </Linha>
      ))}
    </View>
  );
}

// CÓDIGO 6 - BUSCAR DADOS DE UMA API

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    let ativo = true;

    async function carregar() {
      try {
        const resposta = await fetch(`${API}/users`);
        if (!resposta.ok) throw new Error('Erro na requisição');
        const dados = await resposta.json();
        if (ativo) setUsuarios(dados.users);
      } catch (e) {
        if (ativo) setErro(e.message);
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    carregar();
    return () => { ativo = false; };
  }, []);

  if (carregando) return <ActivityIndicator />;
  if (erro) return <Mensagem>{erro}</Mensagem>;

  return (
    <FlatList
      data={usuarios}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) =>
        <Mensagem>{item.firstName} {item.lastName}</Mensagem>
      }
    />
  );
}

// CÓDIGO 7 - EFEITO COM DEPENDÊNCIA

function DetalhePost() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(null);

  useEffect(() => {
    let ativo = true;
    setPost(null);

    fetch(`${API}/posts/${postId}`)
      .then(r => r.json())
      .then(d => { if (ativo) setPost(d); })
      .catch(() => {});

    return () => { ativo = false; };
  }, [postId]);

  return (
    <View>
      <Linha>
        <Button title="Anterior"
          onPress={() => setPostId(p => Math.max(1, p - 1))} />
        <Button title="Próximo"
          onPress={() => setPostId(p => p + 1)} />
      </Linha>
      {post ? <Mensagem>{post.title}</Mensagem> : <ActivityIndicator />}
    </View>
  );
}

// CÓDIGO 8 - CRONÔMETRO

function Cronometro() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSegundos(s => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <Mensagem>{segundos}s</Mensagem>;
}

// CÓDIGO 9 - BUSCA COM DEBOUNCE

function BuscaProdutos() {
  const [termo, setTermo] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (termo.length < 3) {
      setResultados([]);
      return;
    }

    let ativo = true;

    const timer = setTimeout(async () => {
      try {
        const r = await fetch(
          `${API}/products/search?q=${encodeURIComponent(termo)}`
        );
        const dados = await r.json();
        if (ativo) setResultados(dados.products);
      } catch (e) {
        if (ativo) setResultados([]);
      }
    }, 500);

    return () => {
      ativo = false;
      clearTimeout(timer);
    };
  }, [termo]);

  return (
    <View style={styles.preencher}>
      <Campo placeholder="Buscar produto" value={termo}
        onChangeText={setTermo} />
      <FlatList
        data={resultados}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Mensagem>{item.title}</Mensagem>}
      />
    </View>
  );
}

// CÓDIGO 10 - USECONTEXT TEMA

function HomeTema() {
  const { modo, cores: tema, alternarTema } = useContext(TemaContext);

  return (
    <View style={[
      styles.preencher,
      { backgroundColor: tema.fundo, padding: 12, justifyContent: 'center' }
    ]}>
      <Text style={{ color: tema.texto }}>Tema atual: {modo}</Text>
      <Button title="Trocar tema" onPress={alternarTema} />
    </View>
  );
}

// CÓDIGO 11 - AUTENTICAÇÃO COM CONTEXT

function Rotas() {
  const { usuario, logado, login, logout } = useAuth();
  const [email, setEmail] = useState('');

  return logado ? (
    <View>
      <Mensagem>Bem-vinda, {usuario.nome}! {usuario.email}</Mensagem>
      <Button title="Sair" onPress={logout} />
    </View>
  ) : (
    <View>
      <Campo placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title="Entrar" onPress={() => login(email)} />
    </View>
  );
}

// CÓDIGO 12 - USETOGGLE

function Configuracoes() {
  const [notif, trocarNotif] = useToggle(true);
  const [aviao, trocarAviao] = useToggle();

  return (
    <View>
      <Linha>
        <Mensagem>Notificações</Mensagem>
        <Switch value={notif} onValueChange={trocarNotif} />
      </Linha>
      <Linha>
        <Mensagem>Modo avião</Mensagem>
        <Switch value={aviao} onValueChange={trocarAviao} />
      </Linha>
    </View>
  );
}

// CÓDIGO 13 - USEFETCH

function Posts() {
  const { dados, carregando, erro } = useFetch(`${API}/posts`);

  if (carregando) return <ActivityIndicator />;
  if (erro) return <Mensagem>{erro}</Mensagem>;

  return <Mensagem>{dados.posts.length} posts carregados</Mensagem>;
}

// CÓDIGO 14 - USEFORM

function FormularioLogin() {
  function validarLogin(v) {
    const erros = {};
    if (!v.email.includes('@')) erros.email = 'Email inválido';
    if (!v.senha) erros.senha = 'Digite a senha';
    return erros;
  }

  const { valores, erros, alterar, enviar } = useForm(
    { email: '', senha: '' },
    validarLogin
  );

  const [mensagem, setMensagem] = useState('');

  function fazerLogin(v) {
    setMensagem(`Login enviado: ${v.email}`);
  }

  return (
    <View>
      <Campo placeholder="Email" value={valores.email}
        onChangeText={t => alterar('email', t)} />
      {erros.email && <Mensagem>{erros.email}</Mensagem>}
      <Campo placeholder="Senha" secureTextEntry value={valores.senha}
        onChangeText={t => alterar('senha', t)} />
      {erros.senha && <Mensagem>{erros.senha}</Mensagem>}
      <Button title="Entrar" onPress={() => enviar(fazerLogin)} />
      <Mensagem>{mensagem}</Mensagem>
    </View>
  );
}

// CÓDIGO 15 - FLATLIST SIMPLES

const frutas = [
  { id: '1', nome: 'Maçã' },
  { id: '2', nome: 'Banana' },
  { id: '3', nome: 'Laranja' },
];

function ListaFrutas() {
  return (
    <FlatList
      data={frutas}
      keyExtractor={item => item.id}
      renderItem={({ item }) =>
        <Text style={{ padding: 16 }}>{item.nome}</Text>
      }
    />
  );
}

// CÓDIGO 16 - FLATLIST COM CABEÇALHO E RODAPÉ

const contatos = [
  { id: '1', nome: 'Ana' },
  { id: '2', nome: 'Bruno' },
  { id: '3', nome: 'Carla' },
];

function ListaContatos() {
  return (
    <FlatList
      data={contatos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Mensagem>{item.nome}</Mensagem>}
      ItemSeparatorComponent={() =>
        <View style={{ height: 1, backgroundColor: '#ccc' }} />
      }
      ListHeaderComponent={<Mensagem>Contatos</Mensagem>}
      ListFooterComponent={<Mensagem>{contatos.length} contatos</Mensagem>}
      ListEmptyComponent={<Mensagem>Nenhum contato</Mensagem>}
    />
  );
}

// CÓDIGO 17 - FLATLIST HORIZONTAL

const categorias = [
  { id: '1', nome: 'Roupas' },
  { id: '2', nome: 'Calçados' },
  { id: '3', nome: 'Livros' },
];

function ListaHorizontal() {
  return (
    <FlatList
      data={categorias}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) =>
        <View style={styles.chip}>
          <Mensagem>{item.nome}</Mensagem>
        </View>
      }
    />
  );
}

// CÓDIGO 18 - FLATLIST EM GRADE

const fotos = [
  { id: '1', nome: 'Foto 1' },
  { id: '2', nome: 'Foto 2' },
  { id: '3', nome: 'Foto 3' },
  { id: '4', nome: 'Foto 4' },
];

function ListaGrade() {
  return (
    <FlatList
      data={fotos}
      numColumns={2}
      columnWrapperStyle={{ gap: 8 }}
      keyExtractor={item => item.id}
      renderItem={({ item }) =>
        <View style={styles.foto}>
          <Mensagem>{item.nome}</Mensagem>
        </View>
      }
    />
  );
}

// CÓDIGO 19 - LISTA DE TAREFAS COM FILTROS

function ListaTarefas() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('todas');

  function adicionar() {
    if (!texto.trim()) return;

    setTarefas(ant => [
      { id: Date.now().toString(), titulo: texto, feita: false },
      ...ant,
    ]);
    setTexto('');
  }

  const remover = id =>
    setTarefas(ant => ant.filter(t => t.id !== id));

  const alternar = id =>
    setTarefas(ant => ant.map(t =>
      t.id === id ? { ...t, feita: !t.feita } : t
    ));

  const visiveis = tarefas
    .filter(t => t.titulo.toLowerCase().includes(busca.toLowerCase()))
    .filter(t =>
      filtro === 'todas' ||
      (filtro === 'feitas' ? t.feita : !t.feita)
    )
    .sort((a, b) => a.titulo.localeCompare(b.titulo));

  return (
    <View style={styles.preencher}>
      <Campo placeholder="Nova tarefa" value={texto}
        onChangeText={setTexto} />
      <Button title="Adicionar" onPress={adicionar} />
      <Campo placeholder="Filtrar tarefas" value={busca}
        onChangeText={setBusca} />
      <Linha>
        <Button title="Todas" onPress={() => setFiltro('todas')} />
        <Button title="Feitas" onPress={() => setFiltro('feitas')} />
        <Button title="Pendentes" onPress={() => setFiltro('pendentes')} />
      </Linha>
      <FlatList
        data={visiveis}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <TouchableOpacity
            onPress={() => alternar(item.id)}
            onLongPress={() => remover(item.id)}
          >
            <Text style={[styles.texto, item.feita && styles.feita]}>
              {item.titulo}
            </Text>
          </TouchableOpacity>
        }
        ListEmptyComponent={<Mensagem>Nenhuma tarefa</Mensagem>}
      />
    </View>
  );
}

// CÓDIGO 20 - PULL TO REFRESH

function AtualizarPosts() {
  const [posts, setPosts] = useState([]);
  const [atualizando, setAtualizando] = useState(false);

  async function aoAtualizar() {
    setAtualizando(true);
    try {
      const r = await fetch(`${API}/posts?limit=10`);
      const d = await r.json();
      setPosts(d.posts);
    } finally {
      setAtualizando(false);
    }
  }

  useEffect(() => {
    aoAtualizar();
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <Mensagem>{item.title}</Mensagem>}
      refreshing={atualizando}
      onRefresh={aoAtualizar}
    />
  );
}

// CÓDIGO 21 - PAGINAÇÃO

function PaginacaoPosts() {
  const [posts, setPosts] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [carregando, setCarregando] = useState(false);
  const [temMais, setTemMais] = useState(true);
  const trava = useRef(false);

  async function carregarMais() {
    if (trava.current || !temMais) return;

    trava.current = true;
    setCarregando(true);

    try {
      const url = `${API}/posts?limit=10&skip=${(pagina - 1) * 10}`;
      const resposta = await fetch(url);
      const dados = await resposta.json();
      const novos = dados.posts;

      setPosts(ant => [...ant, ...novos]);
      setPagina(p => p + 1);
      setTemMais(novos.length > 0 && pagina * 10 < dados.total);
    } catch (e) {
      setTemMais(false);
    } finally {
      setCarregando(false);
      trava.current = false;
    }
  }

  useEffect(() => {
    carregarMais();
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <Mensagem>{item.title}</Mensagem>}
      onEndReached={carregarMais}
      onEndReachedThreshold={0.5}
      ListFooterComponent={carregando ? <ActivityIndicator /> : null}
    />
  );
}

// CÓDIGO 22 - CATÁLOGO COM FAVORITOS

function Catalogo() {
  const { dados, carregando, erro } = useFetch(`${API}/products?limit=50`);
  const { favoritos, alternarFavorito } = useFavoritos();
  const [busca, setBusca] = useState('');

  if (carregando) return <ActivityIndicator size="large" />;
  if (erro) return <Mensagem>Erro: {erro}</Mensagem>;

  const produtos = dados.products.filter(p =>
    p.title.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.preencher}>
      <Campo placeholder="Buscar produto..." value={busca}
        onChangeText={setBusca} />
      <FlatList
        data={produtos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => alternarFavorito(item.id)}>
            <Mensagem>
              {favoritos.includes(item.id) ? '★' : '☆'} {item.title}
            </Mensagem>
          </TouchableOpacity>
        }
        ListEmptyComponent={<Mensagem>Nada encontrado</Mensagem>}
      />
    </View>
  );
}

// MENU DOS EXEMPLOS

const exemplos = [
  ['useState: Contador', Contador],
  ['useState: TextInput', Saudacao],
  ['useState: Atualização funcional', AtualizacaoFuncional],
  ['useState: Objetos', EstadoObjeto],
  ['useState: Arrays', EstadoArray],
  ['useEffect: Buscar API', ListaUsuarios],
  ['useEffect: Dependências', DetalhePost],
  ['useEffect: Cronômetro', Cronometro],
  ['useEffect: Debounce', BuscaProdutos],
  ['useContext: Tema', HomeTema],
  ['useContext: Autenticação', Rotas],
  ['Hook customizado: useToggle', Configuracoes],
  ['Hook customizado: useFetch', Posts],
  ['Hook customizado: useForm', FormularioLogin],
  ['FlatList: Frutas', ListaFrutas],
  ['FlatList: Cabeçalho e rodapé', ListaContatos],
  ['FlatList: Horizontal', ListaHorizontal],
  ['FlatList: Grade', ListaGrade],
  ['FlatList: Tarefas e filtros', ListaTarefas],
  ['FlatList: Pull-to-refresh', AtualizarPosts],
  ['FlatList: Paginação', PaginacaoPosts],
  ['Projeto integrador: Catálogo', Catalogo],
];

export default function App() {
  const [selecionado, setSelecionado] = useState(-1);
  const Exemplo = selecionado >= 0 ? exemplos[selecionado][1] : null;

  return (
    <TemaProvider>
      <AuthProvider>
        <FavoritosProvider>
          <View style={styles.app}>
            {selecionado < 0 ? (
              <FlatList
                data={exemplos}
                keyExtractor={(_, i) => String(i)}
                ListHeaderComponent={
                  <Text style={styles.titulo}>Hooks no React Native</Text>
                }
                renderItem={({ item, index }) =>
                  <TouchableOpacity
                    style={styles.opcao}
                    onPress={() => setSelecionado(index)}
                  >
                    <Text>{index + 1}. {item[0]}</Text>
                  </TouchableOpacity>
                }
              />
            ) : (
              <>
                <Button
                  title="Voltar aos exemplos"
                  onPress={() => setSelecionado(-1)}
                />
                <Text style={styles.titulo}>
                  {exemplos[selecionado][0]}
                </Text>
                <View style={styles.preencher}>
                  <Exemplo />
                </View>
              </>
            )}
          </View>
        </FavoritosProvider>
      </AuthProvider>
    </TemaProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  preencher: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  numero: {
    fontSize: 24,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  texto: {
    fontSize: 16,
    padding: 10,
  },
  campo: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginVertical: 6,
    borderRadius: 4,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  opcao: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  feita: {
    textDecorationLine: 'line-through',
  },
  chip: {
    padding: 8,
    margin: 6,
    backgroundColor: '#eee',
    height: 50,
  },
  foto: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#eee',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
