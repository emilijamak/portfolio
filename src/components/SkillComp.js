import React from 'react';

const SkillComp = ({skill}) => {
    return (
        <div className="d-flex lg:flex-row flex-col overflow-hidden text-start jobs p-3 gap-4">
            <div dangerouslySetInnerHTML={{__html: skill.svg}}/>
            <div className="d-flex flex-column">
            <p className="" style={{fontWeight: 500, fontSize: '20px'}}>{skill.name}</p>
                <p className="text-muted">{skill.description}</p>
            </div>

        </div>
    );
};

export default SkillComp;