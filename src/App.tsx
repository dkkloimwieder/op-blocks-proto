import {
  Component,
  For,
  createComputed,
  createSignal,
  onCleanup,
  Accessor,
  DEV,
  getOwner,
} from "solid-js";
import { createStore } from "solid-js/store";

import { startOfWeek, addDays } from "date-fns";
import "the-new-css-reset/css/reset.css";
import styles from "./App.module.css";
import "./index.css";
type Event = {
  start: number; //Date() or string?
  end: number;
  color: number; //remove ui?/display?-> object
  list: string[]; //remove content?-> object
  // title: string;
  // tags: string[];
  //id: string;
};

const getMonth = (month: number, year: number) => {
  const start = startOfWeek(new Date(year, month, 1), { weekStartsOn: 0 });
  const weeks = [];
  for (let i = 0; i < 1; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      week.push(addDays(start, i * 7 + j));
    }
    weeks.push(week);
  }
  return weeks;
};
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const genEvents = (): Event[] => {
  const events: Event[] = [];

  const weeks = getMonth(3, 2022);
  for (let i = 0; i < 500; i++) {
    let start = Math.floor(Math.random() * 7) + 1;
    let end = Math.min(
      Math.floor(Math.random() * (7 - start) + start)
      //Math.floor(Math.random() * (7 - start) + start)
    );
    // let dateList = [];
    // if (end === start) {
    //   dateList.push(`${weekdays[start - 1]}`);
    //   dateList.push(`${weeks[0][start - 1].toISOString().slice(5, 10)}`);
    // } else {
    //   dateList.push(`${weekdays[start - 1]}->${weekdays[end - 1]}`);
    //   // dateList.push(
    //   //   `${weeks[0][start - 1]?.toISOString().slice(5, 10)}->${weeks[0][end - 1]
    //   //     ?.toISOString()
    //   //     .slice(5, 10)}`
    //   // );
    // }
    // for (let j = 1; j < Math.floor(Math.random() * 3) + 1; j++) {
    //   dateList.push(j.toString());
    // }
    events.push({
      start,
      end,
      color: 1, //Math.floor(Math.random() * 25),
      list: [`${weekdays[start - 1]}`], //dateList,
    });
  }
  return events;
};
const eArr = genEvents();
const App: Component = () => {
  const [state, setState] = createStore({
    events: eArr,
  });

  const onEventClick = (event: any) => {
    const idx = state.events.indexOf(event);
    setState(
      "events",
      idx,
      "list",
      event.list.concat(`${event.list.length + 1}`)
    );
    // setState("events", idx, "color", event.color + 1);
  };

  const deleteHandler = (props: { event: Event; idx: Accessor<number> }) => {
    const { event, idx: i } = props;
    const idx = state.events.indexOf(event);
    setState("events", idx, "list", (e) => [
      ...e.slice(0, i()),
      ...e.slice(i() + 1),
    ]);
  };
  const Delete = (event: Event, i: number) => (
    <button onClick={[deleteHandler, event, i]}>&#x1F7AC</button>
  );
  let owner = getOwner();
  window._$afterUpdate = () => {
    console.log(DEV.serializeGraph(owner));
  };
  // const createStyles = (event: any) => {
  //   const [style, setStyle] = createSignal();
  //   createComputed(() => {
  //     // const t = setTimeout(() =>
  //     //   setStyle({
  //     //     ...(style() as object),
  //     //     opacity: 1,
  //     //     transition: "height .2s ease, opacity .2s ease-in",
  //     //   })
  //     // );

  //     setStyle({
  //       // opacity: 0.6,
  //       order: event.end - event.start,
  //       "grid-column": `${event.start} / ${event.end + 1}`,
  //       "grid-row": `span ${event.list.length}`,
  //       height: `calc(${event.list.length * 1.6}rem + ${
  //         (event.list.length - 1) * 0.25
  //       }rem)`,
  //       background: `black`,
  //       //background: "hsla(0, 0%, 0%, 0.9)",
  //       // "linear-gradient(hsla(220deg, 40%, 20%,.7), hsla(" +
  //       // 137.5 * 23 +
  //       // 32 +
  //       // "deg, 70%, 20%,.8))",
  //       display: "flex",
  //       "flex-direction": "row",
  //       border: 0,
  //       //border: "2px solid rgba(255,255,255,.6)",
  //       //"border-radius": "10px",
  //       //"box-shadow": "0 0 5px rgba(255,255,255,.2)",
  //     });
  //     // onCleanup(() => clearTimeout(t));
  //   });
  //   return style;
  // };

  return (
    <div
      class="container"
      style={{
        background:
          "linear-gradient(hsl(220deg, 70%, 60%), hsl(3025deg, 70%, 60%))",
        "min-height": "100vh",
        height: "100%",
        width: "100%",
        padding: ".5rem",
      }}
    >
      <div
        class="row"
        style={{
          display: "grid",
          "grid-template-columns": "repeat(7, 1fr)",

          "grid-auto-flow": "dense",
          "grid-auto-rows": "minmax(auto)",
          "grid-gap": ".25rem",
        }}
      >
        <For each={state.events}>
          {(event) => {
            //const getStyles = createStyles(event);
            return (
              <div
                class="title"
                style={{
                  order: event.end - event.start,
                  "grid-column": `${event.start} / ${event.end + 1}`,
                  "grid-row": `span ${event.list.length}`,
                  height: `calc(${event.list.length * 1.6}rem + ${
                    (event.list.length - 1) * 0.25
                  }rem)`,
                  // background: `black`,
                  // //background: "hsla(0, 0%, 0%, 0.9)",
                  // // "linear-gradient(hsla(220deg, 40%, 20%,.7), hsla(" +
                  // // 137.5 * 23 +
                  // // 32 +
                  // // "deg, 70%, 20%,.8))",
                  // display: "flex",
                  // "flex-direction": "row",
                  // border: 0,
                }}
              >
                {/* style={getStyles()}> */}
                {/* style={{
                   "grid-column": `${event.start} / ${event.end}`,
                   "grid-row": `span ${event.list.length}`,
                   height: `calc(${event.list.length * 50}px + ${
                     (event.list.length - 1) * 5
                   }px)`,
                   display: "flex",
                   "flex-direction": "row",
                 }}
               > */}
                {/* <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    "font-size": "1.5rem",
                  }}
                  onClick={[onEventClick, event]}
                >
                  <b>+</b>
                </button> */}
                <div
                  style={{
                    display: "flex",
                    flex: "1 1 auto",
                    "flex-direction": "column",
                    "justify-content": "space-evenly",
                    color: "white",
                  }}
                  data-customtooltip={event.list[0]}
                >
                  {/* <For each={event.list}>
                    {(i, idx) => {
                      return (
                        <> */}
                  {/* <div class={styles.tooltip}>
                    <span class={styles.tooltiptext}>blah blah blah</span>
                    <div class={styles.item}> */}
                  {event.list[0]}
                  {/* {i} */}
                  {/* <input
                            class="listinput"
                            type="text"
                            value={i}
                            onChange={(e) => {
                              setState(
                                "events",
                                state.events.indexOf(event),
                                "list",
                                (l) => [
                                  ...l.slice(0, idx()),
                                  e.target.value,
                                  ...l.slice(idx() + 1),
                                ]
                                );
                            }}
                          ></input> */}
                  {/* <button
                            onClick={[deleteHandler, { event, idx }]}
                            style={{
                              background: "rgba(0,0,0,0)",
                              border: "none",
                              color: "rgba(255,255,255,.5)",
                              float: "right",
                            }}
                          >
                          &#x1F7AC
                        </button> */}
                  {/* </div> */}
                  {/* </div> */}
                  {/* </>
                      );
                    }}
                  </For> */}
                </div>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default App;
