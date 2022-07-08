

import React from "react";

import { Redirect, withRouter } from "react-router-dom";

class Register extends React.Component {
  

  render() {
    
    return (
      <div bg-dark>
        <div class=" d-none d-md-block">
          <div class=" container bg-dark  p-3 mt-5 ">
            <div class="card   p-3 mt-5">
              <div class="card-body   ">
                <h1 class="card-title p-3 text-dark text-center headgd ">
                  
                  Registration Form
                </h1>
                <br></br>
                <div class="card-deck ">
                  <div class="card bg-light border-dark col-lg-6 col-mb-6  ">
                    <div class="card-header h5">
                      Bus Details
                    </div>

                    <div class="card-body mt-2 "></div>
                    <form>
                      <div class="form-inline ">
                        <p class="col-lg-5 col-mb-4 col-form-label; h5">
                          Full Name&nbsp;:&nbsp;
                        </p>

                        <div class="col-lg-6">
                          <input
                            class="form"
                            type="text"
                            name="busNo"
                            placeholder="add bus number"
                            
                            required="required"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div class="form-inline">
                        <p class="col-lg-5 col-mb-4 col-form-label; h5">
                          ID Number&nbsp;:&nbsp;
                        </p>

                        <div class="col-lg-6">
                          <input
                            class="form"
                            type="text"
                            name="email"
                            placeholder="add your email"
                            
                            required="required"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div class="form-inline">
                        <p class="col-lg-5 col-mb-4 col-form-label; h5">
                          SDR Model&nbsp;:&nbsp;
                        </p>

                        <div class="col-lg-6">
                          <input
                            class="form"
                            type="text"
                            name="password"
                            placeholder="add your password"
                            
                            required="required"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div class="form-inline">
                        <p class="col-lg-5 col-mb-4 col-form-label; h5">
                          Service Provider&nbsp;:&nbsp;
                        </p>

                        <div class="col-lg-6">
                          <input
                            class="form"
                            type="text"
                            name="password"
                            placeholder="add your password"
                            
                            required="required"
                          />
                        </div>
                      </div>
                      <br></br>
                      
                      <div class="form-inline">
                        <p class="col-lg-5 col-mb-4 col-form-label; h5">
                          Location&nbsp;:&nbsp;
                        </p>

                        <div class="col-lg-6">
                          <input
                            type="text"
                            pattern="[0-9]*"
                            min="1"
                            max="54"
                            name="seatNo"
                            
                            required="required"
                          />
                        </div>
                      </div>
                      <br></br>
                      <br></br>
                      <div class="form-inline p-3">
                        <button
                          type="button"
                         
                          class="btn btn-primary btn-lg"
                        >
                          REGISTER
                        </button>
                      </div>
                    </form>
                  </div>

                  <div class="card bg-light text-dark w-50 border-dark col-lg-6 col-mb-6">
                    <div class="card bg-light text-dark  ">
                      <div class="card-header h5">
                        <i class="fas fa-user"></i> &nbsp;&nbsp;Driver
                      </div>
                      <div class="card-body ">
                        <form>
                          <div class="form-inline ">
                            <p class="col-lg-5 col-mb-4 col-form-label; h5">
                              Name&nbsp;:&nbsp;
                            </p>

                            <div class="col-lg-6">
                              <input
                                class="form"
                                type="text"
                                name="dName"
                                
                              />
                            </div>
                          </div>
                          <br></br>
                          <div class="form-inline ">
                            <p class="col-lg-5 col-mb-4 col-form-label; h5">
                              Register No.&nbsp;:&nbsp;
                            </p>

                            <div class="col-lg-6">
                              <input
                                class="form"
                                type="text"
                                pattern="[0-9]*"
                                name="dNo"
                                
                                required="required"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div class="card bg-light text-dark  ">
                      <div class="card-header h5">
                        <i class="fas fa-user"></i> &nbsp;&nbsp;Conductor
                      </div>
                      <div class="card-body ">
                        <form>
                          <div class="form-inline ">
                            <p class="col-lg-5 col-mb-4 col-form-label; h5">
                              Name&nbsp;:&nbsp;
                            </p>

                            <div class="col-lg-6">
                              <input
                                class="form"
                                type="text"
                                name="cName"
                                
                              />
                            </div>
                          </div>
                          <br></br>
                          <div class="form-inline ">
                            <p class="col-lg-5 col-mb-4 col-form-label; h5">
                              Register No.&nbsp;:&nbsp;
                            </p>

                            <div class="col-lg-6 col-mb-6">
                              <input
                                class="form"
                                type="text"
                                pattern="[0-9]*"
                                name="cNo"
                                
                                required="required"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
                  </div>
       
    );
  }
}

export default Register;

