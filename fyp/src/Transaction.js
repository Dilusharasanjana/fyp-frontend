import React, { Component } from "react";

import { Redirect, withRouter } from "react-router-dom";

import Moment from "moment";

const Transaction = () => {
  return (
    <div >
        <div class=" d-none d-md-block ">
          <div class=" container bg-dark  p-3 mt-5  ">
            <div class=" card  p-3 mt-5   ">
            
              <h1 class="card-title p-3 text-dark text-center headgd ">
                  
                  Transactions
                </h1>
                <div class="card-body  bg-light  p-3">
                  <div class="col-lg-3">
                    <p>
                      <b>Amount :</b>
                    </p>
                  </div>
                  
                  <div class="col-lg-3">
                  <p><b>Detection Probability :</b></p>
                  </div>
                  <div class="col-lg-3">
                    <p>
                      <b>Hash Stake : </b>
                    </p>
                  </div>
                  <div class="col-lg-3">
                    <p><b>ID : </b></p>
                  </div>
                  <div class="col-lg-3">
                    <p><b>Node IPFS Hash : </b></p>
                  </div>
                  <div class="col-lg-3">
                    <p><b>Reciever Public Key : </b></p>
                  </div>
                  <div class="col-lg-3">
                    <p><b>Sender Public Key : </b></p>
                  </div>
                  <div class="col-lg-3">
                    <p><b>Signature : </b></p>
                  </div>

                  
                  </div>
                  
              </div>
            </div>
          </div>
          </div>
          
    
    
          
  );
};

export default Transaction;