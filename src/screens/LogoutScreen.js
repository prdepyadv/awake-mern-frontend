import React, { useEffect }  from 'react'

function LogoutScreen({ setToken }) {
    useEffect(() => {
        setToken('delete');
        sessionStorage.clear();
    });

    return (
        <div className="main">
            Logging out...
        </div>
    )
}
export default LogoutScreen
