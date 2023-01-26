import classes from "./ShoppingListItem.module.css";

export const ShoppingListItem = () => {
  return (
    <div className="flex items-center p-2">
      <input type="checkbox" className="mr-2" />
      <h3 className="flex-1">Carrots</h3>
      <button className={classes.removeButton}>x</button>
    </div>
  );
};
