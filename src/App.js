import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import {
  CHANGE_OPERATION,
  CLEAR,
  MEMORY_PLUS,
  MEMORY_RECALL,
  MEMORY_CLEAR,
  EQUAL,
  typeToScreen,
  C,
} from "./actions";

function App() {
  const [state, dispatchNumber] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.screen} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="ram">
                <b>Ram:</b> {state.ram}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => dispatchNumber({ type: MEMORY_PLUS })}
              />
              <CalcButton
                value={"MR"}
                onClick={() => dispatchNumber({ type: MEMORY_RECALL })}
              />
              <CalcButton
                value={"MC"}
                onClick={() => dispatchNumber({ type: MEMORY_CLEAR })}
              />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={(e) => dispatchNumber(typeToScreen(e.target.value))}
              />
              <CalcButton
                value={2}
                onClick={(e) => dispatchNumber(typeToScreen(e.target.value))}
              />
              <CalcButton
                value={3}
                onClick={(e) => dispatchNumber(typeToScreen(e.target.value))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={(e) => dispatchNumber(typeToScreen(e.target.value))}
              />
              <CalcButton
                value={5}
                onClick={(e) => dispatchNumber(typeToScreen(e.target.value))}
              />
              <CalcButton
                value={6}
                onClick={(e) => dispatchNumber(typeToScreen(e.target.value))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={(e) => dispatchNumber(typeToScreen(e.target.value))}
              />
              <CalcButton
                value={8}
                onClick={(e) => dispatchNumber(typeToScreen(e.target.value))}
              />
              <CalcButton
                value={9}
                onClick={(e) => dispatchNumber(typeToScreen(e.target.value))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={0}
                onClick={(e) => dispatchNumber(typeToScreen(e.target.value))}
              />
              <CalcButton value={"."} />
              <CalcButton
                value={"="}
                onClick={() => dispatchNumber({ type: EQUAL })}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={(e) =>
                  dispatchNumber({
                    type: CHANGE_OPERATION,
                    payload: e.target.value,
                  })
                }
              />
              <CalcButton
                value={"-"}
                onClick={(e) =>
                  dispatchNumber({
                    type: CHANGE_OPERATION,
                    payload: e.target.value,
                  })
                }
              />
              <CalcButton
                value={"*"}
                onClick={(e) =>
                  dispatchNumber({
                    type: CHANGE_OPERATION,
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className="row">
              <CalcButton
                value={"/"}
                onClick={(e) =>
                  dispatchNumber({
                    type: CHANGE_OPERATION,
                    payload: e.target.value,
                  })
                }
              />

              <CalcButton
                value={"CE"}
                onClick={() => dispatchNumber({ type: CLEAR })}
              />
              <CalcButton
                value={"C"}
                onClick={(e) =>
                  dispatchNumber({ type: C, payload: e.target.value })
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
