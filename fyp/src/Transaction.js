import React, { Component, useState } from "react";

import { Redirect, withRouter } from "react-router-dom";

import Moment from "moment";

const Transaction = () => {

  const[data,setData]=useState({})

  useEffect(() => {axios
    .get("")
    .then((response) =>{setData(response.data);
  });  
  },[]);

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
                      <b>Amount : &nbsp; {data.amount}</b>
                    </p>
                  </div>
                  
                  <div class="col-lg-3">
                  <p><b>Detection Probability : &nbsp; {data.detection_probability}</b></p>
                  </div>
                  <div class="col-lg-3">
                    <p>
                      <b>Hash Stake : &nbsp; {data.hash_stake}</b>
                    </p>
                  </div>
                  <div class="col-lg-3">
                    <p><b>ID : &nbsp; {data.id}</b></p>
                  </div>
                  <div class="col-lg-3">
                    <p><b>Node IPFS Hash : &nbsp; {data.node_ipfs_hash} </b></p>
                  </div>
                  <div class="col-lg-3">
                    <p><b>Reciever Public Key : &nbsp; {data.recieverPublicKey}</b></p>
                  </div>
                  <div class="col-lg-3">
                    <p><b>Sender Public Key : &nbsp; {data.senderPublicKey}</b></p>
                  </div>
                  <div class="col-lg-3">
                    <p><b>Signature : &nbsp; {data.signature}</b></p>
                  </div>

                  
                  </div>
                  
              </div>
            </div>
          </div>
          </div>
          
    
    
          
  );
};

export default Transaction;