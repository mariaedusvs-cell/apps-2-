
// import React, { useEffect, useRef, useState } from 'react';
// import {
//   View, Text, Button, Image, ScrollView,
//   StyleSheet, ActivityIndicator, Alert,
//   Linking, Platform
// } from 'react-native';
// import { CameraView, useCameraPermissions } from 'expo-camera';
// import * as Notifications from 'expo-notifications';
// import * as Location from 'expo-location';
// import * as Device from 'expo-device';
// import Constants from 'expo-constants';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowBanner: true,
//     shouldShowList: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

// function ComPermissao({ children }) {
//   const [permission, requestPermission] = useCameraPermissions();

//   if (!permission) return <ActivityIndicator size="large" />;

//   if (permission.granted) return children;

//   return (
//     <View style={styles.centro}>
//       <Text style={styles.texto}>
//         Precisamos da câmera para ler o QR Code.
//       </Text>
//       <Button
//         title={permission.canAskAgain ? "Permitir" : "Abrir ajustes"}
//         onPress={permission.canAskAgain
//           ? requestPermission
//           : () => Linking.openSettings()}
//       />
//     </View>
//   );
// }

// function ExemploNotificacao() {
//   const [mensagem, setMensagem] = useState("Nenhum lembrete agendado.");

//   async function agendarLembrete() {
//     if (Platform.OS === 'web') {
//       setMensagem("Teste notificações no celular.");
//       return;
//     }

//     try {
//       if (Platform.OS === 'android') {
//         await Notifications.setNotificationChannelAsync('default', {
//           name: 'Lembretes',
//           importance: Notifications.AndroidImportance.HIGH,
//         });
//       }

//       const { status } = await Notifications.requestPermissionsAsync();

//       if (status !== 'granted') {
//         setMensagem("Permissão de notificações negada.");
//         return;
//       }

//       await Notifications.scheduleNotificationAsync({
//         content: {
//           title: 'Hora de estudar',
//           body: 'Revise o módulo 2.',
//           data: { url: '/estudos' },
//         },
//         trigger: {
//           type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
//           seconds: 5,
//         },
//       });

//       setMensagem("Lembrete agendado para daqui a 5 segundos!");
//     } catch (erro) {
//       setMensagem("Erro: " + erro.message);
//     }
//   }

//   return (
//     <View style={styles.centro}>
//       <Text style={styles.titulo}>Notificação local</Text>
//       <Text style={styles.texto}>{mensagem}</Text>
//       <Button title="Agendar lembrete" onPress={agendarLembrete} />
//     </View>
//   );
// }

// function ExemploPush() {
//   const [resultado, setResultado] = useState(
//     "Toque no botão para tentar obter o token."
//   );

//   async function obterToken() {
//     if (Platform.OS === 'web' || !Device.isDevice) {
//       setResultado("Push exige um aparelho físico.");
//       return;
//     }

//     const projectId =
//       Constants.easConfig?.projectId ||
//       Constants.expoConfig?.extra?.eas?.projectId;

//     if (!projectId) {
//       setResultado("Configure primeiro o projectId do EAS.");
//       return;
//     }

//     try {
//       if (Platform.OS === 'android') {
//         await Notifications.setNotificationChannelAsync('default', {
//           name: 'Notificações',
//           importance: Notifications.AndroidImportance.HIGH,
//         });
//       }

//       const { status } = await Notifications.requestPermissionsAsync();

//       if (status !== 'granted') {
//         setResultado("Permissão negada.");
//         return;
//       }

//       const { data } = await Notifications.getExpoPushTokenAsync({
//         projectId,
//       });

//       setResultado(data);
//     } catch (erro) {
//       setResultado("Erro: " + erro.message);
//     }
//   }

//   return (
//     <View style={styles.centro}>
//       <Text style={styles.titulo}>Notificações Push</Text>
//       <Text style={styles.texto}>{resultado}</Text>
//       <Button title="Obter token" onPress={obterToken} />
//       <Text style={styles.aviso}>
//         No Android, é necessário um development build.
//         O envio real também exige um servidor.
//       </Text>
//     </View>
//   );
// }

