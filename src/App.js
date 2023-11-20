import React from "react";
import { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers/index";
import { applyNumber, CHANGE_OPERATION, M_PLUS, MR, RESET_CE } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => dispatch({ type: M_PLUS })}
              />
              <CalcButton value={"MR"} onClick={() => dispatch({ type: MR })} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
              <CalcButton
                value={2}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
              <CalcButton
                value={3}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
              <CalcButton
                value={5}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
              <CalcButton
                value={6}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
              <CalcButton
                value={8}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
              <CalcButton
                value={9}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={(e) =>
                  dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
                }
              />
              <CalcButton
                value={"*"}
                onClick={(e) =>
                  dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
                }
              />
              <CalcButton
                value={"-"}
                onClick={(e) =>
                  dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
                }
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch({ type: RESET_CE })}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
