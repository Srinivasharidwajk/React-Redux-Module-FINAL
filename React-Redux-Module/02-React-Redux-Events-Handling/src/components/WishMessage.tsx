import React, {useState} from 'react';
import * as messageActions from '../redux/wish-message/wish-message.actions';
import * as messageReducer from '../redux/wish-message/wish-message.reducer';
import {useDispatch, useSelector} from "react-redux";

interface IProps {}

interface ReduxMessageState{
    wishMessage : messageReducer.MessageState
}

let WishMessage:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    let messageState:messageReducer.MessageState = useSelector((state:ReduxMessageState) => {
        return state.wishMessage;
    });

    let clickGoodMorning = () => {
        dispatch(messageActions.goodMorning());
    };
    let clickGoodAfternoon = () => {
        dispatch(messageActions.goodAfternoon());
    };
    let clickGoodEvening = () => {
        dispatch(messageActions.goodEvening());
    };

    return (
        <React.Fragment>
            <pre>{JSON.stringify(messageState)}</pre>
            <section className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3">{messageState.message}</p>
                                <button onClick={clickGoodMorning} className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={clickGoodAfternoon} className="btn btn-warning btn-sm">Good Afternoon</button>
                                <button onClick={clickGoodEvening} className="btn btn-danger btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default WishMessage;