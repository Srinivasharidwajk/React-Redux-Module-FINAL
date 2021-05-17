import React, {useState} from 'react';
import * as hobbyActions from '../redux/hobby-selector/hobby-selector.actions';
import * as hobbyReducer from '../redux/hobby-selector/hobby-selector.reducer';
import {useDispatch , useSelector} from "react-redux";

interface IProps {}
interface IState {
    hobby : hobbyReducer.HobbyState
}

let HobbySelector:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    let hobbyState:hobbyReducer.HobbyState = useSelector((state : IState) => {
        return state.hobby;
    });


   let changeEating = (event : React.ChangeEvent<HTMLInputElement>) => {
        dispatch(hobbyActions.checkEating(event.target.checked));
   };

    let changeCoding = (event : React.ChangeEvent<HTMLInputElement>) => {
        dispatch(hobbyActions.checkCoding(event.target.checked));
    };

    let changeSleeping = (event : React.ChangeEvent<HTMLInputElement>) => {
        dispatch(hobbyActions.checkSleeping(event.target.checked));
    };

    return (
        <React.Fragment>
            <pre>{JSON.stringify(hobbyState)}</pre>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-info text-white">
                                    <p className="h4">Hobby Selector</p>
                                </div>
                                <div className="card-body bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <form>
                                                <div className="form-check">
                                                    <input
                                                        name="eating"
                                                        onChange={changeEating}
                                                        className="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault"/>
                                                    <label className="form-check-label"
                                                           htmlFor="flexCheckDefault">
                                                        Eating
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        name="coding"
                                                        onChange={changeCoding}
                                                        className="form-check-input" type="checkbox" value=""
                                                        id="flexCheckChecked"/>
                                                    <label className="form-check-label"
                                                           htmlFor="flexCheckChecked">
                                                        Coding
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        name="sleeping"
                                                        onChange={changeSleeping}
                                                        className="form-check-input" type="checkbox" value=""
                                                        id="flexCheckChecked"/>
                                                    <label className="form-check-label"
                                                           htmlFor="flexCheckChecked">
                                                        Sleeping
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-8">
                                            {
                                                hobbyState.eating &&
                                                <div className="card animated jello">
                                                    <div className="card-body bg-success text-white ">
                                                        <p className="h3">Eating</p>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, iure?</p>
                                                    </div>
                                                </div>
                                            }

                                            {
                                                hobbyState.coding &&
                                                <div className="card mt-2 animated jello">
                                                    <div className="card-body bg-warning text-white">
                                                        <p className="h3">Coding</p>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, iure?</p>
                                                    </div>
                                                </div>
                                            }

                                            {
                                                hobbyState.sleeping &&
                                                <div className="card mt-2 animated jello">
                                                    <div className="card-body bg-danger text-white">
                                                        <p className="h3">Sleeping</p>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, iure?</p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default HobbySelector;