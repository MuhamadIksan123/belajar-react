import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  let [number, setNumber] = useState(0);
  // const [name, setName] = useState('');
  // const [tahunLahir, setTahunLahir] = useState('');
  // const [usia, setUsia] = useState('');

  const [form, setForm] = useState({
    name: '',
    tahunLahir: '',
    usia: '',
  });

  const [error, setError] = useState('');

  const klik = () => {
    setNumber((number += 1));
    console.log(number);
  };

  const handleSubmit = () => {
    if(form.name === "") {
      setError('Field nama kosong harus diisi')
    } else if (form.tahunLahir === '') {
      setError('Field tahun lahir kosong harus diisi');
    } else {
      return setForm({ ...form, usia: 2022 - form.tahunLahir });
    }
  };

  const handleChange = (e) => {
    setError('');
    if(e.target.name === 'name') {
      if(e.target.value.length < 3) {
        setError('Minimal 3 Karakter');
      }
    }
    return setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Counter App</h1>
      <p>Nilai number saat ini {number}</p>
      <Button onClick={klik}>Click me</Button>
      <hr />
      <h1>Aplikasi Data Diri</h1>
      Nama :{' '}
      <Input
        type="text"
        value={form.name}
        name="name"
        onChange={handleChange}
      />
      <br />
      <br />
      Tahun Lahir :{' '}
      <Input
        type="number"
        value={form.tahunLahir}
        name="tahunLahir"
        onChange={handleChange}
      />
      <br />
      <br />
      Tanpa name :{' '}
      <Input
        type="number"
        value={form.tahunLahir}
        onChange={handleChange}
      />
      <br />
      <br />
      Umur : {form.usia}
      <br />
      <br />
      <Button onClick={handleSubmit}>Submit</Button>
      <p style={{ color: 'red' }}>{error}</p>
    </>
  );
}

export default App;
