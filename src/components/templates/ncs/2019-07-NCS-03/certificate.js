import React from "react";
import PropTypes from "prop-types";
import { newBackgroundImg, stampImg, ncsLogo } from "./resources";
import { format } from "date-fns";
export const printTextStyle = {
  textAlign: "center"
};

// Disabled eslint as there's no way to add 
//proptypes to an anonymous function like this
const Template = ({ document }) => (
  <div
    className="container"
    style={{
      backgroundImage: `url('${newBackgroundImg}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      border: "10px solid #787878"
    }}
  >
    <div className="p-2">
      <div className="my-5 m-lg-5 text-center">
        <img src={ncsLogo} className="w-100" style={{ maxWidth: 200 }} />
      </div>
      <div className="my-5 m-lg-2 d-flex justify-content-center">
        <hr style={{ border: "2px solid black", width: "500px" }} />
      </div>
      <div
        className="h5 mb-4 mb-lg-1 d-flex justify-content-center font-family:Calibri"
        style={printTextStyle}
      >
        {document.issuers[0].name} 
      </div>
      <div
        className="h5 mb-4 mb-lg-5 d-flex justify-content-center font-family:Calibri"
        style={printTextStyle}
      >
        upon the recommendation of the Faculty hereby confers on
      </div>
      <div
        className="h3 mb-4 mb-lg-5 d-flex justify-content-center"
        style={printTextStyle}
      >
        <b>{document.recipient.name}</b>
      </div>

      <div className="row">
        <div className="col-2">
          <div className="ml-1 justify-content-right align-items-end">
            <img
              className="w-100"
              style={{
                fwidth: "30%",
                height: "100%"
              }}
              src={stampImg}
            />
          </div>
        </div>
        <div className="col-8">
          <div
            className="h5 mb-4 mb-lg-1 d-flex justify-content-center"
            style={printTextStyle}
          >
            the degree of
          </div>
          <div
            className="h2 mb-4 mb-lg-0 d-flex justify-content-center"
            style={{
              color: "#CD0707",
              textAlign: "center"
            }}
          >
            <b>Bachelor of Engineering</b>
          </div>
          <div
            className="h3 mb-4 mb-lg-0 d-flex justify-content-center"
            style={{
              color: "#CD0707",
              textAlign: "center"
            }}
          >
            <b>{document.name}</b>
          </div>
          <div
            className="h4 mb-4 mb-lg-0 d-flex justify-content-center"
            style={{
              color: "#CD0707",
              textAlign: "center"
            }}
          >
            <b>{document.additionalData.result}</b>
          </div>
          <div
            className="h5 mb-4 mb-lg-3 d-flex justify-content-center"
            style={{
              color: "#CD0707",
              textAlign: "center"
            }}
          >
          </div>

          <div
            className="h5 mb-4 mb-lg-3 d-flex justify-content-center"
            style={printTextStyle}
          >
            with all its honour, priviledges and obligations on
          </div>
          <div
            className="h5 mb-4 mb-lg-5 d-flex justify-content-center"
            style={printTextStyle}
          >
            <b>{format(document.issuedOn, "DD MMM YYYY")}</b>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center  m-0 p-2 mb-5"
        style={printTextStyle}
      >
        <div className="col-1" />
        <div className="col-3">
          <img
            className="w-100 ml-1"
            src={document.additionalData.certSignatories[0].signature}
          />
          <hr className="m-1 ml-2" style={{ border: "0.5px solid black" }} />
          <div className="d-flex justify-content-center">
            <b>{document.additionalData.certSignatories[0].position}</b>
          </div>
          <div className="d-flex justify-content-center">
            <b>({document.additionalData.certSignatories[0].name})</b>
          </div>
        </div>

        <div className="col-2" />
        <div className="col-3">
          <img
            className="w-100 ml-1"
            src={document.additionalData.certSignatories[1].signature}
          />
          <hr className="m-1 ml-2" style={{ border: "0.5px solid black" }} />
          <div className="d-flex justify-content-center">
            <b>{document.additionalData.certSignatories[1].position}</b>
          </div>
          <div className="d-flex justify-content-center">
            <b>({document.additionalData.certSignatories[1].name})</b>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row-reverse my-7">
        Serial No. {document.additionalData.serialNo}
      </div>
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

