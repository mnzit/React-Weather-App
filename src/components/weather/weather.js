import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Weather extends Component {

    constructor(props) {
        super(props);
        console.log(props.data)
    }

    render() {
        return (
            <div>
                {this.props.found ?
                    <Card variant="outlined" style={{marginTop: "50px", paddingLeft: "20px", width:"50%"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                Country
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {this.props.data.name} ({this.props.data.country})
                            </Typography>
                            <Typography gutterBottom variant="h6">
                                Temperature
                            </Typography>
                            <Typography gutterBottom variant="h1" component="h3">
                                {parseFloat(this.props.data.temp - 273.15).toFixed(2)} °C
                            </Typography>
                            <Typography gutterBottom variant="h6">
                                Humidity
                            </Typography>
                            <Typography color="textSecondary">
                                {this.props.data.humidity}
                            </Typography>
                            <Typography gutterBottom variant="h6">
                                Wind Speed
                            </Typography>
                            <Typography variant="body2" component="p">
                                {this.props.data.windSpeed}
                                <br/>
                            </Typography>
                        </CardContent>
                    </Card>
                    : this.props.initialized ? <Card variant="outlined" style={{marginTop: "50px", paddingLeft: "20px", width:"50%"}}>
                        <CardContent>Not found</CardContent>
                    </Card> : ""}
            </div>
        );
    }
}

export default Weather;
