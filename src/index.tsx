/* @refresh reload */
import { render } from "solid-js/web";

//import "./index.css";
//import App from "./App";
//import Bapp from "./Bapp";
import Blocks from "./Blocks";
// import Button from './Button';
import "./blocks.css";


render(() => <Blocks />, document.getElementById("root") as HTMLElement);
