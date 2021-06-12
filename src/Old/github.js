import React from 'react';
import axios from 'axios';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
const styleBack = {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: '650px',
    width: '550px',
    alignItems: 'center',
    borderRadius: "16px",
    margin: '0px auto',
};
const styleTitle = {
    fontSize: "35px",
}
const styleBlock = {
    marginTop: '50px',
}


const GithubProfile=()=>{
    return (
        <div style = {styleBack}>
            <div style = {styleBlock} >
                <UserGithub></UserGithub>
            </div>
        </div>
    )
}
class UserGithub extends React.Component{
    constructor(props){
        super(props);
        this.JsonUrl = "https://api.github.com/users/yenchunR";
        this.state = {
            userName: '',
            githubUrl: '',
            avataUrl: '',
            Followers: '',
            Followings: '',
            Location: '',
            Blog: '',
        }
    }
    componentDidMount(){
        axios.get(this.JsonUrl).then(result =>{
            console.log(result);
            const data = result.data;
            if(data){
                this.setState({
                    userName: data.login,
                    githubUrl: data.html_url,
                    avataUrl: data.avatar_url,
                    Followers: data.followers,
                    Followings: data.following,
                    Location: data.location,
                    Blog: data.blog,
                });
            }
        });
    }
    render(){
        return(
            <div>
                <img src={this.state.avataUrl} style={{height:250+'px',marginTop:30+'px',borderRadius: 360+'px',}}></img>
                <h3 style={styleTitle}>{this.state.userName}</h3>
                 <ListItem button component="a" href={this.state.githubUrl}>
                    <ListItemIcon><GitHubIcon /></ListItemIcon>
                    <ListItemText primary="Github Link" />
                </ListItem>
                
                <ListItem text>
                    <ListItemIcon><LocationOnIcon /></ListItemIcon>
                    <ListItemText primary={this.state.Location} />
                </ListItem>
                <ListItem text>
                    <ListItemIcon><PersonAddRoundedIcon /></ListItemIcon>
                    <ListItemText primary={this.state.Followers} />
                    <ListItemIcon><PeopleAltIcon /></ListItemIcon>
                    <ListItemText primary={this.state.Followings} />
                </ListItem>
                <ListItem button component="a" href={this.state.Blog}>
                    <ListItemIcon><AssignmentIndIcon /></ListItemIcon>
                    <ListItemText primary="My BLOG Link" />
                </ListItem>
            </div>
        );
    }
}
export default GithubProfile;