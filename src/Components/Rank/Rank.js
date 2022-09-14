import React from "react";

const Rank = ({count}) => {
    return (
        <div>
            <div className="white f3 tc">{"David, Your current rank is ..."}</div>
            <div className="white f1 tc">{count}</div>
        </div>
    )
}

export default Rank;