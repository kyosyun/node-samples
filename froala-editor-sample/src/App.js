import logo from './logo.svg';
import './App.css';

import FroalaEditor from 'froala-editor';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';



function App() {
  return (
    <div className="App">
      {/* <FroalaEditor/> */}

      <header className="App-header">
        <textarea></textarea>
        <p>sample</p>
        <FroalaEditorComponent/>
      </header>
    </div>
  );
}

export default App;
