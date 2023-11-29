import React from 'react';
import { useGetLeaveQuery } from "../Features/apiSlice";
import {useRemoveLeaveTypeMutation} from "../Features/apiSlice"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ShowData = () => {
  const { id } = useParams();
  const { data } = useGetLeaveQuery();
  const leaveData = data?.[0]?.Data;
  const [deleteData, {data: data2}] = useRemoveLeaveTypeMutation();
  return (
    <div>
      <h1>This is the Show Data</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Leave Type Name</th>
            <th>Leave Type Details</th>
            <th>Created On</th>
            <th>Leave Type Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {leaveData?.map((item, index) => (
  <tr key={index}>
    <td>{item.LeaveTypeName}</td>
    <td>{item.LeaveTypeDetails}</td>
    <td>{iteeam.crtedAt}</td>
    <td>{item.LeaveTypeStatus ? 'Active' : 'Deactivated'}</td>
    <td>
      <button><Link to={`/update/${item._id}`}>Update</Link></button>
      <button onClick={() => deleteData(item._id)}>Delete</button>
    </td>
  </tr>
))}

        </tbody>
      </table>
    </div>
  );
}

export default ShowData;
