import { useState, useRef, useEffect } from "react";

const data = {
    title: "",
    rows: [
        {
            title: "How do I register for the reunion event?",
            content: `To register for the reunion event, please visit our registration page and fill out the necessary details. 
                      Once you've completed the form, you will receive a confirmation email with further instructions. The deadline for registration is two weeks before the event date. Please make sure to register early to 
                      secure your spot and help us with the event planning.`,
        },
        {
            title: "What is the deadline for registration?",
            content: `The deadline for registration is two weeks before the event date. Please make sure to register early to 
                      secure your spot and help us with the event planning.`,
        },
        {
            title: "Can I bring a guest to the reunion?",
            content: `Yes, you can bring a guest to the reunion. During the registration process, there will be an option to 
                      include guest details. Please ensure you register your guest as well to receive proper identification 
                      and seating arrangements.`,
        },
        {
            title: "How can I get a copy of the event photos?",
            content: `Event photos will be uploaded to our official website and shared on our social media channels. You will 
                      also receive a link to the photo gallery via email after the event. Make sure to follow us on social media 
                      for updates and announcements.`,
        },
        {
            title: "Will there be accommodations available?",
            content: `We have arranged special rates at nearby hotels for our attendees. You can find a list of recommended 
                      hotels and booking details on our accommodations page. Please book early to take advantage of the special 
                      rates.`,
        },
       
    ],
};

const styles = {
    titleTextColor: "blue",
    rowTitleColor: "#EC3282",
    rowTitleTextSize: "18px",
};

const config = {
    animate: true,
    expandIcon: "+",
    collapseIcon: "-",
    openOnload: 0,
};

const FaqComponent = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [heights, setHeights] = useState({});
    const refs = useRef({});

    useEffect(() => {
        const calculatedHeights = {};
        data.rows.forEach((_, index) => {
            if (refs.current[index]) {
                calculatedHeights[index] = refs.current[index].scrollHeight;
            }
        });
        setHeights(calculatedHeights);
    }, []);

    const handleRowClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container w-2/3 mx-auto">
            {data.rows.map((row, index) => (
                <div key={index} className="faq-row">
                    <div
                        className="faq-title flex justify-between py-4 border-b cursor-pointer"
                        onClick={() => handleRowClick(index)}
                        style={{ color: styles.rowTitleColor, fontSize: styles.rowTitleTextSize }}
                    >
                        {row.title}
                        <span>{openIndex === index ? config.collapseIcon : config.expandIcon}</span>
                    </div>
                    <div
                        className="faq-content overflow-hidden transition-all duration-500 ease-in-out"
                        style={{ height: openIndex === index ? `${heights[index]}px` : "0px" }}
                        ref={(el) => (refs.current[index] = el)}
                    >
                        <div className="py-4">
                            {row.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqComponent;
