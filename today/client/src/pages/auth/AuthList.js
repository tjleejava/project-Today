import AuthListCSS from './AuthList.module.css';
import AuthSearchbar from '../../components/auth/AuthSearchbar';
import AuthContent from '../../components/auth/AuthContent';

export default function AuthList() {

    return (
        <div>
            <AuthSearchbar/>
            <AuthContent/>
        </div>
    );
}