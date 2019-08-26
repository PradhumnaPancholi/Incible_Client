import React from "react";
import {ButtonGroup,Button} from "react-bootstrap";
import {NavItemIcon} from "./navbar.component";

export const IncidentListType = ({displayType,onTypeChange}) => {
    return <ButtonGroup>
        <Button variant="secondary" className={`incident-type-button border ${displayType==="List" && "filter-selected"}`} onClick={onTypeChange("List")}>
            <NavItemIcon
                icon="fa-list"
            />List
        </Button>
        <Button variant="secondary" className={`incident-type-button border ${displayType==="Detailed" && "filter-selected"}`} onClick={onTypeChange("Detailed")}>
            <NavItemIcon
                icon="fa-address-card"
            />Detailed
        </Button>
    </ButtonGroup>
};