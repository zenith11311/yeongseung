import React, { useState, useEffect, } from 'react';
import { getProjectList, } from '../Util/GenData';

import Detail from "./Components/Detail";

import './index.css';


const ProjectList = (props) => {

    const [ projects, setProjects ] = useState([]);
    const [ detail, setDetail ] = useState(null);

    const init = async () => {
        const projects = await getProjectList();
        console.log(projects);
        setProjects(projects);
    };

    useEffect(() => {
        init()
    }, []);

    return (
        <div className="project-list">
            <div className="container text-center">
                <div className="row">
                    <div className="col-4">
                        <strong> project id </strong>
                    </div>
                    <div className="col-4">
                        <strong> name </strong>
                    </div>
                    <div className="col-4">
                        <strong> options </strong>
                    </div>
                </div>
                {
                    projects.map(
                        (_, idx) => {
                            return (
                                <div key={idx} className="row py-1">
                                    <div className="col-4">
                                        <small> { _.pid } </small>
                                    </div>
                                    <div className="col-4">
                                        <small> { _.name } </small>
                                    </div>
                                    <div className="col-4">
                                        <button 
                                            className="btn btn-sm btn-primary me-1"
                                            onClick={()=>{ setDetail(_); }} > 
                                            detail
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-primary me-1"
                                            onClick={()=>{ window.location.href=`/project?pid=${_.pid}`; }} > 
                                            change 
                                        </button>
                                        <button className="btn btn-sm btn-primary me-1"> delete </button>
                                    </div>
                                    <div className="col-3" onClick={()=>{ }}>
                                    </div>
                                    <div className="col-3" onClick={()=>{  }}>
                                </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
            { detail && (<Detail project={detail} close={()=>{ setDetail(null); }}/>) }
        </div>
    );
}

export default ProjectList;
