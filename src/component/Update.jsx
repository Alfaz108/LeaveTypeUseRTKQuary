import React, { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useGetLeaveQuery } from "../Features/apiSlice";
import { useEditLeaveMutation } from "../Features/apiSlice";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  console.log(id);
  const [editLeave] = useEditLeaveMutation();
  const { data } = useGetLeaveQuery();
  const leaveData = data?.[0]?.Data;
  const navigation = useNavigate();
  const [updateData, setUpdateData] = useState({});
  useEffect(() => {
    if (id) {
      // console.log(leaveData);
      const singleData = leaveData?.find((singleData) => singleData._id === id);
      // console.log(singleData);
      setUpdateData(singleData);
    }
  }, [id, leaveData]);

  // console.log(updateData);

  const onChangeHandler = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editLeave({ id: id, data: updateData });
    navigation("/");
    // console.log({ [e.target.name]: e.target.value });
  };
  // console.log(leaveData);

  // const {
  //   LeaveTypeName: initialLeaveTypeName,
  //   LeaveTypeDetails: initialLeaveTypeDetails,
  // } = leaveData;

  // const [editLeave, { data: editedLeave, isError, isLoading, isSuccess }] =
  //   useEditLeaveMutation();

  // const [LeaveTypeName, setLeaveTypeName] = useState(initialLeaveTypeName);
  // const [LeaveTypeDetails, setLeaveTypeDetails] = useState(
  //   initialLeaveTypeDetails
  // );

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   editLeave({
  //     id: leaveid,
  //     data: {
  //       LeaveTypeName,
  //       LeaveTypeDetails,
  //       LeaveTypeStatus: true,
  //     },
  //   });
  // };

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
            name="LeaveTypeName"
            defaultValue={updateData?.LeaveTypeName}
            onChange={onChangeHandler}
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
            name="LeaveTypeDetails"
            defaultValue={updateData?.LeaveTypeDetails}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" id="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
