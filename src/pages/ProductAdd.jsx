import { Formik, Form } from 'formik';
import * as Yup from "yup";
import React from 'react'
import { Button } from 'semantic-ui-react';
import TextInput from '../utilities/TextInput';

export default function ProductAdd() {
  const Schema = Yup.object().shape({
    productName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    unitPrice: Yup.number().required('Required'),
  });

  return (
    <div>
      <h1>Product Add</h1>
      <Formik
        initialValues={{
          productName: '',
          unitPrice: '',
        }}
        validationSchema={Schema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (

          <Form >
            <TextInput name="productName" placeholder="productName" />
            <TextInput name="unitPrice" placeholder="unitPrice" />
            <Button color="green" type="submit">Submit</Button>
          </Form>
        )}
      </Formik>

    </div>
  )
}
