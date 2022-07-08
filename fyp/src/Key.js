import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { Redirect, withRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Key = () => {
  return (
    <div bg-dark>
        <div class=" d-none d-md-block">
          <div class=" container col-6 bg-dark  p-3 mt-5 ">
            <div class="card col-12  p-3 mt-5">
              <div class="card-body  ">
                <h1 class="card-title p-3 text-dark text-center headgd ">
                  Successefully Registered
                </h1>
                <br></br>
                <div class="card-body  bg-light  p-3">
                  <div class="col-lg-6">
                    <p>
                      <b>Amount :</b>
                    </p>
                  </div>
                  
                  <div class="col-lg-6">
                  <p><b>Detection Probability :</b></p>
                
                  </div>
                  <div col-lg-3  ></div>
                  <div col-lg-6  >
                        <button
                          type="button"
                         
                          class="btn btn-primary btn-sm"
                        >
                          DOWNLOAD
                        </button>
                      </div>
                  
                  
                  
                  
</div>
                  

                    
                  </div>
                </div>
            
            </div>
          </div>
        </div>
        
                  
  );
};

export default Key;