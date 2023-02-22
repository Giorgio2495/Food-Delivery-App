import React, { useState ,useEffect } from "react";
import Logo from "../images/Logo.png";
import '../styles/Login.scss'
import { FcGoogle, } from "react-icons/fc"
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { addUser } from "../features/user/userSlice";
//import { GeoPoint } from "firebase/firestore";

const Login = () => {
  //vamos a traer el estado de redux
    //const dispatch = useDispatch();
    const [lat , setLat] = useState(0);
    const [lng , setLng] = useState(0)
    const {loginWithGoogle} = React.useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    }, []);

    const loginGoogle = async () => {
      try {
        await loginWithGoogle()
        navigate('/home')
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="Login">
      <div className="Login__content">
        <div className="Login__image">
          <img src={Logo} alt="Logo" width="100" />
        </div>
        <h3>Sing in</h3>
        <p>
          Login or create an account with your phone number to start ordering
        </p>

      </div>

      <div className="Login__footer">
        <div className="footer__text">
          <p>By clicking the button next you accept.</p>
          <span>Terms of use</span>
        </div>
        <div className="Login__button">
          <button type="button" onClick={loginGoogle}>
            <FcGoogle size="1.5rem" />
            Login whith google</button>
        </div>
      </div>
      
    </div>
  );
};

export default Login;