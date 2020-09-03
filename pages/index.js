import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../eth/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';
//import 'semantic-ui-css/semantic.min.css';

class CampaignIndex extends Component{

    static async getInitialProps() {
        const projects = await factory.methods.getDeployedCamapigns().call();
        return {projects};
    }

    renderProjects() {
        const items = this.props.projects.map(address =>{
            return {header : address, description : (<Link route={`/campaigns/${address}`}><a>View Project</a></Link>), fluid : true};
        });
        return <Card.Group items={items} />;
    }

    render() {
    return (
    <Layout>
    <div>
        
        <h3>Curretly Registered Projects</h3>
        <Link route="/campaigns/new">
            <a>
                <Button floated="right" content="Add Project" icon="add circle" primary></Button>
            </a>
        </Link>
        
        {this.renderProjects()}
    </div>
    </Layout>
    );
    }
}

export default CampaignIndex;