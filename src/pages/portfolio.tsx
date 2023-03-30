import React, {useRef, useEffect} from "react"
import { Container } from "react-bootstrap"
import SubLinks from "./components/portfolio/subLinks"
import PortfolioCard from "./components/portfolio/portfolioCard";

export default function Portfolio() {

    interface scrollX{
        children : React.ReactNode;
    }

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const container = containerRef.current;

    const handleScroll = (e: WheelEvent) => {
        if (container) {
            container.scrollLeft += e.deltaY;
        }
    };

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
        container.addEventListener('wheel', handleScroll);
        updateScroll();
    }

    return () => {
        if (container) {
            container.removeEventListener('wheel', handleScroll);
        }
    };
    }, [])

    const subLinks = [
        'all', 'Kodego', 'Codewars', 'Frontend Mentor'
    ]

    const portal =() =>{
        return subLinks.map( (portal, key) =>{
            return (
                <SubLinks acc={portal} key={key} />
            )
        })
    }

    return (
        <>
            <Container>
                <div ref={containerRef} className="subLinks pt-5">
                    <div style={{ position: 'relative', left: 0 }}>
                        {portal()}
                    </div>
                </div>
            </Container>
            <section className="container pt-4">
                <Container className="py-4 portfolio_card d-flex flex-wrap justify-content-center">
                    <PortfolioCard img='web3.png'/>
                    <PortfolioCard img='web2.png'/>
                    <PortfolioCard img='web1.png'/>
                    <PortfolioCard img='web3.png'/>
                    <PortfolioCard img='web3.png'/>
                    <PortfolioCard img='web3.png'/>
                    <PortfolioCard img='web3.png'/>
                    <PortfolioCard img='web3.png'/>
                    <PortfolioCard img='web3.png'/>
                </Container>
            </section>
        </>
    )
}