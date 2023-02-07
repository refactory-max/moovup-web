import React from "react";
import Alert from '@mui/material/Alert';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// MUI
import { Box, Typography } from '@mui/material';

// UI
import AppBar from '../components/app_bar';

export default function FriendDetails(props) {

    let location = useLocation();
    let navigate = useNavigate();

    // States
    const [person, setPerson] = React.useState(null);
    const [markerPosition, setMarkerPosition] = React.useState(null);

    React.useEffect(() => {
        setPerson(location.state.person);
    }, []);

    React.useEffect(() => {
        if (person && person.location) {
            if (person.location.latitude && person.location.longitude) {
                let position = {
                    lat: person.location.latitude,
                    lng: person.location.longitude
                }
                setMarkerPosition(position);
            }
        } else {
            setMarkerPosition(null);
        }
    }, [person]);

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

    const defaultProps = {
        center: {
            lat: 22.296377983522795,
            lng: 114.17171990123119
        },
        zoom: 11
    };

    const MapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={defaultProps.zoom}
            defaultCenter={defaultProps.center}
            center={props.markerPosition ?? defaultProps.center}
        >
            {props.markerPosition && <Marker position={props.markerPosition} />}
        </GoogleMap>
    ))

    return (
        <>
            <AppBar
                title="Your Friend"
                onBack={() => {
                    navigate('/');
                }}
            />
            <MapComponent
                markerPosition={markerPosition}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1UltwFQgqb2fMxwFv-2SD79f77qvjv3s&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            >
            </MapComponent>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                {
                    person && person.picture && (
                        <img
                            src={person.picture}
                            alt="Logo"
                            style={{ width: 40, height: 40, borderRadius: 40 / 2 }} />
                    )
                }
                <Typography>{getDisplayName(person)}</Typography>
            </Box>
            {
                !markerPosition && (
                    <Alert severity="error">No position found for this person</Alert>
                )
            }
        </>
    );
}
