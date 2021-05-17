import React from 'react';
import {IProfile} from "./github/models/IProfile";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

interface IProps {

}
interface IState {}

let GithubProfile:React.FC<IProps> = ({}) => {
    return (
        <React.Fragment>
           <section className="container">
               <div className="row">
                   <div className="col-md-3">
                       <GithubProfileCard/>
                   </div>
                   <div className="col-md-9">
                       <GithubProfileDetails/>
                   </div>
               </div>
           </section>
        </React.Fragment>
    );
};
export default GithubProfile;