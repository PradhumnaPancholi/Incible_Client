import React from "react";

export const SignUpInput = ({id,label="",keyForInput = "",...inputProps}) => (
    <div className="form-group">
        <label htmlFor={id} className="w-100 t-b">{label}</label>
        <input id={id} className="form-control" {...inputProps} />
    </div>
);
