import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('Oladapo Elijah');
  const [profession, setProfession] = useState('Software Engineer');
  const [bio, setbio] = useState(
    'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lor'
  );

  function handleShowme() {
    setName(false);
    setProfession(false);
    setbio(false);
  }

  return (
    <div className="px-20">
      <h1>Bio</h1>
      <div>
        <h2>{name}</h2>
        <p>{profession}</p>
        <p>{bio}</p>
      </div>
      <button className="px-2 bg-slate-500 mt-4" onClick={handleShowme}>
        show me
      </button>
    </div>
  );
};

export default App;
