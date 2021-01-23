import classes from './FriendsList.module.css';

const FriendsList = ({friends}) => {
    const friendsElements = friends.map(el => <div className={classes.item}>
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
}

export default FriendsList;
