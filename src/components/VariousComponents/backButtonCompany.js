import React from 'react';
import { useNavigate } from 'react-router-dom';
import './button.scss';

const BackButtonCompany = () => {

    const navigate = useNavigate();
    const navigateCompanyList = () => {
        // 👇️ navigate to /
        navigate('/companyList');
    };

    return (
        <button
            className="back-button"
            type="button"
            onClick={navigateCompanyList}
        >
            Précédent
        </button>
    )
}

export default BackButtonCompany;
