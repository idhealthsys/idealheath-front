import React from "react";

export default function useForm() {
  
  const [value, setValue] = React.useState("");

  function onChange(event : React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }


  return { value, setValue, onChange };
}
