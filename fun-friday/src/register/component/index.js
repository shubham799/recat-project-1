import React from 'react';
import '../register.css'

const RegisterForm =({onChange,onSubmit,isLogin})=>(
    <section class="register-form">
        <h4>Register Here !!</h4>
        <form onSubmit={onSubmit}>
            <p>
                <input name="firstname" required type="text" placeholder="First Name" onChange={onChange}/>
            </p>
            <p>
                <input name="lastname" required type="text" placeholder="Last Name" onChange={onChange}/>
            </p>
            <p>
                <input name="email" required type="email" placeholder="Email" onChange={onChange}/>
            </p>
            <p>
                <input name="password" required type="password" placeholder="Choose Password" onChange={onChange} />
            </p>
            <p>
                <input name="mobileNumber" required type="mobileNumber" placeholder="Mobile Number" onChange={onChange} />
            </p>
            <p class="submit">
                <input type="submit" value="Register" />
            </p>
            {!isLogin && <p class="submit">
                <input type="submit" value="Login" />
            </p>}
        </form>
    </section>
)

export default RegisterForm;