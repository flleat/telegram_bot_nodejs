import DB from './db.js';


const db = new DB();

db.connect();

const db_data = {};

function loadData(key, data) {
    db_data[key] = data;
}

db.get('all_members', 'SELECT tg_username, group_number FROM audience');

export { db_data, loadData };