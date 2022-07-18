import RegistImageCSS from './RegistImage.module.css';
import {useDispatch} from 'react-redux';
import { SET_INPUT_FILE, SET_PATH } from '../../../modules/ChallengeRegistModule';

function RegistImage({imageInput, path, title, index }) {

  const dispatch = useDispatch();

  const onClickUpload = () => {
    imageInput.current.click();
  }

  const bannerOnChange = (e) => {
    dispatch({ type: SET_PATH, payload: {path: URL.createObjectURL(e.target.files[0]), index: index.current} });

    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    dispatch({type: SET_INPUT_FILE, payload: {inputFile: formData, index: index.current}});
  }
  return (
    <div className={ RegistImageCSS.imageinputarea }>
      <label>{ title }</label><br/> 
      <div className={ RegistImageCSS.imageinputbox }>
        <img src={ path }/><br></br>
        <br/>
        <button onClick={ onClickUpload }>Select a file</button>
        <input 
          type='file'
          style={{ display:' none' }}
          ref={imageInput}
          onChange={ bannerOnChange }
        />
      </div>
    </div>
  ); 
}

export default RegistImage;