import ModifyAttachmentsCSS from './ModifyAttachments.module.css';
import { useDispatch } from 'react-redux';
import { MODIFY_ATTACHMENT } from '../../../modules/ChallengesModule';

function ModifyAttachments({index, inputFile,  pathInfo, title, modifyFile}) {
  const dispatch = useDispatch();

  const onClickUpload = () => {
    inputFile.current.click();
  }

  const bannerOnChange = (e) => {

    const inputFile = e.target.files[0];
    const formData = new FormData();
    
    formData.append('file', inputFile);
    
    dispatch({type: MODIFY_ATTACHMENT, payload: { index: index, path: URL.createObjectURL(e.target.files[0]), formData: formData }});
  }
  return (
    <div className={ ModifyAttachmentsCSS.area }>
      <div className={ ModifyAttachmentsCSS.imageinputarea }>
        <label>{ title }</label><br/>
        <div className={ ModifyAttachmentsCSS.imageinputbox }>
        { 
          (modifyFile[index -1] && modifyFile[index -1].hasOwnProperty('path'))
            ?<img src={ modifyFile[index - 1].path } className={ ModifyAttachmentsCSS.imgarea }/>
            : 
              pathInfo && pathInfo.hasOwnProperty('savedPath') 
                ? <img src={ 'http://localhost:8888' + pathInfo.savedPath + '/'+ pathInfo.savedName + '.png' } className={ ModifyAttachmentsCSS.imgarea }/>
                : null
        }
          <br/>
          <button onClick={ onClickUpload }>Select a file</button>
          <input 
            type='file'
            style={{ display:' none' }}
            ref={inputFile}
            onChange={ bannerOnChange }
          />
        </div>
      </div>    
    </div>
  );
}

export default ModifyAttachments;