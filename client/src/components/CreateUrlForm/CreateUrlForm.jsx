import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Select, Checkbox } from 'antd';

import './style.less';

const { Option } = Select;
const { TextArea } = Input;

const CreateUrlForm = props => {
  return (
    <div className="create-url-form">
      <div className="create-url-form-wrapper">
        <h1 className="subtitle">[ADMIN ONLY] Create an Url</h1>
        <form onSubmit={props.handleSubmit}>
        <Form.Item label="Url to Redirect to (include http:// or https://)">
            <Input
              name="longurl"
              className="input-box"
              value={props.values.longurl}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              autoComplete="long-url"
              placeholder="https://someverylong.website/that/has/a/long/path"
            />
          </Form.Item>
          <Form.Item label="Short Url to Use ie (acmurl.com/<your_url>)">
            <Input
              name="shorturl"
              className="input-box"
              value={props.values.shorturl}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              autoComplete="short-url"
              placeholder="simple"
            />
          </Form.Item>
          <Form.Item label="Description of URL (What this url redirects to)">
            <Input
              name="description"
              className="input-box"
              value={props.values.description}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              autoComplete="url-description"
              placeholder="What the Short URL is (public facing)"
            />
          </Form.Item>
          <Form.Item label="Admin Password">
            <Input
              name="password"
              type="password"
              className="input-box"
              value={props.values.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              autoComplete="current-password"
            />
          </Form.Item>
          <Form.Item label="Internal Link? (All non-internal links will be displayed live on acmurl.com)">
            <Checkbox name="internal" checked={props.values.internal} onChange={props.handleChange}/>
          </Form.Item>
          
         <br/>
          <Button type="primary" htmlType="submit" className="save-button">
            Add Url
          </Button>
        </form>
      </div>
    </div>
  );
};

CreateUrlForm.propTypes = {
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.object.isRequired,
};

export default CreateUrlForm;