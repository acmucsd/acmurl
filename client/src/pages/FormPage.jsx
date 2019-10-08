import React from 'react';
import { GlobalStyle } from '../global-styles';
import CreateUrlForm from "../containers/CreateUrlForm";

const FormPage = (props) =>  {
  return (
    <div>
      <GlobalStyle/>
      <CreateUrlForm/>
    </div>
  );
}

export default FormPage;
