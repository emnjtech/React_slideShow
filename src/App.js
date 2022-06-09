import imagesApi from "./imagesApi";
import ImageSlider from "./imageSlider";


function App() {
  return (
    <div className="wrapper"> 
      <ImageSlider images={imagesApi} />
    
   
    </div>
  );
}

export default App;