// function ExemploOuvintes() {
//   const [mensagem, setMensagem] = useState(
//     "Aguardando notificações..."
//   );

//   useEffect(() => {
//     if (Platform.OS === 'web') return;

//     const recebida = Notifications.addNotificationReceivedListener(
//       (notificacao) => {
//         setMensagem(
//           "Chegou: " + notificacao.request.content.title
//         );
//       }
//     );

//     const tocada = Notifications.addNotificationResponseReceivedListener(
//       (resposta) => {
//         const url = resposta.notification.request.content.data?.url;
//         setMensagem("Notificação tocada: " + (url || "sem URL"));
//       }
//     );

//     return () => {
//       recebida.remove();
//       tocada.remove();
//     };
//   }, []);

//   return (
//     <View style={styles.centro}>
//       <Text style={styles.titulo}>Ouvintes de notificações</Text>
//       <Text style={styles.texto}>{mensagem}</Text>
//       <Text style={styles.aviso}>
//         Agende uma notificação e observe a chegada e o toque.
//       </Text>
//     </View>
//   );
// }

// function ExemploCamera() {
//   const [permission, requestPermission] = useCameraPermissions();
//   const [foto, setFoto] = useState(null);
//   const camera = useRef(null);

//   async function tirarFoto() {
//     if (!camera.current) return;

//     try {
//       const imagem = await camera.current.takePictureAsync({
//         quality: 0.7,
//       });
//       setFoto(imagem.uri);
//     } catch (erro) {
//       Alert.alert("Erro", erro.message);
//     }
//   }

//   if (!permission) return <ActivityIndicator size="large" />;

//   if (!permission.granted) {
//     return (
//       <View style={styles.centro}>
//         <Text style={styles.texto}>Permita o acesso à câmera.</Text>
//         <Button title="Permitir câmera" onPress={requestPermission} />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.tela}>
//       <CameraView
//         ref={camera}
//         style={styles.camera}
//         facing="back"
//       />
//       <Button title="Tirar foto" onPress={tirarFoto} />
//       {foto && (
//         <Image
//           source={{ uri: foto }}
//           style={styles.foto}
//           resizeMode="contain"
//         />
//       )}
//     </View>
//   );
// }

// function ExemploQR() {
//   const [permission, requestPermission] = useCameraPermissions();
//   const [lido, setLido] = useState(null);

//   if (!permission) return <ActivityIndicator size="large" />;

//   if (!permission.granted) {
//     return (
//       <View style={styles.centro}>
//         <Text style={styles.texto}>Permita o acesso à câmera.</Text>
//         <Button title="Permitir câmera" onPress={requestPermission} />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.tela}>
//       <CameraView
//         style={styles.camera}
//         barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
//         onBarcodeScanned={
//           lido ? undefined : ({ data }) => setLido(data)
//         }
//       />
//       {lido ? (
//         <View style={styles.resultado}>
//           <Text style={styles.texto}>Conteúdo: {lido}</Text>
//           <Button title="Ler outro" onPress={() => setLido(null)} />
//         </View>
//       ) : (
//         <Text style={styles.texto}>
//           Aponte a câmera para um QR Code.
//         </Text>
//       )}
//     </View>
//   );
// }

// function ExemploLocalizacao() {
//   const [posicao, setPosicao] = useState(null);
//   const [erro, setErro] = useState("");

//   useEffect(() => {
//     async function buscar() {
//       try {
//         const { status } =
//           await Location.requestForegroundPermissionsAsync();

//         if (status !== 'granted') {
//           setErro("Permissão de localização negada.");
//           return;
//         }

//         const { coords } = await Location.getCurrentPositionAsync();

//         setPosicao({
//           latitude: coords.latitude,
//           longitude: coords.longitude,
//         });
//       } catch (e) {
//         setErro(e.message);
//       }
//     }

//     buscar();
//   }, []);

