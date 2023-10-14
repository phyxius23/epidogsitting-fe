/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSearchAction } from "../store/dogsitters/dogsittersActions";
import { CardDogsitter } from "../components/CardDogsitter";
import { FilterDogsitters } from "../components/FilterDogsitters";

const Search = () => {
   const isLoading = useSelector((state) => state.global.isLoading);
   const isError = useSelector((state) => state.global.isError);
   const errorMessage = useSelector((state) => state.global.errorMessage);
   const dogsitters = useSelector((state) => state.dogsitters.list);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getSearchAction(""));
   }, []);

   return (
      <main className="search">
         <div className="hero-section">
            <Container>
               <Row className="justify-content-center">
                  <Col xs={12} md={4} lg={4}>
                     {/*
                      * ***** *****
                      * LEFT COLUMN
                      * ***** *****
                      */}
                     <FilterDogsitters />
                  </Col>

                  {/*
                   * ***** *****
                   * RIGHT COLUMN
                   * ***** *****
                   */}
                  <Col xs={12} md={8} lg={8} className="dogsitters">
                     {isLoading && (
                        <>
                           <div className="d-flex align-items-center flex-column">
                              <Spinner animation="border" role="status" variant="secondary" />
                              <p className="text-secondary text-center mt-2">Loading...</p>
                           </div>
                        </>
                     )}

                     {isError && errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                     {dogsitters &&
                        dogsitters.map((dogsitter, index) => (
                           <CardDogsitter key={dogsitter.id} dogsitter={dogsitter} index={index} />
                        ))}
                  </Col>
               </Row>
            </Container>
         </div>
      </main>
   );
};

export default Search;
