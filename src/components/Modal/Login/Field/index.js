import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import './styles.scss';

// == Composant
const Field = ({
    value,
    type,
    name,
    placeholder,
    manageChange,
}) => {
    const handleChange = (evt) => {
        manageChange(evt.target.value, name);
    };

    const inputId = `field-${name}`;

    return (
        <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
            {/* <input
                // React - state
                value={value}
                onChange={handleChange}
                // infos de base
                id={inputId}
                type={type}
                className="field-input"
                placeholder={placeholder}
                name={name}
            />

            <label
                htmlFor={inputId}
                className="field-label"
            >
                {placeholder}
            </label> */}
            <Form.Group className="mb-3">
                <Form.Control
                    // React - state
                    value={value}
                    onChange={handleChange}
                    // infos de base
                    id={inputId}
                    type={type}
                    className="field-input"
                    placeholder={placeholder}
                    name={name} />
            </Form.Group>
        </div>
    );
};

Field.propTypes = {
    /** text used as value for the input */
    value: PropTypes.string,
    /** type of the input */
    type: PropTypes.string,
    /** text used as name for the input (and also used as id, with a prefix) */
    name: PropTypes.string.isRequired,
    /** text used as placeholder and label */
    placeholder: PropTypes.string.isRequired,
    /** called when onChange event is received by the input, two parameters :
     * - new value
     * - name
     */
    manageChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
    value: '',
    type: 'text',
};

// == Export
export default Field;