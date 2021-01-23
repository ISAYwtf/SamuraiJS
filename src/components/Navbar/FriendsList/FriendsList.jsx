import classes from './FriendsList.module.css';
import StoreContext from "../../../StoreContext";

const FriendsList = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                const friendsElements = store.getState().sidebar.friends.map(el => <div className={classes.item}>
                    <img src={el.img}/>
                </div>);

                return (
                    <div className={classes.friends}>
                        <h3 className={classes.title}>Friends</h3>
                        <div className={classes.itemList}>
                            {friendsElements}
                        </div>
                    </div>
                )
            }}
        </StoreContext.Consumer>
    )
}

export default FriendsList;
