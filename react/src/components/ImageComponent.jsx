import frog from "../assets/img.webp"
import Header from "./Header"
import "./ImageComponent.css"


const ImageComponent = () => {
  return (
    <div>
        <h1 className="immu">Imran</h1>
        {/* <img src='/img.webp' alt="" /> */}
        <Header img={frog} />
    </div>
  )
}
export default ImageComponent