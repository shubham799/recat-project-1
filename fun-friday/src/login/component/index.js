import React from 'react';

const LoginForm =({onChange,onSubmit,isLogin,redirectToRegister,notValidUser})=>(
    <section class="register-form">
        <h4>Login Here !!</h4>
        {notValidUser && <h3>Mail id is not Valid</h3>}
        <form onSubmit={onSubmit}>
            <p>
                <input required type="text" name="username" placeholder="Email" onChange={onChange} /><br/>
            </p>
            <p>
                <input required type="password" name="password" placeholder="Enter password" onChange={onChange} /><br/>
            </p>
            
            <p class="submit">
                <input type="submit" value="Login"/>
            </p>
            {!isLogin && <p class="submit">
                <input type="submit" onClick={(e)=>{redirectToRegister(e)}} value="Regsiter" />
            </p>}
        </form>
    </section>
)

export default LoginForm;