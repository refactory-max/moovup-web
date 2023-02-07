import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { useNavigate } from "react-router-dom";

// Network
import { getPeople } from '../network/moovup_services';

// UI
import AppBar from '../components/app_bar';

export default function PeopleList() {

    const [people, setPeople] = React.useState([]);

    const navigate = useNavigate();

    React.useEffect(() => {
        (async () => {
            const people = await getPeople();
            setPeople(people);
        })();
    }, []);

    const getDisplayName = (person) => {
        let nameElements = [];
        if (person && person.name) {
            if (person.name.first) {
                nameElements.push(person.name.first);
            }
            if (person.name.last) {
                nameElements.push(person.name.last);
            }
        }
        return nameElements.length > 0 ? nameElements.join(' ') : 'Invalid name';
    };

    return (
        <>
            <AppBar title="All Friends" />
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List>
                    {
                        people.map((person) => {
                            return (
                                <ListItem disablePadding
                                    key={person._id}>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate('/friend_details', { state: { person, test: 'wahaha' } })
                                            }}>
                                            <img
                                                src={person.picture}
                                                alt="Logo"
                                                style={{ width: 40, height: 40, borderRadius: 40 / 2 }} />
                                            <ListItemText primary={getDisplayName(person)} />
                                        </ListItemButton>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>
        </>
    );
}
