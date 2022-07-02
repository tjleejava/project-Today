import ModifyAttachmentsCSS from './ModifyAttachments.module.css';
import { useDispatch } from 'react-redux';

function ModifyAttachments({type, inputFile,  pathInfo, title, modifyFile}) {
  const MODIFY_ATTACHMENT = 'challenges/MODIFY_ATTACHMENT';
  const dispatch = useDispatch();

  const onClickUpload = () => {
    inputFile.current.click();
  }

  const bannerOnChange = (e) => {

    const inputFile = e.target.files[0];
    const formData = new FormData();
    
    formData.append('file', inputFile);
    
    dispatch({type: MODIFY_ATTACHMENT, payload: { type: type, path: URL.createObjectURL(e.target.files[0]), formData: formData }});
  }
  return (
    <div>
      <div className={ ModifyAttachmentsCSS.imageinputarea }>
        <label>{ title }</label><br/>
        <div className={ ModifyAttachmentsCSS.imageinputbox }>
        { console.log('type : ' , type) }
        { console.log('modifyFile : ' , modifyFile)}
        { console.log(pathInfo) }
        {console.log(modifyFile[0] && modifyFile[0].hasOwnProperty('path'))}        

        
        
        { 
          (modifyFile[0] && modifyFile[0].hasOwnProperty('path'))
            ?<img src={ modifyFile[type - 1].path } className={ ModifyAttachmentsCSS.imgarea }/>
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