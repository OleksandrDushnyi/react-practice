import './Button.css'

export default function Button({children, buttonClicked}) {

    return (
        <button className='button active' onClick={buttonClicked}>
      {children}
        </button>
    )
}