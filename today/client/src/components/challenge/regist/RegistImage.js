import RegistImageCSS from './RegistImage.module.css';


function RegistImage(props) {

  const {imageInput, setPath, path, setInputFile, title } = props;


  const onClickUpload = () => {
    imageInput.current.click();
  }

  const bannerOnChange = (e) => {
    setPath(URL.createObjectURL(e.target.files[0]));
    const inputfile = e.target.files[0];
    const formData = new FormData();

    formData.append('file', inputfile);

    setInputFile(formData);
  }
  return (
    <div className={ RegistImageCSS.imageinputarea }>
      <label>{ title }</label><br/>
      <div className={ RegistImageCSS.imageinputbox }>
        <img src={ path }></img><br></br>
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