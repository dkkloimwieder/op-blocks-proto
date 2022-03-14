import {
  Component,
  DEV,
  getOwner,
  For,
  createComputed,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  Accessor,
  cancelCallback,
} from "solid-js";
import { createStore } from "solid-js/store";

import "./bapp.css";

const Bapp: Component = () => {
  const [toggleSide, setToggleSide] = createSignal(true);
  let owner = getOwner();
  window._$afterUpdate = () => {
    console.log(DEV.serializeGraph(owner));
  };
  // window._$afterUpdate = () => {
  //   document.body.getElementsByTagName("pre")[0].textContent = JSON.stringify(
  //     DEV.serializeGraph(owner),
  //     null,
  //     2
  //   );
  // };
  createEffect(() => {
    console.log("toggleSide", toggleSide());
    toggleSide()
      ? document.documentElement.style.setProperty("--toggle-sidebar", "1")
      : document.documentElement.style.setProperty("--toggle-sidebar", "0");
  });
  return (
    <>
      {/* {console.log(window.location.href.includes("local"))})))}
      <div class="testing">
        <div>TESTING ENVIRONMENT!</div>
        
      </div> */}
      <div class="wrap">
        <div class="header">
          <div class="header-left">
            <div class="header-left-logo">BAPP4LIFFF</div>
          </div>
          <div class="header-right"></div>
        </div>
        <div class="content">
          <div
            class="content-sidebar"
            // style={{
            //   width: toggleSide()
            //     ? "var(--open-sidebar)"
            //     : "var(--close-sidebar)",
            // }}
          >
            <button
              class="sidebar-button"
              onclick={() => {
                setToggleSide(!toggleSide());
              }}
            >
              {toggleSide() ? "<<" : ">>"}
            </button>
            <ul>
              <li>
                <a href="#">Bapp---siiiide</a>
              </li>
            </ul>
          </div>
          <div
            class="content-main"
            // style={{
            //   width: !toggleSide()
            //     ? "calc(100% - var(--close-sidebar))"
            //     : "100%",
            // }}
          >
            <div class="content-section">Bapp---section</div>
            <div class="content-section">Bapp---section</div>
          </div>
        </div>
      </div>
      <pre />
    </>
  );
};

export default Bapp;
