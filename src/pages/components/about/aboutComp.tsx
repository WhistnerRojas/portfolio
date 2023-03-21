import React, {useState} from 'react'
import Skills from '../about/skills';
import StackData from '../../../assets/techStack';

export default function AboutComp(props:any) {

    const [open, setOpen] = useState(false);
    const [currentCollapse, setCurrentCollapse] = useState<String | null>(null)

    const techData = StackData.data.techStack

    const handleCollapse = (e:React.MouseEvent)=>{
        const target = e.currentTarget

            // currentCollapse === e.currentTarget.innerHTML && setOpen(false)
            // if(currentCollapse !== e.currentTarget.innerHTML) {
                setOpen(!open) 
                setCurrentCollapse(target.innerHTML)
            // }
    }

    return (
        <div className="container-md col-xxl-8 child">
            <div className={`row ${props.flex} align-items-center g-5 py-5 mx-auto`}>
                <div className="col-10 col-sm-8 col-lg-6 mx-auto">
                    <img src={props.img} draggable='false' className="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="500" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    {props.skills === true ? techData.map((stack, keys)=>{
                            return <Skills open={stack.lang===currentCollapse && open} click={handleCollapse} key={keys} tech={stack.lang} id={keys} desc={stack.desc}/>
                        }) : props.p}
                </div>
            </div>
        </div>
    )
}