import React from "react";
import PickMeals from "../../Assets/images/group/g1.png";
import ChooseMeals from "../../Assets/images/group/g2.png";
import DeliveryMeals from "../../Assets/images/group/g3.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
        },
    ];
    return (
        <section id='who is on ped'>
            <h2 className="hearder">Who’s on Ped?</h2>
            <div className=""></div>
            <div className="work-section-wrapper">
                <div className="work-section-top">
                    <p className="primary-subheading">Work</p>
                    <h1 className="primary-heading">How It Works</h1>
                    <p className="primary-text">
                        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                    </p>
                </div>
                <div className="work-section-bottom">
                    {workInfoData.map((data) => (
                        <div className="work-section-info" key={data.title}>
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;