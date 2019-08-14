"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * User model (temporário, simulando bd)
 */
const users = [
    { id: '1', name: 'zé roela', email: 'ze.roela@gmail.com' },
    { id: '2', name: 'zé das couves', email: 'couve@gmail.com' }
];
class User {
    static findAll() {
        return Promise.resolve(users);
    }
    static findById(id) {
        return new Promise(resolve => {
            const filtered = users.filter(user => user.id === id);
            let user = undefined;
            if (filtered.length > 0) {
                user = filtered[0];
            }
            resolve(user);
        });
    }
}
exports.User = User;
//# sourceMappingURL=users.model.js.map