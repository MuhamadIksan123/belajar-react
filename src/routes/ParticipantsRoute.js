import { Route, Routes } from 'react-router-dom';

import Participants from '../pages/participants';
// import Create from '../pages/categories/create';
// import Edit from '../pages/categories/edit';

export function ParticipantsRoute() {
  return (
    <Routes>
      <Route path="/" element={<Participants />} />
      {/* <Route path="/create" element={<Create />} />
      <Route path="/edit/:categoryId" element={<Edit />} /> */}
    </Routes>
  );
}
