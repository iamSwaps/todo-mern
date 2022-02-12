function Modal(props){
    function noHandler(){
        props.onNo();
    }

    function yesHandler(){
        props.onYes();
    }

    return(
        <div className='modal'>
            <p>Are you sure to delete {props.text}?</p>
            <button onClick={noHandler}>No</button>
            <button onClick={yesHandler}>Yes</button>
        </div>
    );
}

export default Modal;