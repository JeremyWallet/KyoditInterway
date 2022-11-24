import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../containers/Home';
import Header from '../../containers/Header';
import Footer from '../Footer';
import Nav from '../../containers/Nav';
import Company from '../../containers/Company';
// import SelectCompany from "../Company/SelectCompany";
import CompanyList from '../../containers/Company/companyList';

// En cours 
// import InfoCompany from '../Company/SelectCompany/infoCompany';
import InfoCompany from '../../containers/Company/infoCompany';

import Response from '../../containers/Response';
// import ImportResponse from '../../containers/Survey/surveyFile';
import CreateSurvey from '../../containers/Response/createSurvey';
import Step1 from '../../containers/Response/response1';
import Step2 from '../../containers/Response/response2';
import Step3 from '../../containers/Response/response3';
import Step4 from '../../containers/Response/response4';
import Step5 from '../../containers/Response/response5';
import Step6 from '../../containers/Response/response6';
import Step7 from '../../containers/Response/response7';
import Step8 from '../../containers/Response/response8';
import Step9 from '../../containers/Response/response9';
import Step10 from '../../containers/Response/response10';
import Step11 from '../../containers/Response/response11';
import UserProfile from '../../containers/UserProfile';
import Survey from '../../containers/Survey';
import SurveyProfil from '../../containers/Survey/surveyProfil';
import Dashboard from '../Dashboard';
import NotFound from '../NotFound';

import './styles.scss';

const App = () => {


  return (
    <div className="App">
      <Header />
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <>
          <Route path='/addCompany' element={<Company />} />
          <Route path='/infoCompany/:id' element={<InfoCompany />} />
          <Route path='/companyList' element={<CompanyList />} />
          <Route path="/response" element={<Response />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/survey/step0/:id" element={<CreateSurvey />} />
          <Route path="/survey/step1/:id" element={<Step1 />} />
          <Route path="/survey/step2/:id" element={<Step2 />} />
          <Route path="/survey/step3/:id" element={<Step3 />} />
          <Route path="/survey/step4/:id" element={<Step4 />} />
          <Route path="/survey/step5/:id" element={<Step5 />} />
          <Route path="/survey/step6/:id" element={<Step6 />} />
          <Route path="/survey/step7/:id" element={<Step7 />} />
          <Route path="/survey/step8/:id" element={<Step8 />} />
          <Route path="/survey/step9/:id" element={<Step9 />} />
          <Route path="/survey/step10/:id" element={<Step10 />} />
          <Route path="/survey/step11/:id" element={<Step11 />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/surveyProfil/:id" element={<SurveyProfil />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

// App.propTypes = {
//   isLogged: PropTypes.bool,
// };

export default App;
