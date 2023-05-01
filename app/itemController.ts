import { item } from "../model";
import { Request, Response } from "express";
// models path depends on your structure
const create = (req: Request, res: Response) => {
    // Validating the request
    if (!req.body.name) {
        res.status(400).send({
            message: 'item name is mandotory!'
        });
        return;
    }
    if (!req.body.description) {
        res.status(400).send({
            message: 'description is mandotory!'
        });
        return;
    }
    if (!req.body.price) {
        res.status(400).send({
            message: 'price is mandotory!'
        });
        return;
    }

    // Creating a item
    const itemData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price ? req.body.price : '100'
    };

    // Saving the item in the database
    item.create(itemData).then((data: any) => {
        res.send(data);
    }).catch((err: any) => {
        res.status(500).send({
            Message:
                err.message || 'Some errors will occur when creating a item'
        });
    });
};

const findItemById = (req: Request, res: Response) => {
    const id = req.params.id;
    item.findOne({where:{id}}).then((data: any) => {
        if(!data){
            return res.status(500).send({
                message: 'item does not exist with thisid'
            });
        }
        res.send(data);
    }).catch((err: any) => {
        res.status(500).send({
            message: err.message || 'Error while retrieving item with id=' + id
        });
    });
};
const updateItemById = (req: Request, res: Response) => {
    const id = req.params.id;
    // updating an item
    item.findByPk(id).then((data: any) => {
        if(!data){
            return res.status(500).send({
                message: 'item does not exist with this id'
            });
        }
        const itemData = {
            name: req.body.name || data.name,
            description: req.body.description || data.description,
            price: req.body.price ? req.body.price : data.price
        };
        item.update(itemData,{where: {id}}).then((data: any) => {
            res.send({message:"Item Is Updated"})
        }).catch((err: any) => {
            res.status(500).send({
                message: err.message || 'Error while updating item with id=' + id
            });
        })
    }).catch((err: any) => {
        res.status(500).send({
            message: err.message || 'Error while retrieving item with id=' + id
        });
    });
};
const deleteItemById = (req: Request, res: Response) => {
    const id = req.params.id;
    item.findByPk(id).then((data: any) => {
        if(!data){
            return res.status(500).send({
                message: 'item does not exist with this id'
            });
        }
        item.destroy({where: {id}}).then((data: any) => {
            res.send({message:"Item Is deleted"})
        }).catch((err: any) => {
            res.status(500).send({
                message: err.message || 'Error while deleting item with id=' + id
            });
        })
    }).catch((err: any) => {
        res.status(500).send({
            message: err.message || 'Error while retrieving item with id=' + id
        });
    });
};
const findAll = (req: Request, res: Response) => {
    item.findAll().then((data: any) => {
        res.send(data);
    }).catch((err: any) => {
        res.status(500).send({
            message:
                err.message || 'Some error have occurred when retrieving the tutorials.'
        });
    });
};

export { create, findItemById, findAll, updateItemById, deleteItemById }
