import React from 'react'
import Checkbox from "react-custom-checkbox"
import * as Icon from "react-icons/fi";

const Filter = (props) => {
    return (
        
        <div className = "checkbox" >
            <br></br>
            <Checkbox
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#0d6efd",
              alignSelf: "stretch",
            }}
          >
            <Icon.FiCheck color="white" size={20} />
          </div>
        }
        borderColor="#0d6efd"
        // borderWidth={0}
        borderRadius={20}
        style={{ overflow: "hidden" }}
        size={20}
        checked={props.value}
        onChange={props.onChange}
        label={props.label}
      />
        </div>
    )
}

export default Filter;