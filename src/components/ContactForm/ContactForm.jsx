import { Formik, Field, ErrorMessage } from "formik"
import { ContactsForm, FormLabel } from "./ContactForm.styled";
import * as yup from 'yup';
import PropTypes from 'prop-types'

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required().positive().integer(),
})

const initialValues = {
    name: "",
    number: ""
}

export const ContactForm = ({onFormSubmit}) => {
    const hendleSubmit = (values, {resetForm}) => {
        onFormSubmit(values);
        resetForm();
        }
    return (
      
        <Formik initialValues={initialValues } validationSchema={schema} onSubmit={hendleSubmit}>
        <ContactsForm autoComplete="off">
            <FormLabel htmlFor="name">Name
                    <Field type="text" name="name" />
                <ErrorMessage name="name" component="div"/>    
            </FormLabel>
                
            <FormLabel htmlFor="number">Number
                    <Field type="tel" name="number"/>   
                     <ErrorMessage name="number" component="div"/>   
            </FormLabel>
            <button type="submit">Add contact</button>
        </ContactsForm>
     </Formik>
)

}


ContactForm.propTypes = {
    onFormSubmit: PropTypes.func,
}