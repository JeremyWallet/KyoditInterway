import React from 'react';
import { useParams } from "react-router-dom";
import './pagination.scss';

const Pagination = () => {

    const params = useParams();
    const surveyId = params.id

    return (
        <div className="page-header">
            <ul id="pagination">
                {/* <li><a href={`/survey/step1/${surveyId}`} >Précédent</a></li> */}
                <li><span>Étape</span></li>
                <li><a href={`/survey/step0/${surveyId}`} title="step0">0</a></li>
                <li><a href={`/survey/step1/${surveyId}`} title="step1">1</a></li>
                <li><a href={`/survey/step2/${surveyId}`} title="step2">2</a></li>
                <li><a href={`/survey/step3/${surveyId}`} title="step2">3</a></li>
                <li><a href={`/survey/step4/${surveyId}`} title="step4">4</a></li>
                <li><a href={`/survey/step5/${surveyId}`} title="step5">5</a></li>
                <li><a href={`/survey/step6/${surveyId}`} title="step6">6</a></li>
                <li><a href={`/survey/step7/${surveyId}`} title="step7">7</a></li>
                <li><a href={`/survey/step8/${surveyId}`} title="step8">8</a></li>
                <li><a href={`/survey/step9/${surveyId}`} title="step9">9</a></li>
                <li><a href={`/survey/step10/${surveyId}`} title="step10">10</a></li>
                <li><a href={`/survey/step11/${surveyId}`} title="step11">11</a></li>
                {/* <li><a href={`/survey/step0/${surveyId}`}>Suivant</a></li> */}
            </ul>
        </div>
    )
}

export default Pagination