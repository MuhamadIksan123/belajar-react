import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SBreadCrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import Table from '../../components/TableWithAction';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrganizers } from '../../redux/organizers/actions';
import SAlert from '../../components/Alert';
import Swal from 'sweetalert2';
import { deleteData } from '../../utils/fetch';
import { setNotif } from '../../redux/notif/actions';
import { accessOrganizers } from '../../const/access';

function Organizers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const organizers = useSelector((state) => state.organizers);
  const [access, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};
    const access = { tambah: false, hapus: false, edit: false };
    Object.keys(accessOrganizers).forEach(function (key, index) {
      if (accessOrganizers[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchOrganizers());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Apa kamu yakin?',
      text: 'Anda tidak akan dapat mengembalikan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Iya, Hapus',
      cancelButtonText: 'Batal',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/cms/organizers/${id}`);
        dispatch(
          setNotif(
            true,
            'success',
            `berhasil hapus kategori ${res.data.data.name}`
          )
        );
        dispatch(fetchOrganizers());
      }
    });
  };

  return (
    <Container className="mt-3">
      <SBreadCrumb textSecound={'Organizers'} />

      {access.tambah && (
        <Button
          className={'mb-3'}
          action={() => navigate('/organizers/create')}
        >
          Tambah
        </Button>
      )}

      {notif.status && (
        <SAlert type={notif.typeNotif} message={notif.message} />
      )}

      <Table
        status={organizers.status}
        thead={['Nama', 'Aksi']}
        data={organizers.data}
        tbody={['name']}
        editUrl={access.edit ? `/organizers/edit` : null}
        deleteAction={access.hapus ? (id) => handleDelete(id) : null}
        withoutPagination
      />
    </Container>
  );
}

export default Organizers;
