import React, {useState} from 'react';

interface Props {
  onSubmit: (country: string) => void;
}

const MainForm: React.FC<Props> = (props) => {
  const [country, setCountry] = useState('');

  const gotCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value,);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(country);
    setCountry('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='d-flex border p-3 bg-light'>
        <input
          id='name'
          name='country'
          type="text"
          className='form-control me-2'
          value={country}
          placeholder='Search universities, write Country'
          required
          onChange={gotCountry}
        />
        <button className='btn btn-info'>Search</button>
      </div>
    </form>
  );
};

export default MainForm;