import React from 'react';
import { useNavigate } from 'react-router-dom';
import './button.scss';

const BackButton = () => {

    const navigate = useNavigate();
    // const navigateSurvey = () => {
    //     // 👇️ navigate to /
    //     navigate('/survey');
    // };

    return (
        <button
            className="back-button"
            type="button"
            // onClick={navigateSurvey}
            onClick={() => navigate(-1)}
        >
            Précédent
        </button>
    )
}
export default BackButton;

