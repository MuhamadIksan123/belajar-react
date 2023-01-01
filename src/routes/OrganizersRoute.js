import { Route, Routes } from 'react-router-dom';

import Organizers from '../pages/organizers';
// import Create from '../pages/categories/create';
// import Edit from '../pages/categories/edit';

export function OrganizersRoute() {
  return (
    <Routes>
      <Route path="/" element={<Organizers />} />
      {/* <Route path="/create" element={<Create />} />
      <Route path="/edit/:categoryId" element={<Edit />} /> */}
    </Routes>
  );
}
