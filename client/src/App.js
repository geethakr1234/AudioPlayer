import { useState } from 'react';
import { FileUploader } from './components/FileUploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Preview } from './components/Preview';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'


function App() {

  const [files, setFiles] = useState([]);

  const onSuccess = (savedFiles) => {
    setFiles(savedFiles)
  };

  return (
    <>
      <BrowserRouter basename='/'>
        <Link to='/upload'>Upload</Link>
        <br />
        <Link to='/play'>Play</Link>
        <br />
        <br />
        <Routes>
          <Route exact path='/' element={<FileUploader onSuccess={onSuccess} />} />
          <Route exact path='/upload' element={<FileUploader onSuccess={onSuccess} />} />
          <Route exact path='/play' element={<Preview files={files} />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
