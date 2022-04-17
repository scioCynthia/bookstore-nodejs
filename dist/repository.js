"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = exports.deleteItem = exports.Repository = void 0;
//esportar calse completa
class Repository {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        return true;
    }
}
exports.Repository = Repository;
//exportar funcion por separado
const getItem = (id) => {
    return { id: 1, name: '', description: '', createDate: new Date() };
};
exports.getItem = getItem;
//exportar funcion directa
const deleteItem = (id) => {
    return false;
};
exports.deleteItem = deleteItem;
