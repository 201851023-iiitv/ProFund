import React, {Component} from 'react';
import {Card, Grid, Button} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../eth/campaign';
import web3 from '../../eth/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component{

    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        //console.log(summary);
        return { 
            address:props.query.address,
            minimumContribution:summary[0],
            balance:summary[1],
            requestsCount:summary[2],
            approversCount:summary[3],
            manager:summary[4]
        };
    }

    renderCard(){

        const {balance,manager,minimumContribution,approversCount,requestsCount} = this.props;

        const items = [{
            header : manager,
            meta : 'Address of the Project Owner',
            description : 'Owner can request for approvals from contributors where to spend the money.',
            style : {overflowWrap : 'break-word'}
        },
        {
            header : minimumContribution,
            meta : 'Minimum Contibution required in wei',
            description : 'To be added as a contributor, contribute this much or more in order to be eligible to approve requests.'
        },
        {
            header : requestsCount,
            meta : 'Number of requests created by project owner',
            description : 'A request reaches the contributors so that they can approve whether to spend the money or not'
        },
        {
            header : approversCount,
            meta : 'Current number of contributors',
            description : 'Number of People who have joined this project'
        },
        {
            header : web3.utils.fromWei(balance, 'ether'),
            meta : 'Project Balance in (ether)',
            description : 'The contract holds this amount currently for use'
        }
        ];
        return <Card.Group items={items} />;
    }
    render() {
        return (
            <Layout>
                <h3>Project Details</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCard()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>

                    </Grid.Row>
                    
                </Grid>                
            </Layout>           
        );
    }
}

export default CampaignShow;