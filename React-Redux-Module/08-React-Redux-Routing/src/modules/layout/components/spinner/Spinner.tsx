import React from 'react';
import spinner from '../../../../assets/img/spinner.gif';

interface IProps {}
interface IState {}

let Spinner:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <div>
                <img src={spinner} alt="" className="d-flex m-auto"/>
            </div>
        </React.Fragment>
    );
};
export default Spinner;