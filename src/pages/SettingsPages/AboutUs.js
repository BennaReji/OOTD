import React from 'react';
import MainLayout from "../../Layout/MainLayout";
import '../../App.css'
import ehsan from "../../images/ehsan.png"
import michael from "../../images/mihcael2.png"
import benna from "../../images/IMG_1421.JPG"
import noel from "../../images/noel.png"
function AboutUs(){
    return(
        <MainLayout>
            <div className= "MainPage">
                <div className="teamSection">
                    <div className="teamMember">
                        <img src={michael} className="pic-format"  alt={"Michael Steuber"}/>
                        <p className="teamMemberP">Michael Steuber</p>
                        <p> Back-End Developer</p>
                        <a href="mailto:mps366@drexel.edu">mps366@drexel.edu</a>
                    </div>

                    <div className="teamMember">
                        <img src={ehsan} className ="pic-format" alt={"Ehsan Amin"}/>
                        <p className="teamMemberP">Ehsan Amin</p>
                        <p> Back-End Developer</p>
                        <a href="mailto:ea655@drexel.edu">ea655@drexel.edu</a>
                    </div>

                    <div className="teamMember">
                        <img src={benna} className ="pic-format" alt={"Michael Steuber"}/>
                        <p className="teamMemberP">Benna Reji</p>
                        <p> Front-End Developer</p>
                        <a href="mailto:br599@drexel.edu">br599@drexel.edu</a>
                    </div>


                    <div className="teamMember">
                        <img src={noel} className ="pic-format" alt={"Michael Steuber"}/>
                        <p className="teamMemberP">Noel Aniyankunju </p>
                        <p>Front-End Developer</p>
                        <a href="mailto:na932@drexel.edu">na932@drexel.edu</a>
                    </div>

                </div>
                <br/>
                <div className="center">
                    <div className="container">
                        <h1>Our Mission</h1>
                        <div className="contents">
                            <p>Our mission at OOTD is to connect those around the world who are interested in fashion. Our aim is to help people connect with a style they feel comfortable with and build a community that encourages unique and innovative styles. Having a good style is a crucial part of self-expression so we provide access to a community in which the user can be inspired by people all over the world.</p>
                        </div>
                    </div>
                    <div className="container">
                        <h1>Our Vision</h1>
                        <div className="contents">
                            <p>Finding a comfortable style is a daunting task for many people, especially among our peers. Our app, OOTD, will enable people to find clothing, styles, and accessories they feel comfortable with. Users will be able to post their outfits daily which will then save to their profile for other users to view later on. Clothing is a vital part of self-expression, so our aim is to create a social media platform where people can share the outfits they choose every day with the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );

}
export default AboutUs;