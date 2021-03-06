import { useHistory } from 'react-router-dom';

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import GoogleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss'
import { Button } from '../components/Button';

export function Home() {

  const history = useHistory();

  function hadleCreateRoom(){
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => { console.log(result) })

    history.push('/rooms/new');
  }

  return (
    <div id="page_auth">

      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong> Crie salas de Q&amp;A ao-vivo </strong>
        <p> Tire as dúvidas da suas audiência em tempo-real </p>
      </aside>

      <main>
        <div className="main_content">
          <img src={LogoImg} alt="LetmeAsk" />
          <button onClick={ hadleCreateRoom } className="create_room">
            <img src={GoogleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator"> ou entre em uma sala </div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>

    </div>
  )
}