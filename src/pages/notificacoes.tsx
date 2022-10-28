import Layout from '../components/template/Layout';
import { AppConsumer } from '../data/context/AppContext';
import useAppData from '../data/hook/useAppData';

export default function Notificacoes() {
  
  const {tema, alternarTema} = useAppData();
  
  return (
    <Layout 
      titulo={'Notificações'} 
      subtitulo={'Aqui você irá gerenciar as suas notificações!'}
    >
      <h3>{tema}</h3>
      <button onClick={alternarTema}>Click</button>
    </Layout>
  )
}