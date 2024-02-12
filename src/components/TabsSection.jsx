import Button from "./Button/Button";


export default function TabsSection({active, onChange}) {
    return(
        <section style={{marginBottom: '1rem'}}>
          <Button isActive={active === 'main'} onClick={() => onChange('main')}>
            Головна</Button>
          <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>
            Зворотній звязок</Button>
        </section>
    )
}