import {FullscreenControl, Map, Placemark, TrafficControl, YMaps, ZoomControl} from "react-yandex-maps";

const AddressMap = () => {
    return (
            <YMaps>
                <Map
                    defaultState={{
                        center: [55.763589, 37.567797],
                        zoom: 15,
                    }}
                    width={600}
                    height={550}
                >
                    <Placemark geometry={[55.763589, 37.567797]}/>
                    <FullscreenControl options={{float: 'left'}}/>
                    <TrafficControl options={{float: 'right'}}/>
                    <ZoomControl options={{float: 'left'}}/>
                </Map>
            </YMaps>
    );
};

export default AddressMap;