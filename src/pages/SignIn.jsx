import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { getProfileAction, loginProfileAction } from "../store/profile/profileActions";
import { getDogsAction } from "../store/dogs/dogsActions";

const SignInRef = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const sendLogin = async (e) => {
      e.preventDefault();

      const loginData = { email, password };

      await dispatch(loginProfileAction(loginData));

      navigate("/my-profile");
      await dispatch(getProfileAction());
      await dispatch(getDogsAction());

      setEmail("");
      setPassword("");
   };

   const handleEmailInput = (e) => setEmail(e.target.value);
   const handlePasswordInput = (e) => setPassword(e.target.value);

   return (
      <main className="signin">
         <div className="hero-section">
            <Container>
               <Row className="justify-content-center align-items-center">
                  <Col xs={11} sm={9} md={6} lg={5} xl={4}>
                     <Form className="p-5 shadow-lg" onSubmit={sendLogin}>
                        <h1 className="h3 mb-3 fw-normal title-cursive">Accedi a EpiDogSitting!</h1>
                        <FloatingLabel controlId="email" label="Email" className="">
                           <Form.Control
                              required
                              type="email"
                              placeholder="name@example.com"
                              autoFocus
                              value={email}
                              onChange={handleEmailInput}
                              className="input-login"
                           />
                        </FloatingLabel>
                        <FloatingLabel controlId="password" label="Password" className="mb-3">
                           <Form.Control
                              type="password"
                              placeholder="Password"
                              // pattern="(^[0-9]{4}$)"
                              title="La password deve essere composta da 4 caratteri"
                              value={password}
                              onChange={handlePasswordInput}
                              className="input-login"
                              required
                           />
                        </FloatingLabel>
                        <Button
                           type="submit"
                           variant="primary"
                           className="w-100 rounded-pill fw-bold"
                        >
                           Accedi
                        </Button>
                     </Form>
                  </Col>
               </Row>
            </Container>
         </div>
      </main>
   );
};

export default SignInRef;
