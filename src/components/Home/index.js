import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Contact from '../../containers/Contact';
import CookieConsent from "react-cookie-consent";
import FlashMessage from 'react-flash-message';
import '../Home/home.scss';
import HomePage from '../../images/home-page.png';
import workflow from './workflow.png';
import fast from './rapide.png';
import report from './rapport.png';

const Home = ({ isLogged, isCreated }) => {
    // Management of the opening of the contact button
    const [modalOpen, setModalOpen] = useState(false);

    // If connected redirect to survey
    if (isLogged) {
        return <Navigate to='/dashboard' />
    }
    return (
        <div className="homepage-main">
            {/* Cookie use information message */}
            <CookieConsent
                location="bottom"
                buttonText="ACCEPTER"
                cookieName="cookieKyodit"
                style={{ background: "#2B373B", textAlign: "right" }}
                buttonStyle={{ color: "white", fontSize: "13px", border: "10px", backgroundColor: "#E33E8C", borderRadius: "15px", fontWeight: "bold", marginRight: "600px" }}
                expires={1}
            > Nous utilisons des cookies pour vous offrir la meilleure expérience sur notre site.</CookieConsent>
            <div className="part-one">
                <div className="image-part-one" style={{
                    backgroundImage: `url(${HomePage})`
                }}>
                    {/* Message to indicate successful registration */}
                    {isCreated && (
                        <FlashMessage duration={10000}>
                            <div className="registration-success">
                                Compte créé avec succès
                            </div>
                        </FlashMessage>
                    )}
                    <div className="part-innov">
                        <h2 className="title">Innovative software</h2>
                        <h2 className="title">Audit & Comptabilité</h2>
                        <p className="text-innov">Solutions software innovantes de productivité pour l’expert-comptable et l’auditeur</p>
                        <div className="home-contact">
                            <button
                                className="openModalBtnContact"
                                onClick={() => {
                                    setModalOpen(true);
                                }}
                            >
                                CONTACTEZ-NOUS
                            </button>
                            {modalOpen && <Contact setOpenModalContact={setModalOpen} />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="part-two">
                <div className="ecf">
                    <h2 className="title">Kyodit ECF</h2>
                    <p>
                        L'Examen de Conformité Fiscale, créé en 2021, permet de certifier les points fiscaux de vos entreprises clientes en réalisant un chemin d’audit supervisé.
                        L’ECF permet de réduire la survenance d’un contrôle fiscal mais aussi la non-application des pénalités, et des intérêts de retard sur les points validés par le prestataire.
                    </p>
                    <p>
                        Kyodit ECF - Notre solution en ligne permet la saisie rapide des éléments de l’examen de conformité fiscale et de générer automatiquement la liasse et documents de contrôle. Déchargés de cette partie administrative, vos collaborateurs peuvent alors concentrer leur temps sur les aspects de conseil a forte valeur ajoutée.
                    </p>
                </div>
            </div>
            <div className="part-three container">
                <div className="row">
                    <div className="part-power col-md-4 xs-12">
                        <img src={workflow} alt="workflow" />
                        <h3 className="test">
                            Puissante plateforme de collaboration et de workflow
                        </h3>
                        <p>
                            Rendez la gestion de votre processus d'audit plus efficace. Créez des équipes et partagez des projets au sein de votre organisation, ce qui vous  donne agilité et contrôle.
                        </p>
                    </div>
                    <div className="part-simple col-md-4 xs-12">
                        <img src={fast} alt="fast" />
                        <div>
                            <h3>Simple & productif</h3>
                        </div>

                        <p className="text-fast-report">Via notre interface intuitive vos collaborateurs sont efficaces en un temps record. Les audits sont réalisés en un temps record grâce à l'aide apportée par notre logiciel.</p>
                    </div>
                    <div className="part-report col-md-4 xs-12">
                        <img src={report} alt="report" />
                        <h3> Rapports</h3>
                        <p className="text-fast-report">Suivez l'avancement de vos projets d'audit pour vous aider à mieux engager vos clients et vos collaborateurs. Vous décharchez vos collaborateurs de leur taches de reporting tout en ayant un état exact de l'avancement de vos projets.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;