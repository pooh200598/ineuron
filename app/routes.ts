
import { Router } from "express";
import { create, deleteItemById, findAll, findItemById, updateItemById } from "./itemController";
const router = Router()
 
// Creating a new item
router.post('/', create);

// // Retrieving all the Items
router.get('/', findAll);


// // Retrieving a single item with id
router.get('/:id', findItemById);

// // Updating a item with ID
router.put('/:id', updateItemById);

// // Deleting a item with ID
router.delete('/:id', deleteItemById);
export {router}