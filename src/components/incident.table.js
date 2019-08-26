import React from "react";
import {Table,Button} from "react-bootstrap";
import {beautifyDate, toTitleCase} from "../redux/helper.functions";
import {Link} from "react-router-dom";
import {createStatusBackground} from "./incident.status";

export const IncidentTable = ({incidents,deleteHandler}) => {
    return (
        <Table
            variant="dark"
            striped bordered hover
            // size="sm"
            className="mt-3">
            <thead className="incidents-table-head">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Created On</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {incidents.map(i => (
                <tr key={i._id}>
                    <td>
                        <Link to={`/incident/${i._id}/details`} >
                            {i.title}
                        </Link>
                    </td>
                    <td>{i.description}</td>
                    <td><div className={`brr p-1 bg-${createStatusBackground(i.status)}`}></div>
                        &nbsp;{toTitleCase(i.status)}
                    </td>
                    <td>{beautifyDate(i.createdOn)}</td>
                    <td>
                        <Link to={`/incident/${i._id}/edit`}>
                            <Button size="sm" variant="info" className="mr-2 mb-2" >
                                Edit
                            </Button>
                        </Link>

                        <Button size="sm" variant="danger" onClick={deleteHandler(i._id)} className="mb-2">
                            Delete
                        </Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};