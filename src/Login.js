import {useNavigate} from 'react-router-dom'

export default function Login(){
    const navigate = useNavigate()
    function submitLoginHandler(event){
        event.preventDefault()
        

        const checkLogin = true;
        if(checkLogin){
            navigate('/dashboard')
        }
    }
    return (
        <>
            <form onSubmit={submitLoginHandler}>
                <div>
                    <input type="text" name="username" />
                </div>
                <div>
                    <input type="password" name="password" />
                </div>
                <button>Login</button>
            </form>
        </>
    )
}