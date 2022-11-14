const {Gps} = require('../models/models')
const { Op } = require('sequelize')


class GpsController {
    async create(req, res) {
        const {name, time, lat, long, color} = req.query
        const gps = await Gps.create({name, time, lat, long, color})
        return res.json(gps)
    }

    async upDelGet(req, res) {
        const {id,name, time, lat, long, color} = req.query
        await Gps.update({name, time, lat, long, color},{where: {id} })
        await Gps.destroy({where:  { time: {[Op.lt]:time-100} }})
        const gps = await Gps.findAll({where: { id: {[Op.notIn]:[id]} }})
        return res.json(gps)
    }

}

module.exports = new GpsController()