//   return (
//     <View style={styles.centro}>
//       <Text style={styles.titulo}>Localização atual</Text>
//       {erro ? (
//         <Text style={styles.texto}>{erro}</Text>
//       ) : posicao ? (
//         <>
//           <Text style={styles.texto}>
//             Latitude: {posicao.latitude}
//           </Text>
//           <Text style={styles.texto}>
//             Longitude: {posicao.longitude}
//           </Text>
//           <Text style={styles.texto}>
//             Coordenadas obtidas com sucesso!
//           </Text>
//         </>
//       ) : (
//         <ActivityIndicator size="large" />
//       )}
//     </View>
//   );
// }

// export default function App() {
//   const [tela, setTela] = useState("menu");

//   const exemplos = [
//     ["1. Permissões da câmera", "permissao"],
//     ["2. Notificação local", "notificacao"],
//     ["3. Notificações push", "push"],
//     ["4. Ouvintes", "ouvintes"],
//     ["5. Tirar foto", "camera"],
//     ["6. Ler QR Code", "qr"],
//     ["7. Localização", "localizacao"],
//   ];

//   return (
//     <View style={styles.container}>
//       {tela !== "menu" && (
//         <View style={styles.voltar}>
//           <Button title="Voltar ao menu" onPress={() => setTela("menu")} />
//         </View>
//       )}

//       {tela === "menu" && (
//         <ScrollView contentContainerStyle={styles.menu}>
//           <Text style={styles.titulo}>Recursos Avançados</Text>
//           <Text style={styles.texto}>
//             Atividade 14 - React Native
//           </Text>
//           {exemplos.map(([nome, id]) => (
//             <View key={id} style={styles.botao}>
//               <Button title={nome} onPress={() => setTela(id)} />
//             </View>
//           ))}
//         </ScrollView>
//       )}

//       {tela === "permissao" && (
//         <ComPermissao>
//           <View style={styles.centro}>
//             <Text style={styles.titulo}>Câmera permitida!</Text>
//           </View>
//         </ComPermissao>
//       )}
//       {tela === "notificacao" && <ExemploNotificacao />}
//       {tela === "push" && <ExemploPush />}
//       {tela === "ouvintes" && <ExemploOuvintes />}
//       {tela === "camera" && <ExemploCamera />}
//       {tela === "qr" && <ExemploQR />}
//       {tela === "localizacao" && <ExemploLocalizacao />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f7ff',
//     paddingTop: Platform.OS === 'android' ? 35 : 20,
//   },
//   tela: { flex: 1, padding: 12 },
//   menu: {
//     padding: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexGrow: 1,
//   },
//   centro: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 25,
//   },
//   titulo: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: '#153b75',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   texto: {
//     fontSize: 17,
//     color: '#26364b',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   aviso: {
//     fontSize: 14,
//     textAlign: 'center',
//     marginTop: 20,
//     color: '#555',
//   },
//   botao: { width: '100%', marginVertical: 7 },
//   voltar: { padding: 10 },
//   camera: { flex: 1, minHeight: 250 },
//   foto: { width: '100%', height: 180, marginTop: 10 },
//   resultado: { padding: 15, alignItems: 'center' },
// });



import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from 'react-native';
import * as Location from 'expo-location';

const MapView = Platform.OS !== 'web'
  ? require('react-native-maps').default
  : null;

const Marker = Platform.OS !== 'web'
  ? require('react-native-maps').Marker
  : null;

export default function App() {
  const [posicao, setPosicao] = useState(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function buscarLocalizacao() {
      try {
        const { status } =
          await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          setErro('Permissão de localização negada.');
          return;
        }

        const { coords } =
          await Location.getCurrentPositionAsync();

        setPosicao({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      } catch (e) {
        setErro(e.message);
      }
    }

    buscarLocalizacao();
  }, []);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.centro}>
        <Text style={styles.texto}>
          Abra este exemplo no Expo Go para visualizar o mapa.
        </Text>
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.centro}>
        <Text style={styles.texto}>{erro}</Text>
      </View>
    );
  }

  if (!posicao) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" />
        <Text style={styles.texto}>
          Buscando localização...
        </Text>
      </View>
    );
  }

  return (
    <MapView
      style={styles.mapa}
      showsUserLocation
      initialRegion={{
        ...posicao,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        coordinate={posicao}
        title="Você está aqui"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  mapa: { flex: 1 },
  centro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
  },
});
