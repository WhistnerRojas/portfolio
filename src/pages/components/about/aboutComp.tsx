import React from 'react'
import Skills from '../about/skills';

export default function AboutComp(props:any) {

console.log(props.skills)
    return (
        <div className="container-md col-xxl-8 child">
            <div className={`row ${props.flex} align-items-center g-5 py-5 mx-auto`}>
                <div className="col-10 col-sm-8 col-lg-6 mx-auto">
                    <img src={props.img} draggable='false' className="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="500" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    {props.p}
                    {props.skills && 
                        props.skills.map((stack:String, key:Number)=>{
                            <Skills keys={key} tech={stack}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}