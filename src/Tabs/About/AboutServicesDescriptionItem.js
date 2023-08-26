import React from 'react';
import { Typography, Collapse, List, ListItem, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const AboutServicesDescriptionItem = ({ title, description, expanded, onClick }) => {
    return (
        <div className='descriptionItem' onClick={onClick} >

            <div >
                <Typography className='descriptionItem-name' variant="h6" component="div" >
                    {title}
                </Typography>
                <Collapse in={expanded}>
                    <List dense disablePadding>
                        {description.map((bulletPoint, index) => (
                            <ListItem key={index} >
                                <ListItemText className='descriptionItem-points' primary={bulletPoint} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </div>

            <div className='descriptionItem-row'>
                <div onClick={onClick} className='mui-icons'>
                    {
                        expanded
                            ? <KeyboardArrowUpIcon style={{ marginTop: '8px', color: '#000', stroke: '#E0E1E4' }} />
                            : <KeyboardArrowDownIcon style={{ marginTop: '8px', stroke: '#E0E1E4' }} />
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutServicesDescriptionItem;

