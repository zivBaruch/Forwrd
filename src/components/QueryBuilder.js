import React from "react";
import QueriesContainer from './QueriesContainer';
import QueriesOutput from './QueriesOutput';
import { Page } from "../style/Style";
const QueryBuilder = () => {
    return(
        <Page>
            <QueriesContainer />
            <QueriesOutput />
        </Page>
    )
}

export default QueryBuilder;