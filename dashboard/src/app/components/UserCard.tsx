

const UserCard = () => {
    return (
        <>
            <div className="folder-icons">
                <div className="avatar">
                    <div className="online">
                    </div>
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" />
                </div>
                <div className="names">Don Allen
                </div>

            </div>
            <div className="folder-icons">
                <div className="avatar">
                    <div className="online">
                    </div>
                    <img src="https://randomuser.me/api/portraits/women/71.jpg" />
                </div>
                <div className="names">Aaron Tim</div>
            </div>
            <div className="folder-icons">
                <div className="avatar">
                    <div className="online red">
                    </div>
                    <img src="https://randomuser.me/api/portraits/men/54.jpg" />
                </div>
                <div className="names">Jack Joe</div>
            </div>
        </>
    );
}

export default UserCard;