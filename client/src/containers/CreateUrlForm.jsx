import { connect } from 'react-redux';
import { withFormik } from 'formik';

import CreateEventForm from '../components/CreateUrlForm/CreateUrlForm';
import { postEvent } from '../actions/createFormActions';

const FormikCreateEventForm = withFormik({
  mapPropsToValues() {
    return {
      shorturl: '',
      longurl: '',
      description: '',
      internal: false,
      password: ''
    }
  },
  handleSubmit(values, { resetForm, props }) {
    console.log(values)
    const urlSendRequestValues = {
      shorturl: values.shorturl,
      longurl: values.longurl,
      description: values.description,
      internal: values.internal,
      password: values.password
    }
    props.postEvent(urlSendRequestValues);
    resetForm();
  },
})(CreateEventForm);

export default connect(
  null,
  { postEvent }
)(FormikCreateEventForm);