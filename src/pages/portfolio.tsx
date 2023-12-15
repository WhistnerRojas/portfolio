import React, {useRef, useEffect, useState} from "react"
import { Container } from "react-bootstrap"
import SubLinks from "./components/portfolio/subLinks"
import PortfolioCard from "./components/portfolio/portfolioCard"
import PortfolioData from "../assets/portfolioData"
// import { object } from "yup";

export default function Portfolio() {

    const [subLinkInstance, setSublinkInstance] = useState<string[]>([])
    const [showCard, setShowCard] = useState<string>('all')
    const containerRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        const container = containerRef.current;
        const handleScroll = (e: WheelEvent) => {
            if (container) {
                container.scrollLeft += e.deltaY
            }
        }

        const updateScroll = () => {
            if (container) {
                const firstChild = container.firstChild as HTMLElement;
                const lastChild = container.lastChild as HTMLElement;
                const containerWidth = container.clientWidth;
                const scrollWidth = container.scrollWidth;

                if (firstChild && lastChild && containerWidth && scrollWidth) {
                    const firstChildLeft = firstChild.offsetLeft;
                    const lastChildRight = lastChild.offsetLeft + lastChild.offsetWidth;

                    if (firstChildLeft < 0) {
                        container.scrollLeft += firstChildLeft;
                    } else if (lastChildRight > containerWidth) {
                        container.scrollLeft -= lastChildRight - containerWidth;
                    }
                }
            }
        };

        if (container) {
            container.addEventListener('wheel', handleScroll)
            updateScroll()
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleScroll)
            }
        }
    }, [])

    const fetchPlatform = (e: React.MouseEvent)=>{
        e.currentTarget.textContent !== null && setShowCard(e.currentTarget.textContent)
        document.querySelector('#cardTransition')?.classList.add("cardTransition")
        setTimeout(function() {
            document.querySelector('#cardTransition')?.classList.remove("cardTransition")
        }, 800);
    }

    const portal =(obj:any) =>{
        const projectNum = Object.keys(obj.data)
        projectNum.map( (portal, key) =>{
            const platform = obj.data[portal].platform
            subLinkInstance === null ? setSublinkInstance([platform]) : !subLinkInstance.includes(platform) && setSublinkInstance([...subLinkInstance, platform])
        })
        return subLinkInstance.map((platformLink,key)=>{
            return <SubLinks acc={platformLink} key={key} onClick={fetchPlatform} active={showCard}/>
        })
    }

    const cardInfo = (obj: any) : any=>{
            const projectList = Object.keys(obj.data).reverse()
            return projectList.map((projectInfo, keys)=>{
                const platform = obj.data[projectInfo].platform
                const projectName = obj.data[projectInfo].title
                const projectLang = obj.data[projectInfo].techStach
                const projectDesc = obj.data[projectInfo].desc
                const projectImg = obj.data[projectInfo].img
                const projectGit = obj.data[projectInfo].github
                const projectDemo = obj.data[projectInfo].demo

                console.log(projectList.length) //output 10

                return(
                    showCard === platform ? <PortfolioCard 
                                                key={keys} 
                                                platform={platform !== '' ? platform : 'Platform'} 
                                                projName={projectName !== '' ? projectName : 'Project Name'}
                                                projLang={projectLang}
                                                projDesc={projectDesc}
                                                projGit={projectGit !== '' ? projectGit : '#'}
                                                projDemo={projectDemo}
                                                img={projectImg !== '' ? projectImg : 'web3.png'} 
                                            /> : 
                    showCard === 'all' && <PortfolioCard 
                                                key={keys} 
                                                platform={platform !== '' ? platform : 'Platform'} 
                                                projName={projectName !== '' ? projectName : 'Project Name'}
                                                projLang={projectLang}
                                                projDesc={projectDesc}
                                                projGit={projectGit !== '' ? projectGit : '#'}
                                                projDemo={projectDemo}
                                                img={projectImg !== '' ? projectImg : 'web3.png'} 
                                            />
                )
            })
    }

    return (
        <>
            <Container>
                <div ref={containerRef} className="subLinks pt-5">
                    <div style={{ position: 'relative', left: 0 }}>
                    <SubLinks acc="all" onClick={fetchPlatform} active={showCard}/>{portal(PortfolioData)}
                    </div>
                </div>
            </Container>
            <section className="container pt-4">
                <Container className="py-4 portfolio_card d-flex flex-wrap" id="cardTransition">
                    {cardInfo(PortfolioData)}
                </Container>
            </section>
        </>
    )
}