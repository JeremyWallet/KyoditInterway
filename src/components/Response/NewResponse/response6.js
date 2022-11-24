import React, { useEffect, useState } from 'react';
import { NavLink, useParams, Navigate } from "react-router-dom";
import store from '../../../store';
//import of the config file
import IDDepreciationRules from '../../../config/response';
//import of the API config file
import http from '../../../api/http-common';
import Pagination from './pagination';
import BackButton from '../../VariousComponents/backButton';
import { Form, Col, InputGroup } from 'react-bootstrap';
import './style.scss';

const Response6 = ({
    isLogged,
    handleResponse6,
    setResponseCompliant,
    setResponseSurveyId,
    setResponseNumberQuestion,
    setResponseSubQuestion,
    optionalText1,
    file1,
}) => {

    console.log(IDDepreciationRules);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleResponse6();
    };

    //Constant to get the survey id from the url
    const params = useParams();
    const surveyId = params.id;

    //Definition of state variables / access function
    const [data0, setData0] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    const [data6, setData6] = useState([]);
    const [data7, setData7] = useState([]);
    const [data8, setData8] = useState([]);

    useEffect(() => {
        getInfoSurvey();
    }, []);

    //Calls from the API
    const getInfoSurvey = async () => {
        const info = await http.get(`/survey/getSurveyResponses/${surveyId}`, {
            headers: {
                Authorization: `Bearer ${store.getState().auth.token}`,
            },
        })

        //Fill object data with result from API
        const questDepreciationRules = info.data.responses[IDDepreciationRules];
        console.log(questDepreciationRules);
        //[]corresponds to the return of the api
        setData0(questDepreciationRules[0]);
        setData1(questDepreciationRules[1]);
        setData2(questDepreciationRules[2]);
        setData3(questDepreciationRules[3]);
        setData4(questDepreciationRules[4]);
        setData5(questDepreciationRules[5]);
        setData6(questDepreciationRules[6]);
        setData7(questDepreciationRules[7]);
        setData8(questDepreciationRules[8]);
    }

    //Protective code if user not logged in
    if (!isLogged) {
        return <Navigate to='/' />
    }

    //convert data from server to data used in front end 
    const Conform = ({ id, name }) => {
        return (
            <>
                <input id={id} name={name} type="radio" value="1" defaultChecked />
                <label htmlFor={id}>Conforme</label>
            </>
        )
    }
    const Conform1 = ({ id, name }) => {
        return (
            <>
                <input id={id} name={name} type="radio" value="1" />
                <label htmlFor={id}>Conforme</label>
            </>
        )
    }
    const NotConform = ({ id, name }) => {
        return (
            <>
                <input id={id} name={name} type="radio" value="2" defaultChecked />
                <label htmlFor={id}>Non conforme</label>
            </>
        )
    }
    const NotConform1 = ({ id, name }) => {
        return (
            <>
                <input id={id} name={name} type="radio" value="2" />
                <label htmlFor={id}>Non conforme</label>
            </>
        )
    }

    const Yes = ({ id, name }) => {
        return (
            <>
                <input id={id} name={name} type="radio" value="1" defaultChecked />
                <label htmlFor={id}>Oui</label>
            </>
        )
    }

    const Yes2 = ({ id, name }) => {
        return (
            <>
                <input id={id} name={name} type="radio" value="1" />
                <label htmlFor={id}>Oui</label>
            </>
        )
    }

    const No = ({ id, name }) => {
        return (
            <>
                <input id={id} name={name} type="radio" value="2" defaultChecked />
                <label htmlFor={id}>Non</label>
            </>
        )
    }

    const No2 = ({ id, name }) => {
        return (
            <>
                <input id={id} name={name} type="radio" value="2" />
                <label htmlFor={id}>Non</label>
            </>
        )
    }

    //This page allows you to fill in page 6 of the survey and modify it
    //Each entry updates the information in the db
    return (
        <div className="main-response">
            <div className="tittle-new-survey">
                <h3>Étape 6</h3>
            </div>
            <div className="questionnaire-body">
                <Pagination />
                {/* Question 6 */}
                <div className="response">
                    <Form className="response-select-one" onBlur={handleSubmit}>
                        <Col xs="auto" lg="auto" className="my-1 select-survey" >
                            {/* To display or not the items according to the value
                            .qText provides the retrieved value of the aPI */}
                            {data0.qText === "checked" && (
                                <input type="checkbox" name="checkBox2" value="checked" id="compliant6" defaultChecked
                                    onChange={(event) => {
                                        if (document.getElementById("compliant6").checked) {
                                            // The elements that are requested by the back for the insertion or modification
                                            setResponseCompliant({ value: event.target.value, type: 'checkboxSimple' });
                                            setResponseSurveyId(surveyId);
                                            setResponseNumberQuestion('6');
                                            setResponseSubQuestion('0');
                                        }
                                        else {
                                            setResponseCompliant({ value: 'notChecked', type: 'checkboxSimple' });
                                            setResponseSurveyId(surveyId);
                                            setResponseNumberQuestion('6');
                                            setResponseSubQuestion('0');
                                        }
                                    }}
                                />
                            )}
                            {data0.qText !== "checked" && (
                                <input type="checkbox" value="checked" id="compliant6"
                                    onChange={(event) => {
                                        if (document.getElementById('compliant6').checked) {
                                            setResponseCompliant({ value: event.target.value, type: 'checkboxSimple' });
                                            setResponseSurveyId(surveyId);
                                            setResponseNumberQuestion('6');
                                            setResponseSubQuestion('0');
                                        }
                                        else {
                                            setResponseCompliant({ value: 'notChecked', type: 'checkboxSimple' });
                                            setResponseSurveyId(surveyId);
                                            setResponseNumberQuestion('6');
                                            setResponseSubQuestion('0');
                                        }
                                    }}
                                />
                            )}
                            <label htmlFor="compliant6">Veuillez cocher la case si cette partie est non applicable</label>
                            <hr className="separation" />
                            <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect">
                                <h4>#6 Règles de détermination des amortissements et leur traitement fiscal</h4>
                            </Form.Label>
                        </Col>
                        <Col xs="auto" lg="auto" className="my-1 select-survey" >
                            <InputGroup className="compliant"
                                onClick={(event) => {
                                    setResponseCompliant({ value: event.target.value, type: 'checkboxConform' });
                                    setResponseSurveyId(surveyId);
                                    setResponseNumberQuestion('6');
                                    setResponseSubQuestion('1');
                                }}
                            >
                                <div>
                                    {data1.qText === '1' && (<Conform id="conform6" name="6" />)}
                                    {data1.qText !== '1' && (<Conform1 id="conform6" name="6" />)}
                                </div>
                                <div>
                                    {data1.qText === '2' && (<NotConform id="conform6" name="6" />)}
                                    {data1.qText !== '2' && (<NotConform1 id="conform6" name="6" />)}
                                </div>
                            </InputGroup>
                            <hr className="separation" />
                        </Col>
                        <Col xs="auto" lg="auto" className="my-1 select-survey" >
                            <Form.Group className="mb-3  file-to-attach">
                                <h5>Fichier(s) à joindre si nécessaire</h5>
                                <Form.Control id={surveyId} value={file1} type="file" multiple
                                    onChange={(event) => {
                                        setResponseCompliant({ value: event.target.value, type: 'file' });
                                        setResponseSurveyId(surveyId);
                                        setResponseNumberQuestion('6');
                                        setResponseSubQuestion('2');
                                    }}
                                />
                                {/* <label htmlFor="">{data2.qText}</label> */}
                            </Form.Group>
                            <hr className="separation" />
                        </Col>
                        <Col xs="auto" lg="auto" className="my-1 select-survey" >
                            <label className="amount-label" htmlFor="total-amount-6">Montant total déclaré</label>
                            <input className="amount-input" type="text" id="total-amount" defaultValue={data3.qText}
                                onBlur={(event) => {
                                    setResponseCompliant({ value: event.target.value, type: 'text' });
                                    setResponseSurveyId(surveyId);
                                    setResponseNumberQuestion('6');
                                    setResponseSubQuestion('3');
                                }} />
                            <hr className="separation" />
                        </Col>
                        <Col xs="auto" lg="auto" className="my-1 select-survey" >
                            <label className="amount-label" htmlFor="amount-reviewed-6">Montant examiné dans le cadre de l’ECF</label>
                            <input className="amount-input" type="text" id="amount-reviewed-6" defaultValue={data4.qText}
                                onBlur={(event) => {
                                    setResponseCompliant({ value: event.target.value, type: 'text' });
                                    setResponseSurveyId(surveyId);
                                    setResponseNumberQuestion('6');
                                    setResponseSubQuestion('4');
                                }} />
                            <hr className="separation" />
                        </Col>
                        <Col xs="auto" lg="auto" className="my-1 select-survey" >
                            <div className="part-sub-questions">
                                <fieldset className="compliant"
                                    onClick={(event) => {
                                        setResponseCompliant({ value: event.target.value, type: 'checkboxYesNo' });
                                        setResponseSurveyId(surveyId);
                                        setResponseNumberQuestion('6');
                                        setResponseSubQuestion('5');
                                    }}
                                >
                                    <h5>Anomalies relevées ? </h5>
                                    <div>
                                        {data5.qText === '1' && (<Yes id="yes6.1" name="6.1" />)}
                                        {data5.qText !== '1' && (<Yes2 id="yes6.1" name="6.1" />)}
                                    </div>
                                    <div>
                                        {data5.qText === '2' && (<No id="no6.1" name="6.1" />)}
                                        {data5.qText !== '2' && (<No2 id="no6.1" name="6.1" />)}
                                    </div>
                                </fieldset>
                            </div>
                            <hr className="separation" />
                        </Col>
                        <Col xs="auto" lg="auto" className="my-1 select-survey" >
                            <div className="text-anomalies">
                                <h5>Présenter la méthode ou les critères retenus par l’entreprise :</h5>
                                <textarea rows="2" cols="130" type="text" value={optionalText1} defaultValue={data6.qText}
                                    onBlur={(event) => {
                                        setResponseCompliant({ value: event.target.value, type: 'text' });
                                        setResponseSurveyId(surveyId);
                                        setResponseNumberQuestion('6');
                                        setResponseSubQuestion('6');
                                    }}
                                >
                                </textarea>
                            </div>
                            <hr className="separation" />
                        </Col>
                        <Col xs="auto" lg="auto" className="my-1 select-survey" >
                            <div className="text-anomalies">
                                <h5>Type d'anomalies relevées :</h5>
                                <textarea rows="2" cols="130" type="text" value={optionalText1} defaultValue={data7.qText}
                                    onBlur={(event) => {
                                        setResponseCompliant({ value: event.target.value, type: 'text' });
                                        setResponseSurveyId(surveyId);
                                        setResponseNumberQuestion('6');
                                        setResponseSubQuestion('7');
                                    }}
                                >
                                </textarea>
                            </div>
                            <hr className="separation" />
                        </Col>
                        <Col xs="auto" lg="auto" className="my-1 select-survey" >
                            <label className="amount-label" htmlFor="amount-anomalies-6">Montant des anomalies</label>
                            <input className="amount-input" type="text" id="amount-anomalies-6" defaultValue={data8.qText}
                                onBlur={(event) => {
                                    setResponseCompliant({ value: event.target.value, type: 'text' });
                                    setResponseSurveyId(surveyId);
                                    setResponseNumberQuestion('6');
                                    setResponseSubQuestion('8');
                                }} />
                        </Col>
                    </Form>
                </div>
                <div className="step-button">
                    <BackButton />
                    <NavLink className="next-step" to={`/survey/step7/${surveyId}`}>Suivant</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Response6;