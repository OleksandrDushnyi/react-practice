import Header from "./components/Header/Header.jsx"
import TeachSection from "./components/TeachingSection.jsx"
import DifferencesSection from "./components/DefferencesSection.jsx"
import IntroSection from "./components/IntroSection.jsx"
import TabsSection from "./components/TabsSection.jsx"
import FeedbackSection from "./components/FeedbackSection.jsx"
import { useState } from 'react';
export default function App() {
const [tab, setTab] = useState('feedback')
  
  return (
   <>
      <Header />
       <main>
        <IntroSection/>
        <TabsSection active={tab} onChange={(curent) => setTab(curent)}/>

{tab === 'main' && (
  <>
  <TeachSection/>
  <DifferencesSection/>
  </>
)}
{tab === 'feedback' && <FeedbackSection/>}
      
       </main>
    </>
  )
}


