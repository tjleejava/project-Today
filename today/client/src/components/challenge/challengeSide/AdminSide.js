import AdminSideCSS from './AdminSide.module.css';

function AdminSide() {

  return (
    <div className={ AdminSideCSS.content }>
        <button className={ AdminSideCSS.authBtn }>챌린지 삭제</button><br/><br/>
    </div>
  );
};

export default AdminSide;