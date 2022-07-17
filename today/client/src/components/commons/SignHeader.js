import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';

function SignHeader() {
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    navigate('/');
  }
  return (
    <img onClick={ onClickHandler } src={'/images/signUpHeader/signUpHeader.png'} width="100%" height="auto"/>
  )
}

export default SignHeader;