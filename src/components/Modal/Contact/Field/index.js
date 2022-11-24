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
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    manageChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
    value: '',
    type: 'text',
};

export default Field;