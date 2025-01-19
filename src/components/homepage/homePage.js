import * as React from 'react';
import { useRef } from 'react';
import NavBar from '../navbar/navBar'
import Footer from '../footer/footer'
import './homePage.css'
import SectionOne from '../sectionOne/sectionOne';
import SectionTwo from '../sectionTwo/sectionTwo';
import SectionThree from '../sectionThree/sectionThree';
import SectionFour from '../sectionFour/sectionFour';
import SectionFive from '../sectionFive/sectionFive';
import "@fontsource/aladin"; 

const HomePage = () => {

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);

    const sectionRefs = [section5Ref, section4Ref, section3Ref, section2Ref, section1Ref];

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div>
            <NavBar scrollToSection={scrollToSection} 
            sectionRefs={sectionRefs}/>
            <div className='mainArea'>
                {/* first block */}
                <div  ref={section1Ref}>
                    <SectionOne/>
                </div>
                
                {/* second block --> subjects */}
                <div  ref={section2Ref}>
                    <SectionTwo/>
                </div>
                

                {/* third block --> educationPath */}
                <div  ref={section3Ref}>
                    <SectionThree/>
                </div>       
                
                {/* fourth block --> subscription */}
                <div  ref={section4Ref}>
                <SectionFour/>
                </div>
                
                
                {/* fifth block --> contact us */}
                <div  ref={section5Ref}>
                    <SectionFive/>
                </div>
               
                <Footer  scrollToSection={scrollToSection} 
                 sectionRefs={sectionRefs}/>
            </div>

        </div>
    )
}


export default HomePage;