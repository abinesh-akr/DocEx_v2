import React from 'react';
import ImageUploader from './components/ImageUploader';
import StreamlitEmbed from './components/StreamlitEmbed';
import AadharExtraction from './components/AadharExtraction';
import GateExtraction from './components/GateExtraction';
import IncomeExtraction from './components/IncomeExtraction';

// Your other middleware and routes here
function App() {
    return (
        <div>
            <h1>Data Processing App</h1>
            <ImageUploader />

            <AadharExtraction />
            <GateExtraction />
            <IncomeExtraction />
        </div>
    );
}

export default App;