import {Html, Head, Main, NextScript} from 'next/document'
import {DataProvider} from "../context/DataContext";

export default function Document() {
    return (
        <Html>
            <DataProvider>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                <div id="modal-root"/>
                </body>
            </DataProvider>
        </Html>
    )
}