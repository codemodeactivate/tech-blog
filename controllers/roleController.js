const { Role } = require('../models');

module.exports = {
    getAllRoles: async (req, res, next) => {
        try {
            const roles = await Role.findAll();
            res.json(roles);
        } catch (err) {
            next(err);
        }
    },
    getRoleByID: async (req, res, next) => {
        try {
            const roles = await Role.findByPk(req.params.id);
            res.json(roles);
        } catch (err) {
            next(err);
        }
    },
    createRole: async (req, res, next) => {
        try {
            const newRole = await Role.create(req.body);
            res.json(newRole);
        } catch (err) {
            next(err);
        }
    },

    updateRole: async (req, res, next) => {
        try {
            const updatedRole = await Role.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.json(updatedRole);
        } catch (err) {
            next(err);
        }
    },

    deleteRole: async (req, res, next) => {
        try {
            await Role.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.json({ message: 'Role deleted successfully.' });
        } catch (err) {
            next(err);
        }
    }
};
