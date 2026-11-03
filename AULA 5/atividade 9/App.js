
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

// CÓDIGO 1 - USEEFFECT COM ARRAY VAZIO

function Exemplo1() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    console.log('montou!');
    setMensagem('Componente montado!');
  }, []);

  return (
    <View style={styles.exemplo}>
      <Text style={styles.titulo}>1 - Array vazio []</Text>
      <Text>{mensagem}</Text>
    </View>
  );
}

// CÓDIGO 2 - USEEFFECT COM DEPENDÊNCIA

function Exemplo2() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('contador mudou para:', contador);
  }, [contador]);

  return (
    <View style={styles.exemplo}>
      <Text style={styles.titulo}>2 - Dependência [contador]</Text>
      <Text style={styles.numero}>{contador}</Text>
      <Button
        title="Aumentar contador"
        onPress={() => setContador(contador + 1)}
      />
    </View>
  );
}

// CÓDIGO 3 - USEEFFECT SEM ARRAY

function Exemplo3() {
  const [contador, setContador] = useState(0);
  const [execucoes, setExecucoes] = useState(0);

  useEffect(() => {
    console.log('Renderização realizada!');
    setExecucoes(e => e + 1);
  }, [contador]);

  return (
    <View style={styles.exemplo}>
      <Text style={styles.titulo}>3 - Efeito após renderização</Text>
      <Text>Contador: {contador}</Text>
      <Text>Efeito executado: {execucoes} vezes</Text>
      <Button
        title="Atualizar"
        onPress={() => setContador(c => c + 1)}
      />
    </View>
  );
}

// CÓDIGO 4 - DOIS USEEFFECT NO MESMO COMPONENTE

function Exemplo4() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('montou!');
  }, []);

  useEffect(() => {
    console.log('contador mudou para:', contador);
  }, [contador]);

  return (
    <View style={styles.exemplo}>
      <Text style={styles.titulo}>4 - Dois useEffect</Text>
      <Text style={styles.numero}>{contador}</Text>
      <Button
        title="+1"
        onPress={() => setContador(contador + 1)}
      />
    </View>
  );
}

// CÓDIGO 5 - FUNÇÃO DE LIMPEZA

function Exemplo5() {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(true);

  useEffect(() => {
    if (!ativo) return;

    const id = setInterval(() => {
      console.log('tick');
      setSegundos(s => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [ativo]);

  return (
    <View style={styles.exemplo}>
      <Text style={styles.titulo}>5 - Cleanup</Text>
      <Text style={styles.numero}>{segundos}s</Text>
      <Button
        title={ativo ? 'Parar timer' : 'Iniciar timer'}
        onPress={() => setAtivo(a => !a)}
      />
      <Button
        title="Zerar"
        onPress={() => setSegundos(0)}
      />
    </View>
  );
}

// CÓDIGO 6 - BUSCAR DADOS DE UMA API

function Usuario({ id }) {
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    let ativo = true;

    setUsuario(null);
    setErro('');

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar usuário');
        return res.json();
      })
      .then(dados => {
        if (ativo) setUsuario(dados);
      })
      .catch(e => {
        if (ativo) setErro(e.message);
      });

    return () => {
      ativo = false;
    };
  }, [id]);

  if (erro) return <Text>{erro}</Text>;
  if (!usuario) return <ActivityIndicator size="large" />;

  return (
    <View>
      <Text>Nome: {usuario.name}</Text>
      <Text>Email: {usuario.email}</Text>
    </View>
  );
}

function Exemplo6() {
  const [id, setId] = useState(1);

  return (
    <View style={styles.exemplo}>
      <Text style={styles.titulo}>6 - Buscar dados de API</Text>
      <Text>ID do usuário: {id}</Text>

      <Usuario id={id} />

      <Button
        title="Próximo usuário"
        onPress={() => setId(atual => atual < 10 ? atual + 1 : 1)}
      />
    </View>
  );
}

// APP PRINCIPAL

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.cabecalho}>
        Atividade 9 - useEffect
      </Text>

      <Exemplo1 />
      <Exemplo2 />
      <Exemplo3 />
      <Exemplo4 />
      <Exemplo5 />
      <Exemplo6 />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  cabecalho: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  exemplo: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    gap: 10,
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  numero: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
