import Image from 'material-ui-image';

function ImageComponent({src}){
    return(
        <Image
            imageStyle={{width: "auto", height:"auto", maxWidth: "100%", position: "relative"}}
            style={{paddingTop: "0"}}
            src={src}
            alt="Logotipo Xtrategie"
        />
    )
}

export default ImageComponent;