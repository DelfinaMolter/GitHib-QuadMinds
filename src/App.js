import './App.css';
import Header from './components/Header/Header';
import RepoList from './components/RepoList/RepoList';
import Searcher from './components/Searcher/Searcher';
import { AppContext } from './context/context';

function App() {   
  return (
    <AppContext>
    <div className="flex flex-col items-center justify-center min-h-screen text-white" >
      <Header/>
      <main className=" w-10/12 max-w-screen-lg">
        <Searcher/>
        <RepoList/>
      </main>
    </div>
    </AppContext>
  );
}

export default App;
