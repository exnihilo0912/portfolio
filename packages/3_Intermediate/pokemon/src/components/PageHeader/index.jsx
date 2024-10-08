import { useNavigate } from 'react-router-dom';

import Button from '../Button';

import './index.css';


export default function PageHeader() {
  const navigate = useNavigate();
  const isRootPage = window.location.href.replace(/https?:\/\//, '').split('/').length <= 2;
  return (
    <header className="page__header">
      {!isRootPage && (<Button onClick={() => navigate(-1)}>⬅</Button>)}
      <Button>Action</Button>
    </header>
  );
}