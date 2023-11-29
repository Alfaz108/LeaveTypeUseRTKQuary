import React, { useState } from "react";
import { useAddLeaveMutation } from "../Features/apiSlice";
import { useGetLeaveQuery } from "../Features/apiSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const AddData = () => {
  const navigation = useNavigate();
  // const fetchLeave = useGetLeaveQuery();

  const [AddLeave] = useAddLeaveMutation();
  const [LeaveTypeName, setLeaveTypeName] = useState("");
  const [LeaveTypeDetails, setLeaveTypeDetails] = useState("");
  const resetForm = () => {
    setLeaveTypeDetails("");
    setLeaveTypeName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AddLeaveetails,
      LeaveTypeStatus: true,
    });
    navigation("/");
    resetForm();
    // fetchLeave.refetch();
  };
({
      LeaveTypeName,
      LeaveTypeD
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputField" className="form-label">
            Input Field:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputField"
            title="LeaveTypeName"
            value={LeaveTypeName}
            onChange={(e) => setLeaveTypeName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="textarea" className="form-label">
            Textarea:
          </label>
          <textarea
            className="form-control"
            id="textarea"
            rows="5"
            title="LeaveTypeDetails"
            value={LeaveTypeDetails}
            onChange={(e) => setLeaveTypeDetails(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" id="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddData;
