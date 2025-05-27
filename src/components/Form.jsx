import React from 'react'
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
    return (
        <div className=" min-h-screen bg-white">
    {/* 🌍 Map Section */}
    <div className="w-full h-96">
        <iframe
        title="location-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196750607984!2d144.963058!3d-37.813611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577dcb9e89a845c!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sin!4v1625561047315!5m2!1sen!2sin"
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
            p: 8,
            bgcolor: "#fff",
            borderRadius: 6,
            boxShadow: 3,
            color: "black",
            position: "relative", 
            top: "-5rem",
        }}
        >

        {/* First & Last Name */}
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
            <RadioGroup row defaultValue="general" name="subject">
            <FormControlLabel
                value="general"
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
                label="General Inquiry"
                sx={{ color: "black" }}
            />
            <FormControlLabel
                value="bullion"
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
                value="customised"
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
            variant="standard"
            multiline
            rows={4}
            InputLabelProps={{ style: { color: "black" } }}
            InputProps={{ style: { color: "black" } }}
        />

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Button
            variant="outlined"
            sx={{
            width: "300px",
            height: "50px",
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
            variant="contained"
            sx={{
            width: "250px",
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
