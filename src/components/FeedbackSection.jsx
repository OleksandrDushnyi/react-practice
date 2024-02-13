import Button from "./Button/Button"
import { useState } from "react"
export default function FeedbackSection() {

const [form, setForm] = useState({
    name: '',
    hasError: true,
    reason: 'help'
})
// const [name, setName] = useState('')
// const [hasError, setHasError] = useState(true)
// const [reason, setReason] = useState('help')

 function handleNameChange(event) {
setForm((prev) => ({
    ...prev, 
    name: event.target.value,
    hasError: event.target.value.trim().length === 0,
}))

 }

 

 function toggleError() {
//     setHasError((eev) => !prev )
 }

    return(
        <section>
            <h3>Зворотній звязок</h3>

            <Button onClick={toggleError}>Toggle Error</Button>

            <form >
                <label htmlFor="name">Ваше ім'я</label>
                <input 
                type="text" 
                id="name" 
                className="control" 
                value={form.name} 
                style={{
                    border: form.hasError ? '1px solid red' : null
                }}
                onChange={handleNameChange}/>
            
                <label htmlFor="name">Причина звернення</label>
                <select id="reason" className="control" value={form.reason} onChange={event => setForm(prev => ({...prev, reason: event.target.value}))}>
                  <option value="error">Помилка</option>
                  <option value="help">Потрібна допомога</option>
                  <option value="suggest">Пропозиція</option>
                  </select>
{/* 
<pre>
    {JSON.stringify(form, null, 2)}
</pre> */}
                  <Button disabled={form.hasError} isActive={!form.hasError}>Відправити</Button>
            </form>
        </section>
    )
}