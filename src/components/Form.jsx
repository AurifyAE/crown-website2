import React, { useState } from 'react'
import {
    Box,
    TextField,
    Button,
    Grid,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from "@mui/material";
import whatsappIcon from "../assets/whatsapp.svg";


export default function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
    });

    const handleWhatsAppClick = () => {
        const { firstName, lastName, email, phone, subject, message } = formData;
        const fullMessage = `Hello, I'm ${firstName} ${lastName}. Subject: ${subject}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
        const url = `https://wa.me/+919072839370?text=${encodeURIComponent(fullMessage)}`;
        window.open(url, '_blank');

        // reset form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: 'General',
            message: '',
        });
    };

    const handleSendEmail = () => {
        const email = "info@crownfuturegoldgmail.com"; // check this email — seems wrong (no @gmail.com?)
        const subject = " from Website";

        const body = `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Subject: ${formData.subject}
        Message: ${formData.message}
        `;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(formData.subject + subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
        
        // reset form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: 'General',
            message: '',
        });
    };


    return (
        <div className=" min-h-screen bg-white lg:space-y-0 space-y-5 pb-5">
        {/* 🌍 Map Section */}
        <div className="w-full h-[300px] sm:h-96">
            <iframe
            title="Crown Future Gold and Diamond LLC"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.927800805921!2d55.29729077538424!3d25.273014077662218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzIyLjkiTiA1NcKwMTcnNTkuNSJF!5e0!3m2!1sen!2sin!4v1748356998714!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full"
            ></iframe>
        </div>

        {/* 📝 Contact Form Section */}
            <Box
            sx={{
                maxWidth: 700,
                mx: "auto",
                p: { xs: 3, sm: 6, md: 8 },
                bgcolor: "#fff",
                borderRadius: 6,
                boxShadow: 3,
                color: "black",
                position: "relative", 
                top: { xs: 0, sm: "-2rem", md: "-5rem" },
            }}
            >

            {/* First & Last Name */}
            <Grid container spacing={4} mb={6} justifyContent="center">
                <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    sx={{ 
                        width: '270px',
                        input: { color: 'black' }, // input text
                        label: { color: 'black' }, // label
                        '& .MuiInput-underline:before': { borderBottomColor: 'black' }, // default underline
                        '& .MuiInput-underline:hover:before': { borderBottomColor: 'black' }, // hover underline
                        '& .MuiInput-underline:after': { borderBottomColor: '#7F4F20' }, // focus underline
                    }}
                    value={formData.firstName}
                    onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                    }
                    label="First Name"
                    variant="standard"
                    InputLabelProps={{ style: { color: "black" } }}
                    InputProps={{ style: { color: "black" } }}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    sx={{ 
                        width: '270px' ,
                        input: { color: 'black' }, // input text
                        label: { color: 'black' }, // label
                        '& .MuiInput-underline:before': { borderBottomColor: 'black' }, // default underline
                        '& .MuiInput-underline:hover:before': { borderBottomColor: 'black' }, // hover underline
                        '& .MuiInput-underline:after': { borderBottomColor: '#7F4F20' }, // focus underline
                    }}
                    value={formData.lastName}
                    onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                    }
                    label="Last Name"
                    variant="standard"
                    InputLabelProps={{ style: { color: "black" } }}
                    InputProps={{ style: { color: "black" } }}
                />
                </Grid>
            </Grid>

            {/* Email & Phone */}
            <Grid container spacing={4} mb={6} justifyContent="center">
                <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    sx={{ 
                        width: '270px' ,
                        input: { color: 'black' }, // input text
                        label: { color: 'black' }, // label
                        '& .MuiInput-underline:before': { borderBottomColor: 'black' }, // default underline
                        '& .MuiInput-underline:hover:before': { borderBottomColor: 'black' }, // hover underline
                        '& .MuiInput-underline:after': { borderBottomColor: '#7F4F20' }, // focus underline
                    }}
                    label="Email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    variant="standard"
                    type="email"
                    InputLabelProps={{ style: { color: "black" } }}
                    InputProps={{ style: { color: "black" } }}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    sx={{ 
                        width: '270px' ,
                        input: { color: 'black' }, // input text
                        label: { color: 'black' }, // label
                        '& .MuiInput-underline:before': { borderBottomColor: 'black' }, // default underline
                        '& .MuiInput-underline:hover:before': { borderBottomColor: 'black' }, // hover underline
                        '& .MuiInput-underline:after': { borderBottomColor: '#7F4F20' }, // focus underline
                    }}
                    label="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                    }
                    variant="standard"
                    type="tel"
                    InputLabelProps={{ style: { color: "black" } }}
                    InputProps={{ style: { color: "black" } }}
                />
                </Grid>
            </Grid>

            {/* Radio Group */}
            <FormControl component="fieldset" sx={{ mb: 3 }}>
                <FormLabel component="legend" sx={{ color: "black !important" }}>
                    Select Subject?
                </FormLabel>
                <RadioGroup 
                    row 
                    defaultValue="General" 
                    name="subject"
                    value={formData.subject}
                    onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                    }
                    >
                <FormControlLabel
                    value="General"
                    control={
                        <Radio 
                            sx={{
                            color: "#7F4F20",
                            "&.Mui-checked": {
                                color: "#7F4F20",
                            },
                            }} 
                        />
                    }
                    label="General Enquiry"
                    sx={{ color: "black" }}
                />
                <FormControlLabel
                    value="Bullion-Trading"
                    control={
                        <Radio 
                            sx={{
                            color: "#7F4F20",
                            "&.Mui-checked": {
                                color: "#7F4F20",
                            },
                            }} 
                        />
                    }
                    label="Bullion Trading"
                    sx={{ color: "black" }}
                />
                <FormControlLabel
                    value="Customised-Jewellery"
                    control={
                        <Radio 
                            sx={{
                            color: "#7F4F20",
                            "&.Mui-checked": {
                                color: "#7F4F20",
                            },
                            }} 
                        />
                    }
                    label="Customised Jewellery"
                    sx={{ color: "black" }}
                />
                </RadioGroup>
            </FormControl>

            {/* Message */}
            <TextField
                fullWidth
                sx={{   
                        mb: 4,
                        input: { color: 'black' }, // input text
                        label: { color: 'black' }, // label
                        '& .MuiInput-underline:before': { borderBottomColor: 'black' }, // default underline
                        '& .MuiInput-underline:hover:before': { borderBottomColor: 'black' }, // hover underline
                        '& .MuiInput-underline:after': { borderBottomColor: '#7F4F20' }, // focus underline
                    }}
                label="Message"
                value={formData.message}
                onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                }
                variant="standard"
                multiline
                rows={4}
                InputLabelProps={{ style: { color: "black" } }}
                InputProps={{ style: { color: "black" } }}
            />

            <Box sx={{ 
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                justifyContent: "center",
                alignItems: "center", 
            }}>
            <Button
                onClick={handleWhatsAppClick}
                variant="outlined"
                sx={{
                width: "280px",
                height: "40px",
                gap: 1,
                color: "#7F4F20",
                borderColor: "#7F4F20",
                '&:hover': {
                    borderColor: "#7F4F20",
                    backgroundColor: "#7F4F2010"
                }
                }}
            >
                Connect on WhatsApp
                <img src={whatsappIcon} alt="whatsapp icon" className='w-8 h-8' />
            </Button>

            <Button
                onClick={handleSendEmail}
                variant="contained"
                sx={{
                width: "280px",
                backgroundColor: "#7F4F20",
                "&:hover": {
                    backgroundColor: "#6c431b",
                }
                }}
            >
                Send Message
            </Button>
            </Box>
            </Box>
        </div>

    )
}
