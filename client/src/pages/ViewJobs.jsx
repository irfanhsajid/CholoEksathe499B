
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    Box,
    Button,
    CircularProgress
} from '@mui/material';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import bd from '../assets/images/bd.svg';
import india from '../assets/images/in.svg';
import { UserContext } from "../context/userContext";
import { Plus } from '../../icon';


const JobPortal = () => {
    const { user } = useContext(UserContext);
    const [data, setData] = useState([]);
    // .........Accordion Logic.......
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    useEffect(() => {
        axios.get('/viewJobs')
            .then(response => {
                setData(response?.data);
            })
    }, [])
    // console.log(data);

    // custom css styles 
    const boxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '97%',
        margin: '0 0 10px 0',
        padding: '5px',
        background: 'white',
        borderRadius: '5px',
        '&:hover': {
            background: '#EEF1FF',
            outline: '.1px solid gray',
            '& button': {
                background: '#182F59',
                color: 'white',
                transition: 'background .7s, border .7s',
            }
        },
        transition: 'background .7s ease-in-out, border .7s ease-in-out',
        // Additional boxStyles for mobile
        '@media (max-width: 700px)': {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& button': {
                height: '95%',
                marginTop: '5px'
            }

        }
    }
    const btnStyles = {
        width: '10rem',
        height: '95%',
        boxShadow: '1px 2px 2px 1px lightgray'
    }
    const imgStyles = {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: '22px', height: '20px',
        marginLeft: '7px'
    }

    if (!user) {
        return <CircularProgress sx={{ display: 'flex', width: '100%', margin: '0 auto', margintTop: '20px' }} color="success" />
    } else {
        return (
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800">
                <br />
                <Link style={{ textAlign: 'center', display: 'block', width: '20rem', margin: '0 auto', padding: '1rem' }} to='/dashboard'>
                    Go Back
                </Link>
                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center' }}
                >BROWSE OPEN POSITIONS BY CATEGORY</Typography>
                <Typography sx={{ color: 'black', textAlign: 'center', marginBottom: '30px', fontSize: '17px' }}>We are always on the lookout for talented people </Typography>
               {
                data.length===0&& <Alert className='flex justify-center items-center w-1/2 mx-auto' severity="info">No Jobs Data Found!</Alert>
               }

                {
                    data.map(item => {
                        return (
                            <Box key={item._id}
                                sx={{
                                    margin: '0 auto', width: '60%',
                                    '@media (max-width: 780px)': {
                                        width: '92%',
                                    }

                                }}>
                                <Accordion sx={{ background: 'whitesmoke', padding: '1%', margin: '10px auto', border: '.1px solid lightgray' }} expanded={expanded == item._id.toString()} onChange={handleChange(item._id.toString())}>
                                    <AccordionSummary
                                        expandIcon={< Plus />}
                                        aria-controls={`${item._id}bh-content`}
                                        id={`${item._id}bh-header`}

                                    >
                                        <Typography sx={{ width: '90%', flexShrink: 0, fontWeight: '500', fontSize: '1.05rem', color: '#626262' }}>
                                            {item.category}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails >

                                        {
                                            item.positions.role1 &&
                                            <Box sx={boxStyles} >
                                                <Typography >
                                                    {item.positions.role1}
                                                </Typography>
                                                <Button sx={btnStyles} >
                                                    Apply Now
                                                    <img style={imgStyles} src={bd} alt="" />
                                                    <img style={imgStyles} src={india} alt="" />
                                                </Button>
                                            </Box>
                                        }

                                        {
                                            item.positions.role2 &&
                                            <Box sx={boxStyles}>
                                                <Typography>
                                                    {item.positions.role2}
                                                </Typography>
                                                <Button sx={btnStyles}>
                                                    Apply Now
                                                    <img style={imgStyles} src={bd} alt="" />
                                                </Button>
                                            </Box>
                                        }

                                        {
                                            item.positions.role3 &&
                                            <Box sx={boxStyles}>
                                                <Typography>
                                                    {item.positions.role3}
                                                </Typography>
                                                <Button sx={btnStyles}>
                                                    Apply Now
                                                    <img style={imgStyles} src={bd} alt="" />
                                                    <img style={imgStyles} src={india} alt="" />
                                                </Button>
                                            </Box>
                                        }

                                        {
                                            item.positions.role4 &&
                                            <Box sx={boxStyles}>
                                                <Typography>
                                                    {item.positions.role4}
                                                </Typography>
                                                <Button sx={btnStyles}>
                                                    Apply Now
                                                    <img style={imgStyles} src={bd} alt="" />

                                                </Button>
                                            </Box>
                                        }

                                        {
                                            item.positions.role5 &&
                                            <Box sx={boxStyles}>
                                                <Typography>
                                                    {item.positions.role5}
                                                </Typography>
                                                <Button sx={btnStyles}>
                                                    Apply Now
                                                    <img style={imgStyles} src={bd} alt="" />
                                                    <img style={imgStyles} src={india} alt="" />
                                                </Button>
                                            </Box>
                                        }

                                        {
                                            item.positions.role6 &&
                                            <Box sx={boxStyles}>
                                                <Typography>
                                                    {item.positions.role6}
                                                </Typography>
                                                <Button sx={btnStyles}>
                                                    Apply Now
                                                    <img style={imgStyles} src={bd} alt="" />
                                                    <img style={imgStyles} src={india} alt="" />
                                                </Button>
                                            </Box>
                                        }

                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        )
                    })
                }
            </div>
        );
    }


};



export default JobPortal;