import React from 'react';
import { connect } from 'react-redux';
import "../TopMenu/_topmenu.scss";
import  getTopMenu  from '../../redux/actions/topMenu';

// const menu=['Home','Women','Men','Kids','Best Seller'];

const TopMenu = (props) => {
    // console.log(props)
    const {topMenu} = props.state;
    return(
    <>
    <header className="menuHeader">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <nav className="menu">
                        <ul>
                            {topMenu.map((item,index)=>(
                                <li key={index}>
                                <a href="#">{item}</a>
                            </li>
                            ))}
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    </>
)
}

let mapStateToProps = (state) => {
    return {
        state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getMenu: dispatch(getTopMenu()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);