import React, { useState, useEffect, } from 'react';

import { getProject } from '../Util/GenData';

import './index.css';


const Project = (props) => {
    const params = new URLSearchParams(window.location.search);
    const pid = params.has('pid') ? params.get('pid') : null;

    const [ name, setName ] = useState('');
    const [ state, setState ] = useState(0);
    const [ companyName, setCompanyName ] = useState('');

    const init = async (_pid) => {
        if (!_pid) return;
        const project = await getProject(_pid);
        setName(project.name);
        setState(project.state);
        setCompanyName(project.companyName);
    };

    useEffect(() => {
        init(pid)
    }, [pid]);

    return (
        <div className="project">
            <div className="container py-4">
                <div className="row pb-5">
                    <div className="col-12">
                        <strong style={{ fontSize:"40px" }}> Project </strong>
                    </div>
                </div>
                <div className="row pb-1">
                    <div className="col-4">
                        <strong> Project ID </strong>
                    </div>
                    <div className="col-8">
                        <input className="form-control-plaintext" value={pid} readonly/>
                    </div>
                </div>
                <div className="row pb-1">
                    <div className="col-4">
                        <strong> Name </strong>
                    </div>
                    <div className="col-8">
                        <input className="form-control" value={name} onChange={(e)=>{ setName(e.target.value) }}/>
                    </div>
                </div>
                <div className="row pb-1">
                    <div className="col-4">
                        <strong> State </strong>
                    </div>
                    <div className="col-8">
                        <select className="form-select" value={state} onChange={(e)=>{ setState(e.target.value); }}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                </div>
                <div className="row pb-1">
                    <div className="col-4">
                        <strong> Company Name </strong>
                    </div>
                    <div className="col-8">
                        <input className="form-control" value={companyName} onChange={(e)=>{ setCompanyName(e.target.value) }}/>
                    </div>
                </div>
                <div className="row pb-1">
                    <div className="col-6 pe-1">
                        <button className="btn btn-primary" style={{ width:"100%" }}> 수정 </button>
                    </div>
                    <div className="col-6 ps-1">
                        <button 
                            className="btn btn-primary"
                            style={{ width:"100%" }}
                            onClick={()=>{ window.location.href="/project-list"; }}>
                            돌아가기 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
