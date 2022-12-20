import { FormLabel } from "components/ContactForm/ContactForm.styled"
import PropTypes from 'prop-types'

export const Filter = ({value, onInputChange}) => {
    return (
        <FormLabel>Find contacts by name
            <input type="text" value={value} onChange={ onInputChange } />
        </FormLabel>
    )
}


Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onInputChange: PropTypes.func
}