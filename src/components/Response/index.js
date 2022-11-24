import React, { useEffect, useState } from 'react';
import { Navigate, NavLink } from "react-router-dom";
import http from '../../api/http-common';
import store from '../../store';
import FlashMessage from 'react-flash-message';
import { Form, Col } from 'react-bootstrap';
import './response.scss';

const Response = ({
  isLogged,
  companySelect,
  setCompanySelect,
  handleResponse,
  missingClientId,
  surveyId
}) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async () => {
    const company = await http.get('/company/listMyCompanies', {
      headers: {
        Authorization: `Bearer ${store.getState().auth.token}`,
      },
    });
    setCompanies(company.data.data);
    console.log(company.data.data);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleResponse();
  };

  //If the user is not logged in, redirection to the home page
  if (!isLogged) {
    return <Navigate replace to="/" />;
  }
  return (
    <div className="main-response">
      <div className="new-response-tittle">
        <h3>Nouvel ECF</h3>
      </div>
      <div className="questionnaire-body">
        <Form className="response-select-one" onBlur={handleSubmit}>
          {/* Choice of the company */}
          <div className="company-select">
            <Col xs="auto" lg="auto" className="my-1 select-survey">
              <h4>
                Choix de la société
              </h4>
              <Form.Select
                aria-activedescendant="ID_option_selectionnée"
                className="select-company"
                value={companySelect}
                onBlur={(event) => {
                  console.log(event.currentTarget.value);
                  setCompanySelect({ value: event.target.value });
                }}
              >
                <option value="1-10" defaultValue>Veuillez choisir</option>
                {
                  companies.map((company) => (
                    // Map to display all companies
                    <option className="option-company" key={company.id} value={company.id}>
                      #{company.id} {company.cname} Siret: {company.siret}</option>
                  ))
                }
              </Form.Select>
              {/* If the user has not chosen a company */}
              {missingClientId && (
                <FlashMessage duration={8000}>
                  <h3 className="">Veuillez sélectionner une société</h3>
                </FlashMessage>
              )}
              <h2>{surveyId}</h2>
            </Col>
          </div>
        </Form>
        <div className="step-button">
          <NavLink className="back-step" to={`/survey`}>Précédent</NavLink>
          {surveyId > 0 && (
            <NavLink className="next-step" to={`/survey/step0/${surveyId}`}>Suivant</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Response;
