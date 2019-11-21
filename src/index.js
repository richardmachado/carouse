import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter as Router} from 'react-router-dom';
import FormikExample from "./Components/Formik";

// import Grid from "./NavBar/Grid.js";
// import Carousel from "./images/Carousel"
// import PictureCarousel from "./Carousel/PictureCarousel";
// import DiffComponents from "./Components/DiffComponents.js";
// import Buttons from "./Components/Buttons";
// import Cards from "./Components/Cards";
// import Forms from "./Components/Forms.js";
// import FormValidation from "./Components/FormValidation.js";


// all this was found at https://react-bootstrap.github.io/
// uncomment the component you want to see

function App() {
  return (
    <div className="App">

  {/* <Carousel /> */}
 
  {/* <PictureCarousel /> */}
  {/* <Grid /> */}
  {/* <DiffComponents /> */}
  {/* <Buttons /> */}
  {/* <Cards /> */}
  {/* <Forms /> */}
  {/* <FormValidation /> */}
  <FormikExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
<Router><App /></Router>, rootElement);
