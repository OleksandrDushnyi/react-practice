import Header from "./components/Header"
import TeachSection from "./components/TeachingSection"
import DifferencesSection from "./components/DefferencesSection"
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FeedbackSection"
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


