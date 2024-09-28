import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ReactComponent as HeartIcon } from '../../Assets/heart-icon.svg';
import { ReactComponent as SmileyIcon } from '../../Assets/smiley.svg';
import styles from './Questions.module.css';


const FrequentlyAskedQuestions = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded && panel)
    }

    const faqs = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'Our medical center is dedicated to providing comprehensive care for every member of your family. We offer personalized treatment plans, a warm and caring environment, and a wide range of services to address the unique healthcare needs of all ages.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'We stand out due to our patient-first approach, cutting-edge technology, and a team of highly qualified medical professionals. We focus not only on treatment but also on preventive care, ensuring long-term health and wellness for our patients.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'With years of experience in senior care, our team is committed to offering compassionate and expert care for the elderly. We provide a safe, nurturing environment where seniors can receive medical attention, emotional support, and personalized care plans tailored to their needs.'
        },
        {
            question: 'How to get appointment for emergency cases?',
            answer: 'For emergency cases, you can call our 24/7 emergency hotline or visit our emergency care facility directly. Our team is available around the clock to provide immediate attention and guide you through the process of securing an urgent appointment.'
        }
    ]

    return (
        <div className={styles.qaContainer}>
            <div className={styles.qaHeading}>
                <Typography variant="p" fontSize='16px' fontWeight='600' color="var(--aqua-blue)" marginBottom='2px'>
                    Get Your Answer
                </Typography>
                <Typography variant="h3" fontFamily='var(--base-font-family)' fontWeight='600' color="var(--navy-blue)" sx={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>
                    Frequently Asked Questions
                </Typography>
            </div>
            <div className={styles.qaSection}>
                <div className={styles.qaImage}>
                    <div className={styles.safetyWithUsIcon}>
                        <HeartIcon />
                    </div>
                    <img src={require('../../Assets/faq-image.png')} alt="FAQ" style={{ width: '350px' }} />
                    <div className={styles.happyPatientCount}>
                        <SmileyIcon style={{ width: 'clamp(30px, 5vw, 50px)', height: 'clamp(30px, 5vw, 50px)' }} />
                        <div className={styles.cxCount}>
                            <Typography variant="h5" fontFamily='var(--base-font-family)' fontWeight='600' color="var(--navy-blue)" style={{ fontSize: 'clamp(14px, 2vw, 28px)' }}>
                                84k+
                            </Typography>
                            <Typography color="var(--grayish-blue)" style={{ fontSize: 'clamp(10px, 2vw, 17px)' }}>
                                Happy Patients
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className={styles.qaList}>
                    {
                        faqs.map((faq, index) => (
                            <Accordion key={index} 
                                expanded={expanded === index} 
                                onChange={handleChange(index)}
                                sx={{
                                    boxShadow: "none", 
                                    border: "none", 
                                    "&:before": {
                                    display: "none", 
                                    },
                                    backgroundColor: 'transparent',
                                    padding: '15px 10px',
                                    marginBottom: '10px'
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === index ? <FaMinus color="var(--aqua-blue)" /> : <FaPlus color="var(--aqua-blue)" />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                    sx={{ padding: '0', margin: '0' }}
                                >
                                    <Typography fontFamily='var(--base-font-family)' textAlign='left' fontSize={{ xs: '0.875rem', sm: '1rem', md: '1.1875rem'  }} fontWeight='600' color="var(--navy-blue)">
                                        {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily='var(--base-font-family)' textAlign='left' fontSize={{ xs: '0.775rem', sm: '0.975rem', md: '1.0875rem'  }}>
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default FrequentlyAskedQuestions;