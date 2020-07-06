import React, { useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);

  const clickModal = (e) => {
    setModal(true);
    setModalId(e);
  };

  return (
    <div>
      {!modal && <Nav />}
      {!modal && <Header />}
      {!modal && <About />}
      {!modal && <Projects clickModal={(e) => clickModal(e)} />}
      {!modal && <Contact />}
      {modal && <Modal closeModal={() => setModal(false)} id={modalId} />}
    </div>
  );
};

export default App;
