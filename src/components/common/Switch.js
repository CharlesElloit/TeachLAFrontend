import React, { useState, useEffect } from "react";

import "styles/Switch.scss";

/**
 * Generic switch component. Props are as follows:
 * @param {boolean} [on] - whether the switch is set to the "on" position or not; optional prop, defaults to false
 * @param {function} onToggle - function to be called when switch is toggled. Has a single parameter (bool) that holds whether the switch is in the "on" position (true) or not (false)
 * @param {JSX} onImg (optional): (JSX) element to be displayed on switch body when set to "on"
 * @param {JSX} offImg (optional): (JSX) element to be displayed on switch body when set to "off"
 */

const Switch = (props) => {
  const [state, setState] = useState({
    on: !props.on ? false : props.on,
  })

  useEffect(() => {
    if(props.on !== state.on) {
      setState({...state, on: props.on})
    }
  })

  const onSwitchChange = () => {
    props.onToggle(!state.on);
    setState({...state, on: !state.on});
  };

  let switchedClass = state.on ? " switch-on" : "";

  return (
    <label className="switch">
      <input className="switch-input" type="checkbox" onChange={onSwitchChange} />
      <span className={"switch-body" + switchedClass}>
        {state.on ? props.onImg : props.offImg}
      </span>
      <span className={"switch-handle" + switchedClass}></span>
    </label>
  )
}

export default Switch;
