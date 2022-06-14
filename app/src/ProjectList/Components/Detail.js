const Detail = (props) => {
    return (
        <div className="detail">
            <div className="card">
                <div className="card-body">
                    <div>
                        {props.project.name}
                    </div>
                </div>
                <button className="btn-close" onClick={()=>{ props.close() }}/>
            </div>
        </div>
    );
}

export default Detail;
